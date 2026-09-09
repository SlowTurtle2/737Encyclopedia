// Supabase Edge Function: Stripe webhook. On a completed one-time payment it
// flips the buyer's entitlement to has_access = true (via the service role,
// which bypasses RLS). Deploy WITHOUT JWT verification (Stripe has no JWT):
//   supabase functions deploy stripe-webhook --no-verify-jwt
// Secrets needed: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET.
// (SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are provided automatically.)
import Stripe from 'https://esm.sh/stripe@16.12.0?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
  apiVersion: '2024-06-20',
  httpClient: Stripe.createFetchHttpClient(),
});
const cryptoProvider = Stripe.createSubtleCryptoProvider();

Deno.serve(async (req) => {
  const signature = req.headers.get('stripe-signature');
  const body = await req.text();
  if (!signature) return new Response('Missing signature', { status: 400 });

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      Deno.env.get('STRIPE_WEBHOOK_SECRET')!,
      undefined,
      cryptoProvider,
    );
  } catch (e) {
    return new Response(`Bad signature: ${e}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const s = event.data.object as Stripe.Checkout.Session;
    const userId = s.client_reference_id ?? s.metadata?.user_id ?? null;
    if (userId) {
      const admin = createClient(
        Deno.env.get('SUPABASE_URL')!,
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
      );
      await admin.from('entitlements').upsert({
        user_id: userId,
        has_access: true,
        granted_at: new Date().toISOString(),
        stripe_customer_id:
          typeof s.customer === 'string' ? s.customer : null,
        stripe_checkout_session_id: s.id,
      });
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
