# Supabase do portal — piloto PJE

## Gestão de turmas e inscrições EAD

No projeto que já recebeu a migração inicial, aplique somente
`migrations/202611130002_class_management.sql` no SQL Editor.

Antes de ativar os Auth Hooks, cadastre previamente o e-mail da conta Google
da coordenação. Confirme o UUID e o e-mail em Authentication → Users.
No SQL Editor, substitua o marcador pelo UUID conferido:

```sql
begin;
update public.user_profiles
set app_role = 'coordenacao'
where user_id = '<UUID_DA_COORDENACAO>'::uuid;

insert into app_private.staff_login_emails (email)
select lower(trim(email)) from auth.users
where id = '<UUID_DA_COORDENACAO>'::uuid and email_confirmed_at is not null
on conflict do nothing;
commit;
```

Em Authentication → Auth Hooks, configure as funções Postgres:

- **Before User Created** → `public.pje_before_user_created`.
- **Custom Access Token** → `public.pje_check_access_token`.

O primeiro bloqueia novos cadastros fora das regras. O segundo aplica a
restrição na emissão e renovação de tokens, inclusive para contas já existentes.
Tokens válidos emitidos antes da ativação expiram no prazo configurado.
Se houver outros fluxos de login no mesmo projeto, esses hooks também os afetam.

Na página `/entrada/`, a coordenação cria a turma e pode abrir inscrições EAD
para uma turma ativa de cada vez. Docentes podem colar os e-mails do Classroom
na lista privada das próprias turmas e aprovar solicitações dessas turmas.
O primeiro acesso do aluno exige a identidade Google com e-mail verificado.
Quando a inscrição EAD está aberta, uma conta Google fora da lista pode
autenticar para solicitar vaga, mas só ganha matrícula após aprovação manual.
Ao encerrar novas inscrições, as solicitações existentes ficam disponíveis à
coordenação e ao docente para decisão.

Valide em ambiente de teste com três contas: coordenação pré-cadastrada,
aluno pré-cadastrado e candidato fora da lista. Confira que o candidato não vê
a turma antes da aprovação e que só a coordenação ou um docente responsável
consegue aprovar a solicitação.

Esta pasta define o esquema inicial do diário de classe. Ela ainda não aponta para uma instância Supabase e não contém chaves ou dados reais de estudantes.

## O que a migração cria

- Login por Google fornecido pelo Supabase Auth. O provedor ainda precisa ser ativado no painel.
- Perfil criado como `aluno` no primeiro login. Uma pessoa não escolhe nem altera sua própria função.
- Cursos, turmas, matrículas e vínculo de docentes.
- Sessões de chamada e registros por estudante.
- Publicações por turma, avaliações, notas e histórico das alterações de nota.
- Progresso por curso, página, seção e tempo ativo informado pelo navegador.
- RLS em todas as tabelas públicas. O banco aplica as regras também a chamadas diretas à API.

## Aplicar em um projeto Supabase

1. Crie um projeto Supabase de desenvolvimento, separado de qualquer uso real da escola.
2. Instale a Supabase CLI e execute `supabase init` na raiz do repositório, ou vincule esta pasta de migrações ao projeto.
3. Configure Google em Authentication → Sign In / Providers e adicione o callback OAuth do Supabase na configuração de credenciais do Google.
4. Em Authentication → URL Configuration, cadastre como redirect permitido a URL HTTPS do portal e uma URL local para desenvolvimento.
5. Revise a migração em `migrations/202611130001_initial_pje_diario.sql` e aplique primeiro em desenvolvimento com `supabase db push`.
6. Crie uma conta de teste para professor e outra para aluno. Promova o perfil do professor pelo SQL Editor após confirmar seu UUID em Authentication → Users.
7. Cadastre uma turma PJE, associe o professor e o aluno como membros e verifique as permissões com as duas contas.
8. Só depois de validar cada fluxo, planeje a implantação de produção, política de privacidade, responsáveis pelo tratamento e rotina de cópia de segurança.

O fluxo de promoção está comentado no fim da migração. Não configure uma conta administrativa usando dados fornecidos pelo próprio navegador. A chave `sb_publishable_...` pode ser usada no cliente do GitHub Pages com RLS correto. Nunca exponha `sb_secret_...`, `service_role` ou credenciais de banco no repositório ou JavaScript público.

## Dados pessoais e interpretação

Chamada e notas identificáveis são dados pessoais de estudantes. Frequência é registrada por aula e por professor autorizado. O estudante consulta seus próprios registros. Docentes acessam apenas turmas em que estão vinculados. A coordenação recebe a permissão administrativa e pode auditar alterações de nota.

`learning_progress.active_seconds` é uma estimativa enviada pelo navegador, sujeita a pausas, fechamento da aba e relógio do dispositivo. Não serve como chamada, comprovação de presença ou nota. O navegador deve acumular pequenos intervalos apenas enquanto a página estiver visível e houver atividade recente, e permitir que o aluno entenda quais dados são salvos.

Esta migração não define retenção ou exclusão de registros, sincronização com sistemas oficiais, matrícula pública por código, autenticação institucional SSO, auditoria de chamadas, notificações nem interface de administração. Confirme esses requisitos com a escola antes de tratar dados reais.

## Próximas etapas de implementação

1. Testar isolamento por RLS com contas sintéticas. Inclua tentativas de ler e alterar dados de outra turma, matrícula, chamada e nota.
2. Criar a interface de login e configurações Supabase usando somente a chave publicável.
3. Criar painel docente para chamada e publicação de conteúdo.
4. Criar painel do estudante para conteúdos, notas publicadas e retomada de leitura.
5. Adicionar cadastro administrativo de turmas e matrículas.
6. Definir retenção, cópias de segurança e política de privacidade com a escola antes de uma turma real.
