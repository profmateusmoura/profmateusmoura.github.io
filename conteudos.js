/* CATÁLOGO DO PORTAL — um objeto por disciplina.
   Ao preparar o conteúdo de uma disciplina, crie a pasta indicada
   em materiais/SIGLA/ e altere disponivel para true.
   Todos os caminhos são RELATIVOS, portanto funcionam tanto em
   repositórios de usuário quanto em repositórios de projeto. */
window.CATALOGO_MATERIAIS = [
  {
    titulo: 'ALP',
    subtitulo: 'Algoritmos e Lógica de Programação',
    descricao: 'Os primeiros passos em Python: saída, entrada, variáveis, operadores, decisões, repetições, validação, funções e teste de mesa.',
    categoria: 'Fundamentos', nivel: 'Iniciante',
    detalhes: '13 cadernos interativos · 418 práticas (.zip)', destaque: 'ALP',
    caminho: 'materiais/alp/index.html', cor: 'azul', disponivel: true,
    temas: ['Algoritmos', 'Python', 'Variáveis', 'Condições', 'Repetição', 'Funções', 'Teste de mesa']
  },
  {
    titulo: 'PED',
    subtitulo: 'Programação e Estruturas de Dados',
    descricao: 'Listas, tuplas, dicionários, conjuntos, JSON, buscas, cinco métodos de ordenação, pilhas, filas, árvores e grafos.',
    categoria: 'Programação', nivel: 'Básico a intermediário',
    detalhes: '6 cadernos · conteúdo completo · PDFs', destaque: 'PED',
    caminho: 'materiais/ped/index.html', cor: 'verde', disponivel: true,
    temas: ['Listas', 'Dicionários', 'JSON', 'Busca binária', 'Merge Sort', 'Quick Sort', 'Big O']
  },
  {
    titulo: 'POO',
    subtitulo: 'Programação Orientada a Objetos',
    descricao: 'Classes, objetos, validação, composição, herança, polimorfismo, JSON e testes no cenário Lojas Blue.',
    categoria: 'Programação', nivel: 'Intermediário',
    detalhes: '12 cadernos · 36 exemplos · 72 exercícios', destaque: 'POO',
    caminho: 'materiais/poo/index.html', cor: 'roxo', disponivel: true,
    temas: ['Classes', 'Objetos', 'Herança', 'Polimorfismo', 'Testes']
  },
  {
    titulo: 'DW1',
    subtitulo: 'Desenvolvimento Web I',
    descricao: 'HTML5 semântico, CSS3 moderno (Box Model, Flexbox, Grid e responsividade) e JavaScript DOM com simuladores visuais ao vivo na Vitrine Lojas Blue.',
    categoria: 'Desenvolvimento Web', nivel: 'Iniciante',
    detalhes: '12 cadernos interativos · 12 simuladores · 120 práticas (.zip)', destaque: 'DW1',
    caminho: 'materiais/dw1/index.html', cor: 'azul', disponivel: true,
    temas: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'JavaScript', 'DOM', 'localStorage']
  },
  {
    titulo: 'DW2',
    subtitulo: 'Desenvolvimento Web II',
    descricao: 'Programação para Web, processamento de dados, formulários, JSON e comunicação com APIs.',
    categoria: 'Desenvolvimento Web', nivel: 'Intermediário',
    detalhes: 'Material em preparação', destaque: 'DW2',
    caminho: 'materiais/dw2/index.html', cor: 'verde', disponivel: false,
    temas: ['PHP', 'AJAX', 'JSON', 'APIs', 'Regex']
  },
  {
    titulo: 'DW3',
    subtitulo: 'Desenvolvimento Web III',
    descricao: 'Desenvolvimento de aplicações com arquitetura organizada, frameworks e integração de serviços.',
    categoria: 'Desenvolvimento Web', nivel: 'Avançado',
    detalhes: 'Material em preparação', destaque: 'DW3',
    caminho: 'materiais/dw3/index.html', cor: 'roxo', disponivel: false,
    temas: ['Laravel', 'Vue.js', 'Postman', 'APIs']
  },
  {
    titulo: 'PJE',
    subtitulo: 'Programação de Jogos Eletrônicos',
    descricao: 'Criação de jogos 2D com Godot: cenas, nós, movimento, colisão, sinais, interface e projetos autorais.',
    categoria: 'Jogos', nivel: 'Iniciante a intermediário',
    detalhes: '13 cadernos · 9 versões Godot · 52 atividades (.zip)', destaque: 'PJE',
    caminho: 'materiais/pje/index.html', cor: 'azul', disponivel: true,
    temas: ['Godot', 'Jogos 2D', 'Cenas', 'Movimentação', 'GDScript']
  }
];
