const projectUrl = 'https://sucjdjirzcercpvqqhwz.supabase.co';
const keyName = 'pje-pilot-supabase-publishable';
const returnUrl = new URL('./', location.href).href;
const statusLine = document.querySelector('#estado');
const config = document.querySelector('#config');
const login = document.querySelector('#entrar');
const logout = document.querySelector('#sair');
const changeKey = document.querySelector('#trocar');
const isPublishable = (key) => /^sb_publishable_[A-Za-z0-9_-]+$/.test(key || '');

function showError() {
  statusLine.textContent = 'Não foi possível acessar o Supabase. Confira sua conexão e a chave publicável.';
  login.disabled = false;
  logout.disabled = false;
}

async function start() {
  const key = localStorage.getItem(keyName);
  if (!isPublishable(key)) {
    config.hidden = false;
    statusLine.textContent = 'Copie a Publishable key do seu projeto em Settings → API Keys.';
    return;
  }

  changeKey.hidden = false;
  const client = window.supabase.createClient(projectUrl, key, { auth: { flowType: 'pkce' } });
  const query = new URLSearchParams(location.search);
  const callbackError = query.has('error') || new URLSearchParams(location.hash.slice(1)).has('error');
  const { data: { user } } = await client.auth.getUser();
  if (callbackError || query.has('code')) history.replaceState(null, '', returnUrl);

  if (!user) {
    login.hidden = false;
    statusLine.textContent = callbackError || query.has('code')
      ? 'O login não foi concluído. Use a conta Google cadastrada pela escola.'
      : 'Entre com sua conta Google de teste.';
    login.onclick = async () => {
      login.disabled = true;
      try {
        const { error } = await client.auth.signInWithOAuth({
          provider: 'google',
          options: { redirectTo: returnUrl },
        });
        if (error) throw error;
      } catch {
        showError();
      }
    };
    return;
  }

  changeKey.hidden = true;
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

changeKey.addEventListener('click', () => {
  localStorage.removeItem(keyName);
  location.replace(returnUrl);
});
config.addEventListener('submit', (event) => {
  event.preventDefault();
  const key = document.querySelector('#chave').value.trim();
  if (!isPublishable(key)) {
    statusLine.textContent = 'Use somente a chave que começa com sb_publishable_.';
    return;
  }
  localStorage.setItem(keyName, key);
  location.replace(returnUrl);
});

start().catch(showError);
