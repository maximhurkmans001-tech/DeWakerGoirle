-- Eenmalig uitvoeren in Supabase > SQL Editor.
-- Alleen verzendpogingen; geen namen, onderwerpen of berichtinhoud.
create table if not exists public.contact_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
create index if not exists contact_attempts_user_time on public.contact_attempts(user_id, created_at);
alter table public.contact_attempts enable row level security;
revoke all on public.contact_attempts from public, anon, authenticated;

create or replace function public.reserve_contact_attempt(p_user_id uuid)
returns boolean language plpgsql security definer set search_path = '' as $$
begin
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(p_user_id::text, 0));
  if not exists (select 1 from public.residents where user_id = p_user_id and active = true) then
    return false;
  end if;
  delete from public.contact_attempts where created_at < now() - interval '1 day';
  if (select count(*) from public.contact_attempts where user_id = p_user_id
      and created_at > now() - interval '1 hour') >= 5 then
    return false;
  end if;
  insert into public.contact_attempts(user_id) values(p_user_id);
  return true;
end;
$$;
revoke all on function public.reserve_contact_attempt(uuid) from public, anon, authenticated;
grant execute on function public.reserve_contact_attempt(uuid) to service_role;
