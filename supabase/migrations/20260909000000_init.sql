-- 737Encyclopedia paywall schema
-- Run this in the Supabase SQL editor (or via the Supabase CLI) once your
-- project is created. It sets up accounts profiles, a per-user access flag,
-- and the SOP question bank, all protected by Row Level Security (RLS) so the
-- paid content is only ever readable by a user who has access.

-- ---------------------------------------------------------------------------
-- profiles: one row per auth user (convenience mirror of auth.users)
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- entitlements: has this user paid for access? (lifetime, one-time)
-- Only the service role (Stripe webhook) may write here. Users may read
-- their own row so the app can show locked/unlocked state.
-- ---------------------------------------------------------------------------
create table if not exists public.entitlements (
  user_id uuid primary key references auth.users (id) on delete cascade,
  has_access boolean not null default false,
  granted_at timestamptz,
  stripe_customer_id text,
  stripe_checkout_session_id text
);

alter table public.entitlements enable row level security;

drop policy if exists "entitlements_select_own" on public.entitlements;
create policy "entitlements_select_own"
  on public.entitlements for select
  using (auth.uid() = user_id);
-- No insert/update/delete policy: writes happen only via the service role
-- (Stripe webhook Edge Function), which bypasses RLS.

-- Helper used by content policies. SECURITY DEFINER so it can read the
-- entitlements table regardless of the caller's own RLS.
create or replace function public.has_access()
  returns boolean
  language sql
  stable
  security definer
  set search_path = public
as $$
  select exists (
    select 1 from public.entitlements e
    where e.user_id = auth.uid() and e.has_access
  );
$$;

-- ---------------------------------------------------------------------------
-- sop_questions: the paid SOP question bank. Readable ONLY by users with
-- access. A non-paying (or logged-out) user's SELECT returns nothing.
-- ---------------------------------------------------------------------------
create table if not exists public.sop_questions (
  id bigint generated always as identity primary key,
  sop smallint not null,               -- 1, 2 or 3
  q text not null,                     -- question stem
  a smallint not null,                 -- zero-based index of the correct option
  options jsonb not null,              -- array of option strings
  created_at timestamptz not null default now()
);

alter table public.sop_questions enable row level security;

drop policy if exists "sop_questions_select_paid" on public.sop_questions;
create policy "sop_questions_select_paid"
  on public.sop_questions for select
  to authenticated
  using (public.has_access());
-- No write policy: seeding/updates happen via the service role.

-- ---------------------------------------------------------------------------
-- On sign-up, create the profile + an empty (locked) entitlement row.
-- ---------------------------------------------------------------------------
create or replace function public.handle_new_user()
  returns trigger
  language plpgsql
  security definer
  set search_path = public
as $$
begin
  insert into public.profiles (id, email)
    values (new.id, new.email)
    on conflict (id) do nothing;
  insert into public.entitlements (user_id, has_access)
    values (new.id, false)
    on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
