# Portal de Estudos — GitHub Pages

Portal de materiais didáticos com **7 disciplinas**:

- **ALP** — Algoritmos e Lógica de Programação (em preparação)
- **PED** — Programação e Estruturas de Dados (**publicado**, 6 cadernos)
- **POO** — Programação Orientada a Objetos (em preparação)
- **DW1** — Desenvolvimento Web I (em preparação)
- **DW2** — Desenvolvimento Web II (em preparação)
- **DW3** — Desenvolvimento Web III (em preparação)
- **PJE** — Programação de Jogos Eletrônicos (em preparação)

## Estrutura

```text
index.html                 <- página inicial do portal
conteudos.js               <- catálogo das sete disciplinas
404.html
.nojekyll
.gitignore
LICENSE                    <- MIT somente para código-fonte original
LICENCA_CONTEUDOS.md       <- CC BY-NC-SA 4.0 para conteúdos autorais
assets/                    <- estilo, scripts e ícone do portal
materiais/
    ped/                   <- conteúdo PED completo e independente
        index.html
        cadernos/          <- seis páginas didáticas
        arquivos/          <- seis PDFs
        assets/            <- recursos de PED
    alp/                   <- futura disciplina
    poo/                   <- futura disciplina
    dw1/                   <- futura disciplina
    dw2/                   <- futura disciplina
    dw3/                   <- futura disciplina
    pje/                   <- futura disciplina
```

As pastas futuras não precisam ser criadas agora. O portal mostra os cartões
"Em preparação" sem criar links quebrados.

## COMO ENVIAR O SITE NO GITHUB (100% PELO NAVEGADOR)

1. **Extraia** o arquivo ZIP no computador. O GitHub Pages **não executa o ZIP**.
2. Acesse seu repositório no GitHub e abra a aba **Code**.
3. Se o repositório já tiver somente um README, LICENSE ou .gitignore criados
   pelo GitHub, você pode atualizar os arquivos correspondentes com as versões
   daqui. Se já tiver um site, verifique antes de sobrescrever.
4. Clique em **Add file > Upload files**.
5. Arraste **os arquivos e as pastas DE DENTRO do ZIP** (não a pasta pai;
   não o arquivo ZIP). O arquivo `index.html` precisa ficar na raiz do repositório.
6. Confirme em **Commit changes** na branch principal (geralmente `main`).
7. Acesse **Settings > Pages**.
8. Em **Build and deployment > Source**, escolha **Deploy from a branch**.
9. Selecione a branch **main** e a pasta **/(root)**. Clique em **Save**.
10. Aguarde o deploy e use o endereço mostrado em **Visit site**.

Se o navegador não incluir os arquivos ocultos `.nojekyll` e `.gitignore`,
crie-os manualmente com **Add file > Create new file**.

### IMPORTANTE SOBRE O ENDEREÇO

A URL depende do **nome de usuário da conta** e do **nome do repositório**.

- Se **usuário** e **repositório** forem `profmateusmoura` e
  `profmateusmoura.github.io`, respectivamente, o portal terá o endereço
  `https://profmateusmoura.github.io/`.
- Se o repositório for `profmateusmoura.github.io`, porém estiver sob a conta
  `teusmoura`, ele será um *site de projeto* e a URL padrão será
  `https://teusmoura.github.io/profmateusmoura.github.io/`.

Isso **não exige mudar nenhum arquivo**, pois todos os links são relativos.

## COMO ADICIONAR UMA NOVA DISCIPLINA

1. Crie a pasta correspondente, por exemplo `materiais/alp/`.
2. Coloque o novo site com seu próprio `index.html` dentro dela.
3. Abra `conteudos.js`, encontre a disciplina e altere `disponivel: false`
   para `disponivel: true`.
4. Ajuste `detalhes`, `descricao` e `temas` se necessário.
5. Faça o commit. A página inicial passará a mostrar o botão **Acessar material**.

## LICENÇAS

- Código-fonte original: [MIT](LICENSE)
- Conteúdos educacionais autorais: [CC BY-NC-SA 4.0](LICENCA_CONTEUDOS.md)

Não publique nesse repositório arquivos sensíveis, senhas, gabaritos reservados
ou dados pessoais de alunos.
