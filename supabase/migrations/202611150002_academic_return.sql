begin;

-- A coordenação cadastra os profissionais autorizados pelo SQL Editor.
create table app_private.pedagogical_reviewers (
  user_id uuid primary key references public.user_profiles(user_id) on delete cascade
);
revoke all on app_private.pedagogical_reviewers from public, anon, authenticated;

create function app_private.can_review_academic_return()
returns boolean language sql stable security definer set search_path = ''
as $$
  select public.pje_can_enter() and exists (
    select 1 from app_private.pedagogical_reviewers where user_id = auth.uid()
  );
$$;
revoke all on function app_private.can_review_academic_return() from public, anon;
grant execute on function app_private.can_review_academic_return() to authenticated;

create table public.academic_return_reviews (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes(id),
  student_id uuid not null references public.user_profiles(user_id),
  semester integer not null check (semester in (1, 2)),
  reason text not null check (reason in ('frequencia', 'retorno_ao_curso')),
  opened_at timestamptz not null default now(),
  decided_at timestamptz,
  decided_by uuid references public.user_profiles(user_id),
  justification text,
  unique (class_id, student_id, semester),
  check ((decided_at is null and decided_by is null and justification is null)
      or (decided_at is not null and decided_by is not null and length(trim(justification)) > 0))
);

create table public.academic_return_components (
  review_id uuid not null references public.academic_return_reviews(id),
  subject_id uuid not null references public.curriculum_subjects(id),
  prior_result text not null check (prior_result in ('aprovado', 'reprovado_nota', 'reprovado_frequencia', 'nao_cursado')),
  decision text check (decision in ('cursar', 'aproveitar')),
  primary key (review_id, subject_id),
  check (decision <> 'aproveitar' or prior_result = 'aprovado')
);

alter table public.academic_return_reviews enable row level security;
alter table public.academic_return_components enable row level security;
revoke all on public.academic_return_reviews, public.academic_return_components
  from public, anon, authenticated;
grant select on public.academic_return_reviews, public.academic_return_components to authenticated;

create policy "staff read academic returns" on public.academic_return_reviews
for select to authenticated using (
  (select app_private.can_review_academic_return())
  or ((select public.pje_can_enter()) and (select app_private.is_coordinator()))
);
create policy "staff read academic return components" on public.academic_return_components
for select to authenticated using (
  exists (select 1 from public.academic_return_reviews where id = review_id)
);

-- Os componentes e resultados de origem são informados pela coordenação até
-- existir uma apuração oficial por disciplina integrada ao diário.
create function public.open_academic_return(
  p_class uuid, p_student uuid, p_semester integer, p_reason text, p_components jsonb
)
returns uuid language plpgsql security definer set search_path = ''
as $$
declare
  review uuid;
  course uuid;
begin
  if not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação pode abrir a análise.' using errcode = '42501';
  end if;
  select course_id into course from public.classes where id = p_class;
  if course is null or not app_private.enrolled_in_class(p_class, p_student) then
    raise exception 'Selecione um aluno matriculado na turma de origem.';
  end if;
  if jsonb_typeof(p_components) is distinct from 'object' then
    raise exception 'Informe os resultados de origem por disciplina.';
  end if;
  if p_components = '{}'::jsonb or exists (
    select 1 from jsonb_each_text(p_components) as entry(subject, result)
    where not exists (
      select 1 from public.curriculum_subjects where id = entry.subject::uuid and course_id = course
    )
  ) then
    raise exception 'Informe disciplinas da grade curricular do curso de origem.';
  end if;
  if p_reason = 'frequencia' and not exists (
    select 1 from jsonb_each_text(p_components) where value = 'reprovado_frequencia'
  ) then
    raise exception 'Informe a disciplina com reprovação por frequência.';
  end if;
  insert into public.academic_return_reviews(class_id, student_id, semester, reason)
  values (p_class, p_student, p_semester, p_reason) returning id into review;
  insert into public.academic_return_components(review_id, subject_id, prior_result)
  select review, key::uuid, value from jsonb_each_text(p_components);
  return review;
end;
$$;

create function public.decide_academic_return(p_review uuid, p_decisions jsonb, p_justification text)
returns void language plpgsql security definer set search_path = ''
as $$
declare
  affected integer;
begin
  if not app_private.can_review_academic_return() then
    raise exception 'Somente a pedagogia autorizada pode registrar a decisão.' using errcode = '42501';
  end if;
  if jsonb_typeof(p_decisions) is distinct from 'object' or nullif(trim(p_justification), '') is null then
    raise exception 'Informe a decisão por disciplina e a justificativa.';
  end if;
  update public.academic_return_reviews
  set decided_at = now(), decided_by = auth.uid(), justification = trim(p_justification)
  where id = p_review and decided_at is null;
  if not found then
    raise exception 'Análise inexistente ou já concluída.';
  end if;
  update public.academic_return_components
  set decision = p_decisions ->> subject_id::text
  where review_id = p_review and p_decisions ->> subject_id::text is not null;
  get diagnostics affected = row_count;
  if affected <> (select count(*) from jsonb_each(p_decisions))
    or exists (
      select 1 from public.academic_return_components where review_id = p_review and decision is null
    ) then
    raise exception 'Informe uma decisão para cada disciplina da análise.';
  end if;
end;
$$;

revoke execute on function public.open_academic_return(uuid, uuid, integer, text, jsonb),
  public.decide_academic_return(uuid, jsonb, text) from public, anon;
grant execute on function public.open_academic_return(uuid, uuid, integer, text, jsonb),
  public.decide_academic_return(uuid, jsonb, text) to authenticated;

commit;
