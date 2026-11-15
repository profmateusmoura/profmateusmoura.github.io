const projectUrl = 'https://sucjdjirzcercpvqqhwz.supabase.co';
const publishableKey = 'sb_publishable_OTvKh8qN5LjGqHd3MVUsBg_tpDYfA0E';
const returnUrl = new URL('./', location.href).href;
const statusLine = document.querySelector('#estado');
const login = document.querySelector('#entrar');
const logout = document.querySelector('#sair');
function showError() {
  statusLine.textContent = 'Não foi possível acessar o Supabase. Confira sua conexão e tente novamente.';
  login.disabled = false;
  logout.disabled = false;
}

async function start() {
  const client = window.supabase.createClient(projectUrl, publishableKey, { auth: { flowType: 'pkce' } });
  const query = new URLSearchParams(location.search);
  const callbackError = query.has('error') || new URLSearchParams(location.hash.slice(1)).has('error');
  const { data: { user }, error: authError } = await client.auth.getUser();
  if (callbackError || query.has('code')) history.replaceState(null, '', returnUrl);

  if (!user) {
    login.hidden = false;
    statusLine.textContent = callbackError || query.has('code')
      ? 'O login não foi concluído. Use a conta Google cadastrada pela escola.'
      : authError && authError.name !== 'AuthSessionMissingError'
        ? 'Não foi possível verificar a sessão. Tente entrar novamente.'
        : 'Use a conta Google cadastrada pela escola.';
    login.onclick = async () => {
      login.disabled = true;
      try {
        const { error } = await client.auth.signInWithOAuth({
          provider: 'google',
          options: { redirectTo: returnUrl, queryParams: { prompt: 'select_account' } },
        });
        if (error) throw error;
      } catch {
        showError();
      }
    };
    return;
  }

  logout.hidden = false;
  logout.onclick = async () => {
    logout.disabled = true;
    try {
      const { error } = await client.auth.signOut({ scope: 'local' });
      if (error) throw error;
      location.replace(returnUrl);
    } catch {
      showError();
    }
  };
  const { data: allowed, error: accessError } = await client.rpc('pje_can_enter');
  if (accessError) {
    statusLine.textContent = 'Não foi possível confirmar a autorização de acesso.';
    return;
  }
  if (!allowed) {
    const request = document.querySelector('#solicitar-ead');
    const pending = await client.from('ead_requests').select('requested_at')
      .eq('user_id', user.id).is('approved_at', null).limit(1);
    if (pending.error) {
      statusLine.textContent = 'Não foi possível consultar sua solicitação. Recarregue a página para tentar novamente.';
      return;
    }
    if (pending.data?.length) {
      statusLine.textContent = 'Sua solicitação de vaga EAD aguarda aprovação.';
      return;
    }
    statusLine.textContent = 'Esta conta ainda não tem acesso às turmas. Você pode solicitar uma vaga EAD.';
    request.hidden = false;
    request.onclick = async () => {
      request.disabled = true;
      try {
        const { error } = await client.rpc('request_ead_access');
        if (error) throw error;
        request.hidden = true;
        statusLine.textContent = 'Solicitação enviada. Aguarde a aprovação do professor.';
      } catch {
        statusLine.textContent = 'Não foi possível solicitar a vaga. Confira se a turma EAD está recebendo inscrições.';
        request.disabled = false;
      }
    };
    return;
  }
  const { data: profile, error } = await client.from('user_profiles')
    .select('display_name, app_role').eq('user_id', user.id).maybeSingle();
  statusLine.textContent = error || !profile
    ? 'Login confirmado. O perfil do piloto ainda não está disponível.'
    : 'Login confirmado. Perfil: ' + profile.app_role + '.';
  if (profile && !error) await showClasses(client, user.id, profile.app_role);
}

start().catch(showError);
