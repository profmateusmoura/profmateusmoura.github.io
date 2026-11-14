begin;

create table public.class_email_invitations (
    class_id uuid not null references public.classes(id) on delete cascade,
    email text not null check (
        email = lower(trim(email)) and length(email) <= 254
        and email ~ '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$'
    ),
    created_at timestamptz not null default now(),
    claimed_at timestamptz,
    primary key (class_id, email)
);

alter table public.class_email_invitations enable row level security;
revoke all on public.class_email_invitations from public, anon, authenticated;
grant select, delete on public.class_email_invitations to authenticated;
grant insert (class_id, email) on public.class_email_invitations to authenticated;

create policy "teachers read class invitations"
on public.class_email_invitations for select to authenticated
using (app_private.teaches_class(class_id));

create policy "teachers add class invitations"
on public.class_email_invitations for insert to authenticated
with check (app_private.teaches_class(class_id));

create policy "teachers remove pending invitations"
on public.class_email_invitations for delete to authenticated
using (claimed_at is null and app_private.teaches_class(class_id));

create function public.create_managed_class(p_course_id uuid, p_name text, p_year integer)
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
    insert into public.classes (course_id, name, school_year)
    values (p_course_id, trim(p_name), p_year)
    returning id into new_class;
    insert into public.class_memberships (class_id, user_id, membership_role)
    values (new_class, actor, 'docente');
    return new_class;
end;
$$;

create function public.claim_class_invitations()
returns integer
language plpgsql security definer
set search_path = ''
as $$
declare
    actor uuid := auth.uid();
    verified_email text;
    linked_count integer;
begin
    if actor is null then
        raise exception 'Entre com sua conta Google.' using errcode = '42501';
    end if;

    select lower(trim(u.email)) into verified_email
    from auth.users u
    where u.id = actor and u.email_confirmed_at is not null and exists (
        select 1 from auth.identities i
        where i.user_id = u.id and i.provider = 'google'
          and i.identity_data ->> 'email_verified' = 'true'
          and lower(trim(i.identity_data ->> 'email')) = lower(trim(u.email))
    );
    if verified_email is null then return 0; end if;

    with claimed as (
        update public.class_email_invitations i set claimed_at = now()
        from public.classes c
        where c.id = i.class_id and c.active
          and i.email = verified_email and i.claimed_at is null
        returning i.class_id
    )
    insert into public.class_memberships (class_id, user_id, membership_role)
    select class_id, actor, 'aluno' from claimed
    on conflict (class_id, user_id) do nothing;
    get diagnostics linked_count = row_count;
    return linked_count;
end;
$$;

revoke execute on function public.create_managed_class(uuid, text, integer) from public, anon;
revoke execute on function public.claim_class_invitations() from public, anon;
grant execute on function public.create_managed_class(uuid, text, integer) to authenticated;
grant execute on function public.claim_class_invitations() to authenticated;

create table app_private.staff_login_emails (
    email text primary key check (email = lower(trim(email)) and email <> '')
);
revoke all on app_private.staff_login_emails from public, anon, authenticated;

create function app_private.email_can_enter(p_email text)
returns boolean
language sql stable
set search_path = ''
as $$
    select exists (select 1 from app_private.staff_login_emails where email = lower(trim(p_email)))
        or exists (
            select 1 from public.class_email_invitations i
            join public.classes c on c.id = i.class_id
            where i.email = lower(trim(p_email)) and c.active
        );
$$;

create table app_private.ead_intake (
    singleton boolean primary key default true check (singleton),
    class_id uuid not null references public.classes(id) on delete cascade
);

create function app_private.ead_is_open()
returns boolean language sql stable set search_path = ''
as $$
    select exists (
        select 1 from app_private.ead_intake e
        join public.classes c on c.id = e.class_id where c.active
    );
$$;
revoke execute on function app_private.ead_is_open() from public, anon, authenticated;

create function public.pje_before_user_created(event jsonb)
returns jsonb
language plpgsql security definer
set search_path = ''
as $$
begin
    if event #>> '{user,app_metadata,provider}' = 'google'
       and (app_private.email_can_enter(event #>> '{user,email}') or app_private.ead_is_open()) then
        return '{}'::jsonb;
    end if;
    return '{"error":{"http_code":403,"message":"E-mail não cadastrado no portal."}}'::jsonb;
end;
$$;

create function public.pje_check_access_token(event jsonb)
returns jsonb
language plpgsql security definer
set search_path = ''
as $$
begin
    if exists (
        select 1 from auth.users u
        join auth.identities i on i.user_id = u.id
        where u.id = (event ->> 'user_id')::uuid
          and u.email_confirmed_at is not null
          and i.provider = 'google'
          and i.identity_data ->> 'email_verified' = 'true'
          and lower(trim(i.identity_data ->> 'email')) = lower(trim(u.email))
          and (app_private.email_can_enter(u.email) or app_private.ead_is_open())
    ) then
        return event;
    end if;
    return '{"error":{"http_code":403,"message":"Entre com uma conta Google cadastrada no portal."}}'::jsonb;
end;
$$;

revoke execute on function app_private.email_can_enter(text) from public, anon, authenticated;
revoke execute on function public.pje_before_user_created(jsonb) from public, anon, authenticated;
revoke execute on function public.pje_check_access_token(jsonb) from public, anon, authenticated;
grant execute on function public.pje_before_user_created(jsonb) to supabase_auth_admin;
grant execute on function public.pje_check_access_token(jsonb) to supabase_auth_admin;

create function public.pje_can_enter()
returns boolean
language sql stable security definer
set search_path = ''
as $$
    select exists (
        select 1 from auth.users u
        join auth.identities i on i.user_id = u.id
        where u.id = auth.uid() and u.email_confirmed_at is not null
          and i.provider = 'google'
          and i.identity_data ->> 'email_verified' = 'true'
          and lower(trim(i.identity_data ->> 'email')) = lower(trim(u.email))
          and app_private.email_can_enter(u.email)
    );
$$;
revoke execute on function public.pje_can_enter() from public, anon;
grant execute on function public.pje_can_enter() to authenticated;

create table public.ead_requests (
    class_id uuid not null references public.classes(id) on delete cascade,
    user_id uuid not null references public.user_profiles(user_id) on delete cascade,
    email text not null,
    requested_at timestamptz not null default now(),
    approved_at timestamptz,
    primary key (class_id, user_id)
);
alter table public.ead_requests enable row level security;
revoke all on public.ead_requests from public, anon, authenticated;
grant select on public.ead_requests to authenticated;
create policy "read own request or manage class"
on public.ead_requests for select to authenticated
using (user_id = auth.uid() or app_private.teaches_class(class_id));

create function public.request_ead_access()
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
    join public.classes c on c.id = e.class_id and c.active;
    if verified_email is null or target_class is null then
        raise exception 'Solicitação indisponível.';
    end if;
    insert into public.ead_requests (class_id, user_id, email)
    values (target_class, actor, verified_email)
    on conflict (class_id, user_id) do nothing;
end;
$$;

create function public.approve_ead_request(p_class uuid, p_user uuid)
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
      and exists (select 1 from public.classes c where c.id = p_class and c.active)
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

revoke execute on function public.request_ead_access(), public.approve_ead_request(uuid, uuid) from public, anon;
grant execute on function public.request_ead_access(), public.approve_ead_request(uuid, uuid) to authenticated;

create function public.set_ead_intake(p_class uuid)
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
        if not exists (select 1 from public.classes where id = p_class and active) then
            raise exception 'Selecione uma turma ativa.';
        end if;
        insert into app_private.ead_intake (singleton, class_id) values (true, p_class)
        on conflict (singleton) do update set class_id = excluded.class_id;
    end if;
end;
$$;
revoke execute on function public.set_ead_intake(uuid) from public, anon;
grant execute on function public.set_ead_intake(uuid) to authenticated;

-- Sessions issued before the Auth Hooks cannot read or write classroom data
-- without a current authorization. The EAD queue remains available to applicants.
do $$
declare
    table_name text;
begin
    foreach table_name in array array[
        'classes', 'class_memberships', 'class_email_invitations', 'course_posts',
        'attendance_sessions', 'attendance_entries', 'assessments', 'grades',
        'grade_change_log', 'learning_progress'
    ] loop
        execute format(
            'create policy "portal authorization required" on public.%I
             as restrictive for all to authenticated
             using ((select public.pje_can_enter()))
             with check ((select public.pje_can_enter()))',
            table_name
        );
    end loop;
end;
$$;

commit;
