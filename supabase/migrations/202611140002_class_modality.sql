begin;

alter table public.classes
add column modality text not null default 'presencial'
check (modality in ('presencial', 'ead'));

create function public.create_managed_class(p_course_id uuid, p_name text, p_year integer, p_modality text)
returns uuid
language plpgsql security definer
set search_path = ''
as $$
declare
    actor uuid := auth.uid();
    new_class uuid;
begin
    if actor is null or not exists (
        select 1 from public.user_profiles
        where user_id = actor and app_role in ('docente', 'coordenacao')
    ) then
        raise exception 'Somente docentes autorizados podem criar turmas.' using errcode = '42501';
    end if;
    if p_name is null or length(trim(p_name)) not between 1 and 100
       or p_year is null or p_year not between 2000 and 2100 then
        raise exception 'Confira o nome e o ano da turma.';
    end if;
    if not exists (select 1 from public.courses where id = p_course_id and active) then
        raise exception 'Selecione um curso ativo.';
    end if;
    if p_modality is null or p_modality not in ('presencial', 'ead') then
        raise exception 'Selecione a modalidade.';
    end if;
    insert into public.classes (course_id, name, school_year, modality)
    values (p_course_id, trim(p_name), p_year, p_modality)
    returning id into new_class;
    insert into public.class_memberships (class_id, user_id, membership_role)
    values (new_class, actor, 'docente');
    return new_class;
end;
$$;

revoke execute on function public.create_managed_class(uuid, text, integer, text)
from public, anon;
grant execute on function public.create_managed_class(uuid, text, integer, text)
to authenticated;

create or replace function app_private.ead_is_open()
returns boolean language sql stable set search_path = ''
as $$
    select exists (
        select 1 from app_private.ead_intake e
        join public.classes c on c.id = e.class_id where c.active and c.modality = 'ead'
    );
$$;

create or replace function public.request_ead_access()
returns void
language plpgsql security definer set search_path = ''
as $$
declare
    actor uuid := auth.uid();
    verified_email text;
    target_class uuid;
begin
    select lower(trim(u.email)) into verified_email
    from auth.users u
    join auth.identities i on i.user_id = u.id
    where u.id = actor and u.email_confirmed_at is not null
      and i.provider = 'google' and i.identity_data ->> 'email_verified' = 'true'
      and lower(trim(i.identity_data ->> 'email')) = lower(trim(u.email));
    select c.id into target_class from app_private.ead_intake e
    join public.classes c on c.id = e.class_id and c.active and c.modality = 'ead';
    if verified_email is null or target_class is null then
        raise exception 'Solicitação indisponível.';
    end if;
    insert into public.ead_requests (class_id, user_id, email)
    values (target_class, actor, verified_email)
    on conflict (class_id, user_id) do nothing;
end;
$$;

create or replace function public.approve_ead_request(p_class uuid, p_user uuid)
returns void
language plpgsql security definer set search_path = ''
as $$
declare
    approved_email text;
begin
    if auth.uid() is null or not app_private.teaches_class(p_class) then
        raise exception 'Acesso negado.' using errcode = '42501';
    end if;
    update public.ead_requests r set approved_at = now()
    where r.class_id = p_class and r.user_id = p_user and r.approved_at is null
      and exists (select 1 from public.classes c where c.id = p_class and c.active and c.modality = 'ead')
      and exists (
          select 1 from auth.users u join auth.identities i on i.user_id = u.id
          where u.id = r.user_id and lower(trim(u.email)) = r.email
            and u.email_confirmed_at is not null and i.provider = 'google'
            and i.identity_data ->> 'email_verified' = 'true'
            and lower(trim(i.identity_data ->> 'email')) = r.email
      )
    returning r.email into approved_email;
    if approved_email is null then raise exception 'Solicitação indisponível.'; end if;
    insert into public.class_email_invitations (class_id, email, claimed_at)
    values (p_class, approved_email, now())
    on conflict (class_id, email) do update set claimed_at = excluded.claimed_at;
    insert into public.class_memberships (class_id, user_id, membership_role)
    values (p_class, p_user, 'aluno')
    on conflict (class_id, user_id) do nothing;
end;
$$;

create or replace function public.set_ead_intake(p_class uuid)
returns void
language plpgsql security definer set search_path = ''
as $$
begin
    if not app_private.is_coordinator() then
        raise exception 'Somente a coordenação configura as inscrições EAD.' using errcode = '42501';
    end if;
    if p_class is null then
        delete from app_private.ead_intake where singleton;
    else
        if not exists (select 1 from public.classes where id = p_class and active and modality = 'ead') then
            raise exception 'Selecione uma turma ativa.';
        end if;
        insert into app_private.ead_intake (singleton, class_id) values (true, p_class)
        on conflict (singleton) do update set class_id = excluded.class_id;
    end if;
end;
$$;

commit;
