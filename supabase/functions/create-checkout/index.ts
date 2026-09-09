// Supabase Edge Function: create a Stripe Checkout Session for the signed-in
// user. Requires the caller's Supabase JWT (Authorization: Bearer <token>).
// Secrets needed: STRIPE_SECRET_KEY, STRIPE_PRICE_ID, SITE_URL.
// (SUPABASE_URL and SUPABASE_ANON_KEY are provided automatically.)
import Stripe from 'https://esm.sh/stripe@16.12.0?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });

  try {
    const authHeader = req.headers.get('Authorization') ?? '';
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } },
    );
    const {
      data: { user },
    } = await supabase.auth.getUser(authHeader.replace('Bearer ', ''));
    if (!user) return json({ error: 'Not authenticated' }, 401);

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
      apiVersion: '2024-06-20',
      httpClient: Stripe.createFetchHttpClient(),
    });
    const siteUrl = Deno.env.get('SITE_URL') ?? 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: Deno.env.get('STRIPE_PRICE_ID')!, quantity: 1 }],
      client_reference_id: user.id,
      customer_email: user.email ?? undefined,
      metadata: { user_id: user.id },
      success_url: `${siteUrl}/account?checkout=success`,
      cancel_url: `${siteUrl}/account?checkout=cancel`,
    });

    return json({ url: session.url });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});
