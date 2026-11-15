function setupSchoolDiary(client, role) {
  const find = (id) => document.getElementById(id);
  const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const statuses = {
    presente: 'Presente', ausente: 'Ausente', atraso: 'Atraso', justificada: 'Falta justificada',
  };
  const zone = 'America/Sao_Paulo';
  const timeFormat = new Intl.DateTimeFormat('pt-BR', {
    timeZone: zone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  });
  const dateFormat = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC', dateStyle: 'full' });
  const year = find('cal-ano');
  const semester = find('cal-semestre');
  const day = find('cal-data');
  const equivalent = find('cal-dia');
  const group = find('chamada-turma');
  const lessonDay = find('chamada-dia');
  const lessonTime = find('chamada-hora');
  const lessonForm = find('chamada-form');
  const calendarStatus = find('cal-estado');
  const attendanceStatus = find('chamada-estado');
  let days = [];
  let loaded = null;
  let calendarRequest = 0;
  let rosterRequest = 0;

  function expect(result) {
    if (result.error) throw result.error;
    return result.data;
  }

  function item(text) {
    const node = document.createElement('li');
    node.textContent = text;
    return node;
  }

  function dayLabel(row) {
    return dateFormat.format(new Date(row.school_date + 'T00:00:00Z')) +
      ' · horário de ' + weekdays[row.teaching_weekday - 1].toLowerCase();
  }

  function clearCall() {
    rosterRequest++;
    loaded = null;
    lessonForm.hidden = true;
    attendanceStatus.textContent = '';
  }

  function refreshDayOptions() {
    clearCall();
    const previous = lessonDay.value;
    const eligible = days.filter(row => String(row.school_year) === group.selectedOptions[0]?.dataset.year);
    lessonDay.replaceChildren(new Option('Selecione um dia letivo', ''),
      ...eligible.map(row => new Option(dayLabel(row), row.school_date)));
    if (eligible.some(row => row.school_date === previous)) lessonDay.value = previous;
    if (group.value && !eligible.length) {
      attendanceStatus.textContent = 'Não há dias letivos para essa turma no ano e semestre selecionados.';
    }
  }

  async function refreshCalendar() {
    const version = ++calendarRequest;
    days = [];
    refreshDayOptions();
    find('cal-totais').replaceChildren();
    find('cal-lista').replaceChildren();
    calendarStatus.textContent = 'Carregando calendário…';
    try {
      if (!year.checkValidity()) throw new Error('Ano inválido');
      const rows = expect(await client.from('school_days')
        .select('school_date, school_year, teaching_weekday')
        .eq('school_year', Number(year.value)).eq('semester', Number(semester.value))
        .order('school_date'));
      if (version !== calendarRequest) return;
      days = rows;
      const totals = weekdays.map((_, i) => rows.filter(row => row.teaching_weekday === i + 1).length);
      find('cal-totais').replaceChildren(...weekdays.map((name, i) => {
        const total = totals[i];
        const difference = total < 18 ? ' · faltam ' + (18 - total)
          : total > 18 ? ' · excede por ' + (total - 18) : ' · meta atingida';
        return item(name + ' · ' + total + '/18' + difference);
      }));
      calendarStatus.textContent = totals.every(total => total === 18)
        ? 'Calendário completo: 90 dias letivos.' : 'A meta é de 18 dias para cada horário pedagógico.';
      find('cal-lista').replaceChildren(...rows.map(row => {
        if (role !== 'coordenacao') return item(dayLabel(row));
        const li = item('');
        const edit = document.createElement('button');
        edit.type = 'button';
        edit.textContent = dayLabel(row);
        edit.onclick = () => {
          day.value = row.school_date;
          equivalent.value = row.teaching_weekday;
          day.focus();
        };
        li.append(edit);
        return li;
      }));
      refreshDayOptions();
    } catch (error) {
      if (version !== calendarRequest) return;
      calendarStatus.textContent = error.code === '42P01' || error.code === 'PGRST205'
        ? 'Calendário indisponível até a instalação da migração no Supabase.'
        : 'Não foi possível carregar o calendário.';
    }
  }

  find('calendario').hidden = false;
  find('chamada').hidden = false;
  year.value = new Intl.DateTimeFormat('pt-BR', { timeZone: zone, year: 'numeric' }).format();
  const month = new Intl.DateTimeFormat('pt-BR', { timeZone: zone, month: 'numeric' }).format();
  semester.value = Number(month) <= 6 ? '1' : '2';
  equivalent.replaceChildren(new Option('Selecione um horário', ''),
    ...weekdays.map((name, index) => new Option(name, index + 1)));
  year.onchange = semester.onchange = () => {
    day.value = '';
    equivalent.value = '';
    refreshCalendar();
  };
  day.onchange = () => {
    const existing = days.find(row => row.school_date === day.value);
    const real = new Date(day.value + 'T00:00:00Z').getUTCDay();
    equivalent.value = existing?.teaching_weekday || (real >= 1 && real <= 5 ? real : '');
  };

  if (role === 'coordenacao') {
    const calendarForm = find('cal-form');
    const remove = find('cal-remover');
    const save = calendarForm.querySelector('button[type="submit"], button:not([type])');
    calendarForm.hidden = false;
    async function writeCalendar(action, message) {
      save.disabled = remove.disabled = true;
      try {
        await action();
        await refreshCalendar();
        calendarStatus.textContent += ' ' + message;
      } catch (error) {
        calendarStatus.textContent = error.code === '23503'
          ? 'O dia tem chamada registrada e não pode ser removido.'
          : 'Não foi possível salvar a alteração no calendário.';
      } finally {
        save.disabled = remove.disabled = false;
      }
    }
    calendarForm.onsubmit = (event) => {
      event.preventDefault();
      if (!year.checkValidity() || day.value.slice(0, 4) !== year.value) {
        calendarStatus.textContent = 'A data real deve pertencer ao ano letivo selecionado.';
        return;
      }
      writeCalendar(async () => {
        expect(await client.from('school_days').upsert({
          school_date: day.value, school_year: Number(year.value),
          semester: Number(semester.value), teaching_weekday: Number(equivalent.value),
        }));
      }, 'Dia salvo.');
    };
    remove.onclick = () => {
      if (!days.some(row => row.school_date === day.value)) {
        calendarStatus.textContent = 'Selecione um dia cadastrado no semestre.';
        return;
      }
      writeCalendar(async () => {
        expect(await client.from('school_days').delete().eq('school_date', day.value)
          .eq('school_year', Number(year.value)).eq('semester', Number(semester.value)));
        day.value = '';
        equivalent.value = '';
      }, 'Dia removido.');
    };
  }

  group.onchange = refreshDayOptions;
  lessonDay.onchange = lessonTime.onchange = clearCall;
  find('chamada-busca').onsubmit = async (event) => {
    event.preventDefault();
    clearCall();
    const version = rosterRequest;
    const selection = { classId: group.value, date: lessonDay.value, time: lessonTime.value };
    attendanceStatus.textContent = 'Carregando chamada…';
    try {
      const [rosterResult, sessionsResult] = await Promise.all([
        client.from('class_memberships').select('user_id, user_profiles(display_name)')
          .eq('class_id', selection.classId).eq('membership_role', 'aluno'),
        client.from('attendance_sessions').select('id, held_at, topic')
          .eq('class_id', selection.classId).eq('school_date', selection.date),
      ]);
      const roster = expect(rosterResult);
      const session = expect(sessionsResult).find(row => timeFormat.format(new Date(row.held_at)) === selection.time);
      const marks = session ? expect(await client.from('attendance_entries').select('student_id, status')
        .eq('session_id', session.id)) : [];
      if (version !== rosterRequest) return;
      if (!roster.length) {
        attendanceStatus.textContent = 'Nenhum aluno matriculado nesta turma.';
        return;
      }
      const saved = new Map(marks.map(row => [row.student_id, row.status]));
      const fields = roster.sort((a, b) => (a.user_profiles?.display_name || '').localeCompare(
        b.user_profiles?.display_name || '', 'pt-BR')).map((student, index) => {
        const label = document.createElement('label');
        label.textContent = student.user_profiles?.display_name || 'Aluno ' + (index + 1);
        const input = document.createElement('select');
        input.name = student.user_id;
        input.required = true;
        input.append(new Option('Selecione a situação', ''));
        Object.entries(statuses).forEach(([value, title]) => input.append(new Option(title, value)));
        input.value = saved.get(student.user_id) || '';
        label.append(input);
        return label;
      });
      find('chamada-alunos').replaceChildren(...fields);
      find('chamada-conteudo').value = session?.topic || '';
      loaded = selection;
      lessonForm.hidden = false;
      attendanceStatus.textContent = session ? 'Chamada existente carregada.' : 'Marque a situação de cada aluno.';
    } catch {
      if (version === rosterRequest) attendanceStatus.textContent = 'Não foi possível carregar a chamada.';
    }
  };
  find('todos-presentes').onclick = () => {
    find('chamada-alunos').querySelectorAll('select').forEach(input => { input.value = 'presente'; });
  };
  lessonForm.onsubmit = async (event) => {
    event.preventDefault();
    if (!loaded) return;
    const current = loaded;
    const save = lessonForm.querySelector('button:not([type])');
    save.disabled = true;
    try {
      expect(await client.rpc('save_calendar_attendance', {
        p_class: current.classId, p_date: current.date, p_time: current.time,
        p_topic: find('chamada-conteudo').value,
        p_marks: Object.fromEntries([...find('chamada-alunos').querySelectorAll('select')]
          .map(input => [input.name, input.value])),
      }));
      if (loaded === current) attendanceStatus.textContent = 'Chamada salva.';
    } catch {
      if (loaded === current) attendanceStatus.textContent = 'Não foi possível salvar. Recarregue a chamada se a matrícula mudou.';
    } finally {
      save.disabled = false;
    }
  };
  group.addEventListener('diary-classes-updated', refreshDayOptions);
  refreshCalendar();
}
