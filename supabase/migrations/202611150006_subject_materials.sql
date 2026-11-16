begin;
create table public.subject_materials (
  material_path text primary key check (material_path ~ '^materiais/[a-z0-9_-]+/index[.]html$'),
  subject_id uuid not null references public.curriculum_subjects(id) on delete cascade
);
alter table public.subject_materials enable row level security;
revoke all on public.subject_materials from public, anon, authenticated;
grant select, insert, update on public.subject_materials to authenticated;
create policy "coordination manages subject materials"
on public.subject_materials for all to authenticated
using ((select public.pje_can_enter()) and (select app_private.is_coordinator()))
with check ((select public.pje_can_enter()) and (select app_private.is_coordinator()));
commit;
