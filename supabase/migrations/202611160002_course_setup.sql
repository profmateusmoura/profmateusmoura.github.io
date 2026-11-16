begin;
alter table public.courses add column planned_modules integer not null default 4
  check (planned_modules between 1 and 30);

create table public.offering_subject_waivers (
  offering_id uuid not null,
  subject_id uuid not null,
  student_id uuid not null references public.user_profiles(user_id),
  reason text not null check (length(trim(reason)) between 1 and 500),
  recorded_by uuid not null default auth.uid() references public.user_profiles(user_id),
  recorded_at timestamptz not null default now(),
  primary key (offering_id, subject_id, student_id),
  foreign key (offering_id, subject_id) references public.offered_subjects(offering_id, subject_id)
);
alter table public.offering_subject_waivers enable row level security;
revoke all on public.offering_subject_waivers from public, anon, authenticated;
grant select, insert, delete on public.offering_subject_waivers to authenticated;
create policy "coordination reads waivers" on public.offering_subject_waivers
for select to authenticated using ((select public.pje_can_enter()) and (select app_private.is_coordinator()));
create policy "coordination records waivers" on public.offering_subject_waivers
for insert to authenticated with check (
  (select public.pje_can_enter()) and (select app_private.is_coordinator())
  and recorded_by = (select auth.uid())
  and exists (select 1 from public.semester_offerings o
    where o.id = offering_id and app_private.enrolled_in_class(o.class_id, student_id))
);
create policy "coordination removes waivers" on public.offering_subject_waivers
for delete to authenticated using ((select public.pje_can_enter()) and (select app_private.is_coordinator()));
commit;
