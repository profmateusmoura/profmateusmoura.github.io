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
  let batchWeekday = 1;
  const batch = new Set();
  const coordinator = role === 'coordenacao';
  let calendarReady = false;
  let savingCalendar = false;
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
    const label = dateFormat.format(new Date(row.school_date + 'T00:00:00Z'));
    return label + (row.holiday_name ? ' · feriado: ' + row.holiday_name
      : ' · horário de ' + weekdays[row.teaching_weekday - 1].toLowerCase());
  }

  function savedDates() {
    return days.filter(row => row.teaching_weekday === batchWeekday)
      .map(row => row.school_date).sort();
  }

  function resetBatch() {
    batch.clear();
    savedDates().forEach(date => batch.add(date));
  }

  function gridDates() {
    const startMonth = semester.value === '1' ? 0 : 6;
    return Array.from({ length: 6 }, (_, offset) => {
      const month = startMonth + offset;
      const start = new Date(Date.UTC(Number(year.value), month, 1));
      const size = new Date(Date.UTC(Number(year.value), month + 1, 0)).getUTCDate();
      return { start, dates: Array.from({ length: size }, (_, i) =>
        new Date(Date.UTC(Number(year.value), month, i + 1))) };
    });
  }

  function updateBatch() {
    const saved = savedDates();
    const changed = saved.length !== batch.size || saved.some(date => !batch.has(date));
    find('cal-selecao').textContent = batch.size + '/18 datas selecionadas · ' + saved.length + ' já salvas.';
    find('cal-salvar-lote').disabled = savingCalendar || !calendarReady || !changed || batch.size > 18;
  }

  function renderSemester() {
    const container = find('cal-meses');
    container.replaceChildren();
    if (!calendarReady) return;
    const known = new Map(days.map(row => [row.school_date, row]));
    for (const { start, dates } of gridDates()) {
      const month = document.createElement('section');
      const title = document.createElement('h4');
      title.textContent = new Intl.DateTimeFormat('pt-BR', { month: 'long', timeZone: 'UTC' }).format(start);
      const grid = document.createElement('div');
      grid.className = 'calendar-grid';
      for (const name of ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']) {
        const header = document.createElement('span');
        header.textContent = name;
        grid.append(header);
      }
      for (let i = 0; i < (start.getUTCDay() + 6) % 7; i++) grid.append(document.createElement('span'));
      for (const date of dates) {
        const value = date.toISOString().slice(0, 10);
        const row = known.get(value);
        const selectable = coordinator && (!row || row.teaching_weekday === batchWeekday);
        const tile = document.createElement(selectable ? 'button' : 'span');
        tile.textContent = date.getUTCDate();
        tile.title = row ? dayLabel(row) : dateFormat.format(date);
        tile.setAttribute('aria-label', tile.title);
        if (row) tile.className = row.holiday_name ? 'calendar-holiday' : 'calendar-teaching weekday-' + row.teaching_weekday;
        if (selectable) {
          tile.type = 'button';
          tile.setAttribute('aria-pressed', String(batch.has(value)));
          tile.onclick = () => {
            if (savingCalendar) return;
            if (batch.has(value)) batch.delete(value);
            else if (batch.size < 18) batch.add(value);
            else {
              calendarStatus.textContent = 'Retire uma data marcada antes de incluir outra.';
              return;
            }
            calendarStatus.textContent = '';
            tile.setAttribute('aria-pressed', String(batch.has(value)));
            updateBatch();
          };
        }
        grid.append(tile);
      }
      month.append(title, grid);
      container.append(month);
    }
    updateBatch();
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
    const eligible = days.filter(row => !row.holiday_name &&
      String(row.school_year) === group.selectedOptions[0]?.dataset.year);
    lessonDay.replaceChildren(new Option('Selecione um dia letivo', ''),
      ...eligible.map(row => new Option(dayLabel(row), row.school_date)));
    if (eligible.some(row => row.school_date === previous)) lessonDay.value = previous;
    if (group.value && !eligible.length) {
      attendanceStatus.textContent = 'Não há dias letivos para essa turma no ano e semestre selecionados.';
    }
  }

  async function refreshCalendar() {
    const version = ++calendarRequest;
    calendarReady = false;
    batch.clear();
    renderSemester();
    days = [];
    refreshDayOptions();
    calendarStatus.textContent = 'Carregando calendário…';
    try {
      if (!year.checkValidity()) throw new Error('Ano inválido');
      const rows = expect(await client.from('school_days')
        .select('school_date, school_year, teaching_weekday, holiday_name')
        .eq('school_year', Number(year.value)).eq('semester', Number(semester.value))
        .order('school_date'));
      if (version !== calendarRequest) return;
      days = rows;
      resetBatch();
      calendarReady = true;
      renderSemester();
      const totals = weekdays.map((_, i) => rows.filter(row => row.teaching_weekday === i + 1).length);
      calendarStatus.textContent = totals.every(total => total === 18)
        ? 'Calendário completo: 90 dias letivos.' : '';
      refreshDayOptions();
    } catch (error) {
      if (version !== calendarRequest) return;
      calendarStatus.textContent = ['42P01', '42703', 'PGRST204', 'PGRST205'].includes(error.code)
        ? 'Calendário indisponível até a instalação da migração no Supabase.'
        : 'Não foi possível carregar o calendário.';
    }
  }

  find('calendario').hidden = false;
  find('chamada').hidden = false;
  year.value = new Intl.DateTimeFormat('pt-BR', { timeZone: zone, year: 'numeric' }).format();
  const month = new Intl.DateTimeFormat('pt-BR', { timeZone: zone, month: 'numeric' }).format();
  semester.value = Number(month) <= 6 ? '1' : '2';
  year.onchange = semester.onchange = refreshCalendar;

  if (coordinator) {
    find('cal-lote').hidden = false;
    async function writeCalendar(action, message) {
      savingCalendar = true;
      updateBatch();
      try {
        await action();
        await refreshCalendar();
        calendarStatus.textContent = message;
      } catch (error) {
        calendarStatus.textContent = error.message || 'Não foi possível salvar as datas selecionadas.';
      } finally {
        savingCalendar = false;
        updateBatch();
      }
    }
    const controls = find('cal-lote-dia');
    weekdays.forEach((name, index) => {
      const weekday = index + 1;
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = name;
      button.className = 'calendar-teaching weekday-' + weekday;
      button.setAttribute('aria-pressed', String(weekday === batchWeekday));
      button.onclick = () => {
        if (savingCalendar || weekday === batchWeekday) return;
        batchWeekday = weekday;
        for (const control of controls.children) {
          control.setAttribute('aria-pressed', String(control === button));
        }
        resetBatch();
        renderSemester();
      };
      controls.append(button);
    });
    find('cal-lote').onsubmit = (event) => {
      event.preventDefault();
      if (find('cal-salvar-lote').disabled) return;
      writeCalendar(async () => {
        expect(await client.rpc('replace_school_days_bulk', {
          p_year: Number(year.value), p_semester: Number(semester.value),
          p_weekday: batchWeekday, p_dates: [...batch].sort(), p_previous: savedDates(),
        }));
      }, 'Datas marcadas salvas.');
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
