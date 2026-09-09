# Supabase Edge Functions — payment

Two functions power the paywall:

- `create-checkout` — creates a Stripe Checkout Session for the signed-in user.
- `stripe-webhook` — on a completed payment, sets `entitlements.has_access = true`.

## One-time setup (you run this — it needs your Stripe secret key)

1. Install the Supabase CLI, then from the `encyclopedia/` folder:

   ```bash
   supabase login
   supabase link --project-ref pguptjameckhmnfvxtxu
   ```

2. Set the secrets (replace with your real Stripe **test** secret key):

   ```bash
   supabase secrets set \
     STRIPE_SECRET_KEY=sk_test_xxx \
     STRIPE_PRICE_ID=price_1UDn86RlOlNeOa53nXcsVM7C \
     SITE_URL=http://localhost:3000
   ```

   `SUPABASE_URL`, `SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` are
   injected automatically — do not set them.

3. Deploy the functions (the webhook must skip JWT verification, since Stripe
   has no Supabase token):

   ```bash
   supabase functions deploy create-checkout
   supabase functions deploy stripe-webhook --no-verify-jwt
   ```

4. Register the webhook in Stripe → **Developers → Webhooks → Add endpoint**:

   - URL: `https://pguptjameckhmnfvxtxu.supabase.co/functions/v1/stripe-webhook`
   - Event: `checkout.session.completed`
   - After creating it, reveal the **Signing secret** (`whsec_…`) and set it:

     ```bash
     supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_xxx
     supabase functions deploy stripe-webhook --no-verify-jwt
     ```

5. When you go live: switch Stripe to live mode, use the live `price_…` and
   `sk_live_…`, set `SITE_URL` to your real domain, and add a live webhook.

## Test flow

Log in on the site → **My account** → **Get full access — €29.99** → pay with a
Stripe test card (`4242 4242 4242 4242`, any future date/CVC) → you are sent
back to `/account?checkout=success`. The webhook flips your access; press
**Refresh** if the badge has not updated yet.
