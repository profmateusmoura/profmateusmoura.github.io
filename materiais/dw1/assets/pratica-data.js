window.PED_PRACTICE = {
  "01-a": {
    title: "Ciclo Cliente-Servidor HTTP ao abrir vitrine.html",
    summary: "Acompanhe passo a passo o que acontece desde a digitação da URL até a renderização da árvore DOM no navegador.",
    mode: "trace",
    code: [
      "1. Usuário digita https://lojasblue.com.br/vitrine.html",
      "2. Navegador envia requisição HTTP GET /vitrine.html",
      "3. Servidor localiza o arquivo e responde HTTP 200 OK",
      "4. Navegador lê <!DOCTYPE html> e ativa o modo padrão",
      "5. Parser processa <head> (charset UTF-8 e <title>)",
      "6. Parser monta o <body> e exibe a página na janela"
    ],
    steps: [
      { line: 1, title: "Entrada da URL", explanation: "O usuário solicita o recurso vitrine.html no navegador.", state: { Fase: "Cliente (Browser)", Acao: "Resolução de endereço", Status: "Aguardando envio", DOM: "Vazio" }, output: "" },
      { line: 2, title: "Requisição HTTP GET", explanation: "O navegador envia o pedido HTTP GET solicitando o documento HTML.", state: { Fase: "Rede -> Servidor", Metodo: "GET /vitrine.html", Status: "Em trânsito", DOM: "Vazio" }, output: "GET /vitrine.html HTTP/1.1" },
      { line: 3, title: "Resposta HTTP 200 OK", explanation: "O servidor devolve o código 200 OK junto com o texto HTML no corpo da resposta.", state: { Fase: "Servidor -> Cliente", Status: "200 OK", ContentType: "text/html; charset=utf-8", DOM: "Recebendo bytes" }, output: "HTTP/1.1 200 OK (text/html)" },
      { line: 4, title: "Leitura do DOCTYPE", explanation: "O navegador identifica <!DOCTYPE html> e garante a renderização em modo padrão HTML5.", state: { Fase: "Parser HTML", Modo: "Standards Mode (HTML5)", DOM: "document criado" }, output: "Modo padrão HTML5 ativado" },
      { line: 5, title: "Processamento do <head>", explanation: "Metadados invisíveis são configurados: acentuação UTF-8, viewport e título da aba.", state: { Fase: "Parser <head>", Charset: "UTF-8", Aba: "Lojas Blue — Vitrine", DOM: "html > head" }, output: "Aba do navegador: Lojas Blue — Vitrine" },
      { line: 6, title: "Renderização do <body>", explanation: "Os elementos visíveis (h1, p) são convertidos em nós na árvore DOM e pintados na tela.", state: { Fase: "Renderização <body>", Elementos: "h1, p", DOM: "html > body > [h1, p]" }, output: "Tela exibe: Lojas Blue — Tecnologia e Papelaria" }
    ]
  },
  "01-b": {
    title: "Inspeção da Estrutura Mínima HTML5",
    summary: "Veja a função de cada linha essencial de um documento HTML válido.",
    mode: "trace",
    code: [
      "<!DOCTYPE html>",
      "<html lang=\"pt-BR\">",
      "  <head>",
      "    <meta charset=\"UTF-8\">",
      "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "    <title>Lojas Blue</title>",
      "  </head>",
      "  <body>",
      "    <h1>Catálogo Oficial</h1>",
      "  </body>",
      "</html>"
    ],
    steps: [
      { line: 1, title: "Declaração de tipo", explanation: "Indica ao navegador que o documento segue a especificação HTML5.", state: { Tag: "<!DOCTYPE html>", Escopo: "Documento", VisivelNaPagina: "Não" }, output: "" },
      { line: 2, title: "Elemento raiz <html>", explanation: "Envolve todo o documento e informa o idioma principal (pt-BR) para leitores de tela e tradutores.", state: { Tag: "<html lang='pt-BR'>", Idioma: "Português (Brasil)", VisivelNaPagina: "Container raiz" }, output: "" },
      { line: 4, title: "Codificação UTF-8", explanation: "Garante que acentos (ã, ç, é) e símbolos (R$) sejam exibidos sem erros.", state: { Tag: "<meta charset='UTF-8'>", Escopo: "<head>", VisivelNaPagina: "Não" }, output: "" },
      { line: 5, title: "Meta Viewport", explanation: "Ajusta a largura lógica da página para a tela real de celulares e tablets.", state: { Tag: "<meta name='viewport'>", Escopo: "<head>", Responsivo: "Sim" }, output: "" },
      { line: 6, title: "Título do documento", explanation: "Define o nome exibido na aba do navegador e nos favoritos.", state: { Tag: "<title>", Escopo: "<head>", AbaNavegador: "Lojas Blue" }, output: "Aba: Lojas Blue" },
      { line: 9, title: "Conteúdo visível no <body>", explanation: "Tudo que o usuário enxerga na área útil da página fica dentro de <body>.", state: { Tag: "<h1>", Escopo: "<body>", VisivelNaPagina: "Sim" }, output: "Catálogo Oficial" }
    ]
  },
  "02-a": {
    title: "Construção do Sumário Semântico (Heading Outline)",
    summary: "Compare como os níveis h1, h2 e h3 organizam a hierarquia lógica de uma página de catálogo.",
    mode: "trace",
    code: [
      "<h1>Lojas Blue — Catálogo 2026</h1>",
      "<h2>1. Periféricos</h2>",
      "<h3>1.1 Teclados Mecânicos</h3>",
      "<h3>1.2 Mouses Ergonômicos</h3>",
      "<h2>2. Papelaria Técnica</h2>"
    ],
    steps: [
      { line: 1, title: "Título Principal (h1)", explanation: "Define o tema central da página inteira. Deve ser único por documento.", state: { NivelAtual: "h1", Sumario: "1. Lojas Blue — Catálogo 2026" }, output: "H1: Lojas Blue — Catálogo 2026" },
      { line: 2, title: "Primeira Seção (h2)", explanation: "Abre um grande departamento subordinado ao h1.", state: { NivelAtual: "h2", Pai: "h1", Sumario: "Lojas Blue > 1. Periféricos" }, output: "  H2: 1. Periféricos" },
      { line: 3, title: "Subcategoria (h3)", explanation: "Detalha uma divisão dentro da seção Periféricos.", state: { NivelAtual: "h3", Pai: "h2 (Periféricos)", Sumario: "... > Periféricos > Teclados" }, output: "    H3: 1.1 Teclados Mecânicos" },
      { line: 4, title: "Segunda Subcategoria (h3)", explanation: "Mantém o mesmo nível h3 porque ainda pertence a Periféricos.", state: { NivelAtual: "h3", Pai: "h2 (Periféricos)", Sumario: "... > Periféricos > Mouses" }, output: "    H3: 1.2 Mouses Ergonômicos" },
      { line: 5, title: "Nova Seção (h2)", explanation: "Retorna ao nível h2 para iniciar um novo departamento de mesmo peso que Periféricos.", state: { NivelAtual: "h2", Pai: "h1", Sumario: "Lojas Blue > 2. Papelaria Técnica" }, output: "  H2: 2. Papelaria Técnica" }
    ]
  },
  "02-b": {
    title: "Escolha Semântica: <ul>, <ol> e <dl>",
    summary: "Rastreie qual estrutura de lista HTML representa melhor cada bloco de informação de um produto.",
    mode: "trace",
    code: [
      "<!-- Caso 1: Destaques sem ordem fixa -->",
      "<ul><li>Bluetooth 5.2</li><li>Bateria 70h</li></ul>",
      "<!-- Caso 2: Passo a passo sequencial -->",
      "<ol><li>Ligue o fone</li><li>Pareie no celular</li></ol>",
      "<!-- Caso 3: Ficha técnica termo/valor -->",
      "<dl><dt>SKU</dt><dd>BL-210</dd></dl>"
    ],
    steps: [
      { line: 2, title: "Lista não ordenada (<ul>)", explanation: "Se invertermos a ordem dos itens, o significado não muda. Usa-se <ul>.", state: { Tipo: "<ul>", OrdemImporta: "Não", Filhos: "<li>" }, output: "• Bluetooth 5.2 | • Bateria 70h" },
      { line: 4, title: "Lista ordenada (<ol>)", explanation: "A sequência de passos altera o resultado; por isso usamos <ol>.", state: { Tipo: "<ol>", OrdemImporta: "Sim (1, 2...)", Filhos: "<li>" }, output: "1. Ligue o fone | 2. Pareie no celular" },
      { line: 6, title: "Lista de definição (<dl>)", explanation: "Associa pares de termo (<dt>) e descrição/valor (<dd>) na ficha técnica.", state: { Tipo: "<dl>", Estrutura: "<dt> + <dd>", Uso: "Metadados / Glossário" }, output: "SKU: BL-210" }
    ]
  },
  "03-a": {
    title: "Mapeamento de Landmarks Semânticos e Âncoras Internas",
    summary: "Acompanhe como o navegador resolve links de navegação interna (#id) entre as regiões semânticas.",
    mode: "trace",
    code: [
      "<header><nav><a href=\"#ofertas\">Ir para Ofertas</a></nav></header>",
      "<main>",
      "  <section id=\"ofertas\">",
      "    <article><h3>Monitor 24\"</h3></article>",
      "  </section>",
      "</main>",
      "<footer><p>Lojas Blue</p></footer>"
    ],
    steps: [
      { line: 1, title: "Cabeçalho e Navegação", explanation: "O link possui href='#ofertas', apontando para uma âncora na mesma página.", state: { Landmark: "header > nav", LinkHref: "#ofertas", AlvoId: "ofertas" }, output: "Menu renderizado com link #ofertas" },
      { line: 2, title: "Entrada no <main>", explanation: "Delimita o conteúdo principal exclusivo desta página.", state: { Landmark: "main", UnicoPorPagina: "Sim" }, output: "" },
      { line: 3, title: "Localização da <section id='ofertas'>", explanation: "Quando o usuário clica no link, o navegador rola até o elemento cujo id='ofertas'.", state: { Landmark: "section#ofertas", MatchId: "Sim (id === 'ofertas')" }, output: "Rolagem posicionada em #ofertas" },
      { line: 4, title: "Card independente (<article>)", explanation: "Cada produto é um conteúdo autossuficiente marcado com <article>.", state: { Landmark: "article", Conteudo: "Monitor 24\"" }, output: "Card: Monitor 24\"" },
      { line: 7, title: "Rodapé institucional (<footer>)", explanation: "Encerra o documento com dados de autoria e atendimento.", state: { Landmark: "footer", Posicao: "Final da página" }, output: "Rodapé: Lojas Blue" }
    ]
  },
  "03-b": {
    title: "Renderização de <figure>, <img> e Atributo alt",
    summary: "Veja como o navegador utiliza src, alt, width, height e figcaption.",
    mode: "trace",
    code: [
      "<figure>",
      "  <img src=\"cadeira.svg\" alt=\"Cadeira ergonômica preta\" width=\"240\" height=\"160\">",
      "  <figcaption>Figura 1 — Ajuste lombar duplo.</figcaption>",
      "</figure>"
    ],
    steps: [
      { line: 1, title: "Abertura de <figure>", explanation: "Agrupa semanticamente uma mídia ilustrativa e sua legenda.", state: { Container: "<figure>", Acessibilidade: "Grupo semântico" }, output: "" },
      { line: 2, title: "Reserva de espaço e carregamento da imagem", explanation: "width e height reservam a proporção antes do download, evitando salto de layout (CLS); alt descreve a imagem.", state: { Src: "cadeira.svg", Alt: "Cadeira ergonômica preta", Dimensao: "240x160" }, output: "Imagem carregada (ou texto alt exibido se falhar)" },
      { line: 3, title: "Legenda <figcaption>", explanation: "Vincula a explicação visível diretamente à figura acima.", state: { Tag: "<figcaption>", Texto: "Figura 1 — Ajuste lombar duplo." }, output: "Legenda associada à imagem" }
    ]
  },
  "04-a": {
    title: "Anatomia de uma Tabela Acessível com scope",
    summary: "Entenda como <thead>, <tbody>, <tfoot> e scope conectam cabeçalhos às células de dados.",
    mode: "trace",
    code: [
      "<table>",
      "  <caption>Pedido #402</caption>",
      "  <thead><tr><th scope=\"col\">Item</th><th scope=\"col\">Total</th></tr></thead>",
      "  <tbody><tr><th scope=\"row\">Mouse</th><td>R$ 159,00</td></tr></tbody>",
      "  <tfoot><tr><th scope=\"row\">Soma</th><td>R$ 159,00</td></tr></tfoot>",
      "</table>"
    ],
    steps: [
      { line: 2, title: "Título da tabela (<caption>)", explanation: "Identifica o propósito da tabela logo na abertura.", state: { Secao: "caption", Texto: "Pedido #402" }, output: "Tabela: Pedido #402" },
      { line: 3, title: "Cabeçalhos de coluna (scope='col')", explanation: "Informa que 'Item' e 'Total' rotulam todas as células abaixo naquelas colunas.", state: { Secao: "thead", Colunas: "Item | Total", Scope: "col" }, output: "[Item] | [Total]" },
      { line: 4, title: "Linha de dados no <tbody>", explanation: "scope='row' identifica 'Mouse' como o rótulo daquela linha específica.", state: { Secao: "tbody", Linha: "Mouse", Valor: "R$ 159,00" }, output: "Mouse -> R$ 159,00" },
      { line: 5, title: "Totalização no <tfoot>", explanation: "Separa semanticamente o resumo/soma das linhas comuns de dados.", state: { Secao: "tfoot", Resumo: "Soma = R$ 159,00" }, output: "Soma: R$ 159,00" }
    ]
  },
  "04-b": {
    title: "Ciclo de Validação Nativa e Empacotamento de Formulário",
    summary: "Acompanhe o vínculo <label for> e a checagem de required/type antes do envio.",
    mode: "trace",
    code: [
      "<form action=\"/pedido\" method=\"post\">",
      "  <label for=\"email\">E-mail</label>",
      "  <input id=\"email\" name=\"email_cliente\" type=\"email\" required>",
      "  <button type=\"submit\">Enviar</button>",
      "</form>"
    ],
    steps: [
      { line: 2, title: "Associação <label for='email'>", explanation: "Conecta o rótulo ao campo com id='email', ampliando a área de clique e leitura de tela.", state: { LabelFor: "email", InputId: "email", VinculoOK: "Sim" }, output: "Foco ativado no campo #email" },
      { line: 3, title: "Validação nativa HTML5", explanation: "O navegador verifica se o campo não está vazio (required) e se segue o formato de e-mail (type='email').", state: { ValorDigitado: "ana@blue.com", RequiredOK: "Sim", FormatoEmailOK: "Sim" }, output: "Campo válido!" },
      { line: 4, title: "Submissão e par name=value", explanation: "Ao clicar em submit, o formulário envia a chave definida em name ('email_cliente') com o valor preenchido.", state: { Metodo: "POST", Action: "/pedido", Payload: "email_cliente=ana%40blue.com" }, output: "POST /pedido -> email_cliente=ana@blue.com" }
    ]
  },
  "05-a": {
    title: "Resolução da Cascata e Especificidade CSS",
    summary: "Veja como o navegador decide qual cor aplicar quando três regras disputam o mesmo elemento.",
    mode: "trace",
    code: [
      "/* Regra 1 */ p { color: #64748b; }",
      "/* Regra 2 */ .preco { color: #1d4ed8; }",
      "/* Regra 3 */ #preco-vip { color: #15803d; }",
      "/* HTML: <p id=\"preco-vip\" class=\"preco\">R$ 199</p> */"
    ],
    steps: [
      { line: 1, title: "Avaliação da Regra 1 (Seletor de Tag)", explanation: "O seletor 'p' casa com o elemento e tem especificidade (0, 0, 1).", state: { Seletor: "p", Especificidade: "(0, 0, 1)", CorCandidata: "#64748b (cinza)" }, output: "Candidata atual: #64748b" },
      { line: 2, title: "Avaliação da Regra 2 (Seletor de Classe)", explanation: "O seletor '.preco' tem especificidade (0, 1, 0), superando o seletor de tag.", state: { Seletor: ".preco", Especificidade: "(0, 1, 0) > (0, 0, 1)", CorCandidata: "#1d4ed8 (azul)" }, output: "Nova candidata vencedora: #1d4ed8" },
      { line: 3, title: "Avaliação da Regra 3 (Seletor de ID)", explanation: "O seletor '#preco-vip' tem especificidade (1, 0, 0), vencendo classe e tag.", state: { Seletor: "#preco-vip", Especificidade: "(1, 0, 0) > (0, 1, 0)", CorVencedora: "#15803d (verde)" }, output: "Estilo final aplicado: color: #15803d" }
    ]
  },
  "05-b": {
    title: "Resolução de Variáveis CSS (Custom Properties)",
    summary: "Acompanhe como variáveis declaradas em :root são herdadas pelos componentes.",
    mode: "trace",
    code: [
      ":root { --blue-primary: #1d4ed8; --radius: 12px; }",
      ".btn-comprar {",
      "  background: var(--blue-primary);",
      "  border-radius: var(--radius);",
      "}"
    ],
    steps: [
      { line: 1, title: "Declaração no escopo raiz (:root)", explanation: "As custom properties ficam disponíveis para toda a árvore DOM do documento.", state: { Escopo: ":root", "--blue-primary": "#1d4ed8", "--radius": "12px" }, output: "Tokens registrados no :root" },
      { line: 3, title: "Leitura de var(--blue-primary)", explanation: "O navegador substitui var(--blue-primary) pelo valor #1d4ed8 no botão.", state: { Propriedade: "background", ValorResolvido: "#1d4ed8" }, output: "background: #1d4ed8" },
      { line: 4, title: "Leitura de var(--radius)", explanation: "O raio da borda recebe 12px. Se o token mudar no :root, todos os botões atualizam juntos.", state: { Propriedade: "border-radius", ValorResolvido: "12px" }, output: "border-radius: 12px" }
    ]
  },
  "06-a": {
    title: "Cálculo de Largura Real: content-box vs border-box",
    summary: "Compare a matemática das camadas do Box Model para uma caixa com width: 260px, padding: 20px e border: 2px.",
    mode: "trace",
    code: [
      "/* Cenário A: box-sizing: content-box (padrão) */",
      ".card-a { width: 260px; padding: 20px; border: 2px solid #000; }",
      "/* Cenário B: box-sizing: border-box (recomendado) */",
      ".card-b { box-sizing: border-box; width: 260px; padding: 20px; border: 2px solid #000; }"
    ],
    steps: [
      { line: 2, title: "Cálculo em content-box", explanation: "Em content-box, width define apenas o miolo. Padding (20+20) e borda (2+2) são somados por fora.", state: { Modo: "content-box", Conteudo: "260px", Padding: "40px (20+20)", Borda: "4px (2+2)", LarguraTotal: "304px" }, output: ".card-a ocupa 304px na tela" },
      { line: 4, title: "Cálculo em border-box", explanation: "Em border-box, width: 260px já inclui padding e borda. O miolo se ajusta automaticamente para 216px.", state: { Modo: "border-box", LarguraTotal: "260px (travada)", Padding: "40px", Borda: "4px", ConteudoInterno: "216px" }, output: ".card-b ocupa exatos 260px na tela" }
    ]
  },
  "06-b": {
    title: "Ancoragem de Badge com position: relative e absolute",
    summary: "Veja por que o elemento pai precisa de position: relative para conter um selo absoluto.",
    mode: "trace",
    code: [
      ".card-produto { position: relative; }",
      ".badge-oferta {",
      "  position: absolute;",
      "  top: 12px;",
      "  right: 12px;",
      "}"
    ],
    steps: [
      { line: 1, title: "Criação do contexto de posicionamento", explanation: "Definir position: relative no .card-produto torna este card a referência para filhos absolutos.", state: { Elemento: ".card-produto", Position: "relative", ReferenciaCriada: "Sim" }, output: "Card definido como âncora" },
      { line: 3, title: "Remoção do badge do fluxo normal", explanation: "position: absolute retira o selo do fluxo de texto e procura o ancestral posicionado mais próximo.", state: { Elemento: ".badge-oferta", Position: "absolute", Ancestral: ".card-produto" }, output: "" },
      { line: 5, title: "Fixação nas coordenadas top/right", explanation: "O selo é posicionado a 12px do topo e 12px da direita do próprio card, não da janela inteira.", state: { Top: "12px", Right: "12px", Resultado: "Canto superior direito do card" }, output: "Selo fixado no canto do card" }
    ]
  },
  "07-a": {
    title: "Alinhamento de Navbar com Flexbox",
    summary: "Acompanhe como display: flex transforma o cabeçalho da loja em uma barra horizontal alinhada.",
    mode: "trace",
    code: [
      ".navbar {",
      "  display: flex;",
      "  justify-content: space-between;",
      "  align-items: center;",
      "  gap: 16px;",
      "}"
    ],
    steps: [
      { line: 2, title: "Ativação do Flex Container", explanation: "Os filhos diretos (logo, menu, sacola) passam a se organizar no eixo principal horizontal (row).", state: { Display: "flex", EixoPrincipal: "row (horizontal)", EixoTransversal: "vertical" }, output: "Itens colocados lado a lado" },
      { line: 3, title: "Distribuição no eixo principal", explanation: "justify-content: space-between empurra a marca para a esquerda, a sacola para a direita e distribui o espaço.", state: { JustifyContent: "space-between", Eixo: "Principal (horizontal)" }, output: "[Logo] <--- espaço ---> [Menu] <--- espaço ---> [Sacola]" },
      { line: 4, title: "Centralização vertical (Cross Axis)", explanation: "align-items: center nivela verticalmente itens de alturas diferentes.", state: { AlignItems: "center", Eixo: "Transversal (vertical)" }, output: "Todos os itens nivelados pelo centro vertical" }
    ]
  },
  "07-b": {
    title: "Botão Alinhado na Base do Card com margin-top: auto",
    summary: "Veja como igualar a posição do botão Comprar em cards com descrições de tamanhos diferentes.",
    mode: "trace",
    code: [
      ".card {",
      "  display: flex;",
      "  flex-direction: column;",
      "}",
      ".card .btn-comprar { margin-top: auto; }"
    ],
    steps: [
      { line: 2, title: "Card como Flex Container", explanation: "Transforma o card de produto em um container flexível.", state: { Elemento: ".card", Display: "flex" }, output: "" },
      { line: 3, title: "Eixo principal vertical (column)", explanation: "Empilha imagem, título, descrição e botão de cima para baixo.", state: { FlexDirection: "column", EixoPrincipal: "Vertical" }, output: "Filhos empilhados em coluna" },
      { line: 5, title: "Absorção da sobra com margin-top: auto", explanation: "A margem superior automática consome todo o espaço livre acima do botão, colando-o no rodapé do card.", state: { Elemento: ".btn-comprar", MarginTop: "auto", PosicaoFinal: "Base do card" }, output: "Botões alinhados na mesma linha horizontal!" }
    ]
  },
  "08-a": {
    title: "Cálculo de Colunas Responsivas com auto-fit e minmax()",
    summary: "Veja quantas colunas o CSS Grid cria automaticamente conforme a largura da tela muda.",
    mode: "trace",
    code: [
      ".vitrine {",
      "  display: grid;",
      "  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));",
      "  gap: 20px;",
      "}"
    ],
    steps: [
      { line: 3, title: "Desktop largo (1000px de largura)", explanation: "Cabem 4 colunas de pelo menos 220px (4x220 + 3x20 = 940px <= 1000px). Cada 1fr recebe 235px.", state: { LarguraContainer: "1000px", MinimoColuna: "220px", ColunasCriadas: "4 colunas de 235px" }, output: "Grade renderizada com 4 colunas" },
      { line: 3, title: "Tablet (520px de largura)", explanation: "Cabem 2 colunas (2x220 + 20 = 460px <= 520px). Cada coluna expande para 250px.", state: { LarguraContainer: "520px", MinimoColuna: "220px", ColunasCriadas: "2 colunas de 250px" }, output: "Grade reorganizada para 2 colunas" },
      { line: 3, title: "Smartphone (360px de largura)", explanation: "Não cabem 2 colunas de 220px. O Grid reduz automaticamente para 1 coluna ocupando 100% (1fr = 360px).", state: { LarguraContainer: "360px", MinimoColuna: "220px", ColunasCriadas: "1 coluna de 360px" }, output: "Grade empilhada em 1 coluna" }
    ]
  },
  "08-b": {
    title: "Avaliação de Media Query em Mudança de Viewport",
    summary: "Acompanhe quando o bloco @media (max-width: 768px) entra em ação.",
    mode: "trace",
    code: [
      ".layout { grid-template-columns: 240px 1fr; }",
      "@media (max-width: 768px) {",
      "  .layout { grid-template-columns: 1fr; }",
      "}"
    ],
    steps: [
      { line: 1, title: "Tela Desktop (1200px)", explanation: "1200px não satisfaz max-width: 768px. Vale a regra base com sidebar de 240px + área principal.", state: { Viewport: "1200px", MediaAtiva: "Não", Colunas: "240px 1fr (2 colunas)" }, output: "Sidebar ao lado do catálogo" },
      { line: 2, title: "Redimensionamento para 680px", explanation: "680px <= 768px: a condição da Media Query torna-se verdadeira!", state: { Viewport: "680px", MediaAtiva: "Sim (<= 768px)" }, output: "@media ativada" },
      { line: 3, title: "Aplicação da regra responsiva", explanation: "O layout passa a ter apenas 1 coluna (1fr), empilhando a sidebar acima do catálogo.", state: { Viewport: "680px", Colunas: "1fr (1 coluna)" }, output: "Layout empilhado para leitura confortável no mobile" }
    ]
  },
  "09-a": {
    title: "Seleção no DOM e Atualização Segura com textContent",
    summary: "Rastreie como o JavaScript localiza elementos na árvore DOM e altera seu texto.",
    mode: "trace",
    code: [
      "const precoEl = document.querySelector('#preco-item');",
      "const precoBase = Number(precoEl.dataset.preco);",
      "const precoComDesconto = precoBase * 0.9;",
      "precoEl.textContent = `R$ ${precoComDesconto.toFixed(2)}`;"
    ],
    steps: [
      { line: 1, title: "Busca com querySelector", explanation: "O navegador percorre o DOM e retorna a referência para o elemento com id='preco-item'.", state: { Elemento: "<span id='preco-item' data-preco='200'>", TextoAtual: "R$ 200.00" }, output: "Referência DOM capturada" },
      { line: 2, title: "Leitura de data-preco via dataset", explanation: "precoEl.dataset.preco lê o atributo data-preco='200' e Number() converte para número.", state: { DatasetPreco: "'200'", precoBase: 200 }, output: "" },
      { line: 3, title: "Cálculo do desconto de 10%", explanation: "Multiplica o valor numérico por 0.9.", state: { precoBase: 200, precoComDesconto: 180 }, output: "" },
      { line: 4, title: "Escrita segura com textContent", explanation: "Atualiza o texto visível na página instantaneamente sem recarregar o documento.", state: { TextoAtual: "R$ 180.00", DOMAtualizado: "Sim" }, output: "Tela exibe: R$ 180.00" }
    ]
  },
  "09-b": {
    title: "Alternância de Estado Visual com classList.toggle",
    summary: "Veja como o JS delega a mudança visual ao CSS apenas trocando classes.",
    mode: "trace",
    code: [
      "const card = document.querySelector('.card-produto');",
      "const ativo = card.classList.toggle('selecionado');",
      "console.log('Selecionado?', ativo);"
    ],
    steps: [
      { line: 1, title: "Estado inicial do elemento", explanation: "O elemento possui apenas a classe original 'card-produto'.", state: { Classes: "['card-produto']", RetornoToggle: "-" }, output: "" },
      { line: 2, title: "Primeira execução de toggle('selecionado')", explanation: "Como a classe não existia, ela é adicionada e o método retorna true.", state: { Classes: "['card-produto', 'selecionado']", RetornoToggle: "true" }, output: "Selecionado? true (borda verde ativada)" },
      { line: 2, title: "Segunda execução de toggle('selecionado')", explanation: "Se chamado novamente, remove a classe e retorna false.", state: { Classes: "['card-produto']", RetornoToggle: "false" }, output: "Selecionado? false (borda padrão restaurada)" }
    ]
  },
  "10-a": {
    title: "Fluxo de Evento input e Recálculo em Tempo Real",
    summary: "Acompanhe o disparo do listener a cada alteração no campo de quantidade.",
    mode: "trace",
    code: [
      "campoQtd.addEventListener('input', (event) => {",
      "  const qtd = Number(event.target.value) || 0;",
      "  const total = qtd * 150;",
      "  saidaTotal.textContent = `R$ ${total},00`;",
      "});"
    ],
    steps: [
      { line: 1, title: "Registro do ouvinte (addEventListener)", explanation: "O navegador passa a monitorar qualquer digitação ou clique nas setas do input.", state: { Evento: "input", Alvo: "campoQtd", ValorInput: "1" }, output: "Listener registrado" },
      { line: 2, title: "Usuário altera quantidade para 3", explanation: "O evento 'input' dispara imediatamente; event.target.value vale '3'.", state: { EventTargetValue: "'3'", qtd: 3 }, output: "" },
      { line: 3, title: "Cálculo do subtotal", explanation: "Multiplica as 3 unidades pelo preço unitário de R$ 150.", state: { qtd: 3, PrecoUnitario: 150, total: 450 }, output: "" },
      { line: 4, title: "Atualização da interface", explanation: "O elemento saidaTotal recebe o novo valor imediatamente.", state: { saidaTotal: "R$ 450,00" }, output: "Subtotal na tela: R$ 450,00" }
    ]
  },
  "10-b": {
    title: "Interceptação de submit com event.preventDefault()",
    summary: "Veja por que preventDefault() é indispensável ao validar formulários com JavaScript.",
    mode: "trace",
    code: [
      "formCupom.addEventListener('submit', (event) => {",
      "  event.preventDefault();",
      "  const codigo = inputCupom.value.trim().toUpperCase();",
      "  msg.textContent = codigo === 'BLUE10' ? 'Cupom aplicado!' : 'Cupom inválido';",
      "});"
    ],
    steps: [
      { line: 1, title: "Usuário pressiona Enter ou clica em Aplicar", explanation: "O evento 'submit' é disparado no elemento <form>.", state: { Evento: "submit", RecarregamentoPadrao: "Pendente" }, output: "" },
      { line: 2, title: "Execução de event.preventDefault()", explanation: "Cancela o comportamento padrão do navegador de recarregar a página.", state: { PreventDefault: "Executado", PaginaRecarregou: "Não" }, output: "Reload bloqueado com sucesso" },
      { line: 3, title: "Normalização da entrada", explanation: "Remove espaços extras com trim() e converte para maiúsculas ('blue10' -> 'BLUE10').", state: { EntradaBruta: "' blue10 '", codigo: "'BLUE10'" }, output: "" },
      { line: 4, title: "Exibição do feedback na página", explanation: "Como 'BLUE10' coincide, exibe a mensagem de sucesso sem perder o estado da tela.", state: { msg: "Cupom aplicado!" }, output: "Tela exibe: Cupom aplicado!" }
    ]
  },
  "11-a": {
    title: "Renderização de Array de Objetos com createElement e appendChild",
    summary: "Acompanhe como dados puros em JavaScript viram elementos reais no DOM.",
    mode: "trace",
    code: [
      "const itens = ['Mouse', 'Teclado'];",
      "listaUl.innerHTML = '';",
      "itens.forEach((nome) => {",
      "  const li = document.createElement('li');",
      "  li.textContent = nome;",
      "  listaUl.appendChild(li);",
      "});"
    ],
    steps: [
      { line: 2, title: "Limpeza do container", explanation: "Zera a lista antes de renderizar para evitar duplicação de itens antigos.", state: { FilhosNaUl: 0 }, output: "<ul> limpa" },
      { line: 4, title: "Iteração 1: createElement('li')", explanation: "Cria um nó <li> em memória para 'Mouse' e define seu textContent.", state: { ItemAtual: "Mouse", NoEmMemoria: "<li>Mouse</li>", FilhosNaUl: 0 }, output: "" },
      { line: 6, title: "Iteração 1: appendChild(li)", explanation: "Insere o primeiro <li> dentro da <ul> visível no documento.", state: { FilhosNaUl: 1, DOM: "<ul><li>Mouse</li></ul>" }, output: "• Mouse" },
      { line: 6, title: "Iteração 2: Criação e inserção de 'Teclado'", explanation: "Repete o processo para o segundo item do array.", state: { FilhosNaUl: 2, DOM: "<ul><li>Mouse</li><li>Teclado</li></ul>" }, output: "• Mouse | • Teclado" }
    ]
  },
  "11-b": {
    title: "Ciclo de Persistência no localStorage com JSON",
    summary: "Veja como salvar e recuperar um array de objetos mesmo após fechar a aba.",
    mode: "trace",
    code: [
      "const sacola = [{ sku: 'BL-01', qtd: 2 }];",
      "const textoJson = JSON.stringify(sacola);",
      "localStorage.setItem('blue_sacola', textoJson);",
      "/* Após recarregar a página (F5): */",
      "const lido = JSON.parse(localStorage.getItem('blue_sacola') || '[]');"
    ],
    steps: [
      { line: 1, title: "Estado em memória (Array de objetos)", explanation: "O localStorage só aceita strings; não podemos salvar o array diretamente.", state: { TipoMemoria: "Array (Object)", Valor: "[{ sku: 'BL-01', qtd: 2 }]" }, output: "" },
      { line: 2, title: "Serialização com JSON.stringify", explanation: "Converte o array de objetos em uma string formatada em JSON.", state: { Tipo: "String", textoJson: "'[{"sku":"BL-01","qtd":2}]'" }, output: "JSON serializado" },
      { line: 3, title: "Gravação no localStorage", explanation: "Persiste a string sob a chave 'blue_sacola' no armazenamento do navegador.", state: { Chave: "blue_sacola", PersistidoNoDisco: "Sim" }, output: "Salvo em localStorage['blue_sacola']" },
      { line: 5, title: "Reconstrução com JSON.parse após F5", explanation: "Lê a string guardada e reconstrói o array JavaScript original.", state: { TipoRecuperado: "Array (Object)", ItensRecuperados: 1, PrimeiroSku: "BL-01" }, output: "Estado restaurado: 1 item (qtd: 2)" }
    ]
  },
  "12-a": {
    title: "Arquitetura Unidirecional: Estado -> Filtro -> Renderização",
    summary: "Acompanhe o ciclo completo da Vitrine Lojas Blue quando o usuário filtra uma categoria.",
    mode: "trace",
    code: [
      "estado.categoria = 'Periféricos';",
      "const visiveis = catalogo.filter(p => p.cat === estado.categoria);",
      "contadorEl.textContent = `${visiveis.length} produtos`;",
      "renderizarGrade(visiveis);"
    ],
    steps: [
      { line: 1, title: "Atualização do Estado da Aplicação", explanation: "O clique na pílula 'Periféricos' atualiza a fonte única de verdade (estado.categoria).", state: { CategoriaAtiva: "Periféricos", TotalCatalogo: 6 }, output: "Filtro selecionado: Periféricos" },
      { line: 2, title: "Derivação da lista filtrada", explanation: "O método filter() seleciona apenas os produtos da categoria escolhida.", state: { CategoriaAtiva: "Periféricos", ProdutosFiltrados: 2 }, output: "" },
      { line: 3, title: "Sincronização do contador", explanation: "Atualiza o indicador numérico de resultados encontrados.", state: { ContadorTela: "2 produtos" }, output: "Contador: 2 produtos" },
      { line: 4, title: "Reconstrução da grade de cards", explanation: "renderizarGrade() limpa a vitrine e desenha os 2 cards correspondentes.", state: { CardsNoDOM: 2, Sincronizado: "Sim" }, output: "Vitrine exibe os 2 periféricos" }
    ]
  },
  "12-b": {
    title: "Fechamento da Sacola: Subtotal, Frete Grátis e Cupom BLUE10",
    summary: "Rastreie a regra de negócio completa do carrinho da Vitrine Lojas Blue.",
    mode: "trace",
    code: [
      "const subtotal = sacola.reduce((acc, i) => acc + i.preco * i.qtd, 0);",
      "const desconto = cupom === 'BLUE10' ? subtotal * 0.10 : 0;",
      "const faltaFrete = Math.max(0, 250 - (subtotal - desconto));",
      "const totalFinal = subtotal - desconto;"
    ],
    steps: [
      { line: 1, title: "Soma do subtotal com reduce()", explanation: "Acumula preço x quantidade de todos os itens (ex.: 2x R$ 150 = R$ 300).", state: { Subtotal: "R$ 300,00", Cupom: "BLUE10" }, output: "Subtotal bruto: R$ 300,00" },
      { line: 2, title: "Aplicação do cupom BLUE10 (10%)", explanation: "Calcula R$ 30,00 de desconto sobre o subtotal.", state: { Subtotal: "R$ 300,00", Desconto: "R$ 30,00" }, output: "Desconto: -R$ 30,00" },
      { line: 3, title: "Verificação da meta de Frete Grátis (R$ 250)", explanation: "Como R$ 270,00 >= R$ 250,00, faltaFrete resulta em 0 (Frete Grátis liberado!).", state: { BaseFrete: "R$ 270,00", Meta: "R$ 250,00", FaltaParaFrete: "R$ 0,00 (Grátis!)" }, output: "Frete Grátis desbloqueado!" },
      { line: 4, title: "Consolidação do total final", explanation: "Apresenta o valor líquido a pagar e persiste o estado no localStorage.", state: { TotalFinal: "R$ 270,00", Frete: "Grátis" }, output: "Total do Pedido: R$ 270,00" }
    ]
  }
};
