async function showClasses(client, userId, role) {
  const panel = document.querySelector('#turmas');
  const state = document.querySelector('#estado-turmas');
  const list = document.querySelector('#lista-turmas');
  const create = document.querySelector('#nova-turma');
  const roster = document.querySelector('#matriculas');
  const course = document.querySelector('#curso');
  const selected = document.querySelector('#turma-matricula');
  const invitations = document.querySelector('#lista-emails');
  const requests = document.querySelector('#lista-ead');
  const emails = document.querySelector('#emails');
  const year = document.querySelector('#ano-turma');
  const staff = role === 'docente' || role === 'coordenacao';

  function item(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  }

  async function refreshInvitations() {
    const classId = selected.value;
    invitations.replaceChildren();
    requests.replaceChildren();
    if (!classId) return;
    const { data, error } = await client.from('class_email_invitations')
      .select('email, claimed_at').eq('class_id', classId).order('email');
    if (selected.value !== classId) return;
    if (error) throw error;
    invitations.replaceChildren(...data.map(({ email, claimed_at }) => {
      const row = item(email + (claimed_at ? ' · matrícula vinculada' : ' · aguardando login'));
      if (!claimed_at) {
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.textContent = 'Remover cadastro pendente';
        remove.onclick = async () => {
          remove.disabled = true;
          try {
            const result = await client.from('class_email_invitations')
              .delete().eq('class_id', classId).eq('email', email);
            if (result.error) throw result.error;
            await refreshInvitations();
          } catch {
            state.textContent = 'Não foi possível remover o cadastro pendente.';
            remove.disabled = false;
          }
        };
        row.append(' ', remove);
      }
      return row;
    }));
    const queue = await client.from('ead_requests').select('user_id, email')
      .eq('class_id', classId).is('approved_at', null).order('requested_at');
    if (selected.value !== classId) return;
    if (queue.error) throw queue.error;
    requests.replaceChildren(...queue.data.map(({ user_id, email }) => {
      const row = item(email);
      const approve = document.createElement('button');
      approve.type = 'button';
      approve.textContent = 'Aprovar matrícula';
      approve.onclick = async () => {
        approve.disabled = true;
        try {
          const result = await client.rpc('approve_ead_request', { p_class: classId, p_user: user_id });
          if (result.error) throw result.error;
          await refreshInvitations();
          state.textContent = 'Matrícula EAD aprovada.';
        } catch {
          state.textContent = 'Não foi possível aprovar a solicitação.';
          approve.disabled = false;
        }
      };
      row.append(' ', approve);
      return row;
    }));
  }

  async function refreshClasses() {
    const { data, error } = await client.from('classes')
      .select('id, name, school_year, courses(code)').eq('active', true).order('name');
    if (error) throw error;
    const label = (group) => group.name + ' · ' + group.school_year + ' · ' + (group.courses?.code || '');
    list.replaceChildren(...(data.length ? data.map(group => item(label(group))) : [item('Nenhuma turma vinculada.')]));
    if (!staff) return;
    const membership = await client.from('class_memberships').select('class_id')
      .eq('user_id', userId).eq('membership_role', 'docente');
    if (membership.error) throw membership.error;
    const managed = new Set(membership.data.map(row => row.class_id));
    const options = data.filter(group => role === 'coordenacao' || managed.has(group.id));
    const previous = selected.value;
    selected.replaceChildren(...options.map(group => new Option(label(group), group.id)));
    if (options.some(group => group.id === previous)) selected.value = previous;
    roster.hidden = !options.length;
    await refreshInvitations();
  }

  function handleSubmit(form, action, message) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      button.disabled = true;
      state.textContent = 'Salvando…';
      try {
        await action();
        state.textContent = message;
      } catch {
        state.textContent = 'Não foi possível concluir. Confira os dados e a autorização para esta turma.';
      } finally {
        button.disabled = false;
      }
    });
  }

  panel.hidden = false;
  try {
    const claim = await client.rpc('claim_class_invitations');
    if (claim.error) throw claim.error;
    await refreshClasses();
    if (!staff) return;

    const catalog = await client.from('courses').select('id, code, title').eq('active', true).order('code');
    if (catalog.error) throw catalog.error;
    course.replaceChildren(...catalog.data.map(entry => new Option(entry.code + ' · ' + entry.title, entry.id)));
    year.value = new Date().getFullYear();
    create.hidden = !catalog.data.length;
    if (role === 'coordenacao') {
      document.querySelector('#config-ead').hidden = false;
      for (const [buttonId, open] of [['abrir-ead', true], ['fechar-ead', false]]) {
        const button = document.querySelector('#' + buttonId);
        button.onclick = async () => {
          button.disabled = true;
          try {
            const result = await client.rpc('set_ead_intake', { p_class: open ? selected.value : null });
            if (result.error) throw result.error;
            state.textContent = open ? 'Inscrições EAD abertas para a turma selecionada.' : 'Novas inscrições EAD encerradas.';
          } catch {
            state.textContent = 'Não foi possível configurar as inscrições EAD.';
          } finally {
            button.disabled = false;
          }
        };
      }
    }

    selected.addEventListener('change', () => refreshInvitations().catch(() => {
      state.textContent = 'Não foi possível carregar os cadastros da turma.';
    }));
    handleSubmit(create, async () => {
      const name = document.querySelector('#nome-turma');
      const result = await client.rpc('create_managed_class', {
        p_course_id: course.value, p_name: name.value.trim(), p_year: Number(year.value),
      });
      if (result.error) throw result.error;
      name.value = '';
      await refreshClasses();
      selected.value = result.data;
      await refreshInvitations();
    }, 'Turma criada.');
    handleSubmit(roster, async () => {
      const batch = [...new Set(emails.value.split(/\r?\n/).map(value => value.trim().toLowerCase()).filter(Boolean))];
      if (!batch.length || batch.length > 200 || batch.some(value => value.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
        throw new Error('Lista de e-mails inválida.');
      }
      const result = await client.from('class_email_invitations')
        .upsert(batch.map(email => ({ class_id: selected.value, email })), {
          onConflict: 'class_id,email', ignoreDuplicates: true,
        });
      if (result.error) throw result.error;
      emails.value = '';
      await refreshInvitations();
    }, 'Lista de e-mails cadastrada.');
  } catch {
    state.textContent = 'Não foi possível carregar as turmas. Recarregue a página para tentar de novo.';
  }
}
