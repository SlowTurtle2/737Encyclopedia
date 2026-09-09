-- Per-user answer log, used to surface a member's frequently-missed
-- questions. Run this in the Supabase SQL editor after the initial schema.

create table if not exists public.question_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  bank text not null,            -- 'sop' | 'tech'
  question_id bigint not null,   -- id in the relevant question table
  correct boolean not null,
  answered_at timestamptz not null default now()
);

alter table public.question_attempts enable row level security;

drop policy if exists "qa_select_own" on public.question_attempts;
create policy "qa_select_own"
  on public.question_attempts for select
  using (auth.uid() = user_id);

drop policy if exists "qa_insert_own" on public.question_attempts;
create policy "qa_insert_own"
  on public.question_attempts for insert
  with check (auth.uid() = user_id);

create index if not exists question_attempts_user_bank_q
  on public.question_attempts (user_id, bank, question_id);

-- Returns the caller's most-often-wrong SOP questions (most wrong first).
create or replace function public.weak_sop_questions(p_limit int default 20)
  returns table (id bigint, q text, a smallint, options jsonb)
  language sql
  stable
  security definer
  set search_path = public
as $$
  select sq.id, sq.q, sq.a, sq.options
  from public.sop_questions sq
  join (
    select question_id, count(*) filter (where not correct) as wrong
    from public.question_attempts
    where user_id = auth.uid() and bank = 'sop'
    group by question_id
    having count(*) filter (where not correct) > 0
  ) w on w.question_id = sq.id
  where public.has_access()
  order by w.wrong desc, sq.id
  limit p_limit;
$$;

grant execute on function public.weak_sop_questions(int) to authenticated;
