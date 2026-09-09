-- Technical Exam question bank, organised by system (1..15). Same RLS rule
-- as the SOP bank: readable only by a user with paid access.

create table if not exists public.tech_questions (
  id bigint generated always as identity primary key,
  system smallint not null,             -- 1..15
  q text not null,
  a smallint not null,                  -- zero-based index of correct option
  options jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.tech_questions enable row level security;

drop policy if exists "tech_questions_select_paid" on public.tech_questions;
create policy "tech_questions_select_paid"
  on public.tech_questions for select
  to authenticated
  using (public.has_access());

-- Caller's most-often-wrong Technical Exam questions.
create or replace function public.weak_tech_questions(p_limit int default 20)
  returns table (id bigint, system smallint, q text, a smallint, options jsonb)
  language sql
  stable
  security definer
  set search_path = public
as $$
  select tq.id, tq.system, tq.q, tq.a, tq.options
  from public.tech_questions tq
  join (
    select question_id, count(*) filter (where not correct) as wrong
    from public.question_attempts
    where user_id = auth.uid() and bank = 'tech'
    group by question_id
    having count(*) filter (where not correct) > 0
  ) w on w.question_id = tq.id
  where public.has_access()
  order by w.wrong desc, tq.id
  limit p_limit;
$$;

grant execute on function public.weak_tech_questions(int) to authenticated;
