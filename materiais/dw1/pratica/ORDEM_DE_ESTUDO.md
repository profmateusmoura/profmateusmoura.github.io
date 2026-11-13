# Ordem de estudo — DW1 (Desenvolvimento Web I)

Siga os 12 cadernos em ordem. Em cada tópico, abra primeiro os 4 exemplos comentados no VS Code e no navegador, inspecione os elementos com `F12` (DevTools) e depois resolva os 6 exercícios práticos.

## Mapa do percurso

| Etapa | Tópico | Exemplos | Exercícios | Objetivo de aprendizagem |
|---|---|---:|---:|---|
| 01 | [Como a Web funciona e o primeiro documento HTML](#01_web_e_documento_html) | 4 | 6 | Compreender o ciclo cliente-servidor (HTTP/URL), os papéis de HTML, CSS e JS e estruturar um documento HTML5 válido. |
| 02 | [Estrutura de texto e semântica de conteúdo](#02_texto_e_semantica) | 4 | 6 | Estruturar textos com hierarquia de títulos (h1–h6), parágrafos, ênfase semântica (strong, em) e listas (ul, ol, dl). |
| 03 | [Marcos semânticos de página, links e imagens](#03_estrutura_links_e_midia) | 4 | 6 | Organizar regiões da página com header, nav, main, section, article, aside e footer, criar links de navegação e inserir imagens acessíveis. |
| 04 | [Tabelas de dados e formulários de entrada](#04_tabelas_e_formularios) | 4 | 6 | Construir tabelas acessíveis (caption, thead, tbody, tfoot, th scope) e formulários estruturados com label, input, select, textarea e validação nativa. |
| 05 | [Introdução ao CSS: seletores, cascata e tipografia](#05_css_seletores_e_cascata) | 4 | 6 | Aplicar regras CSS por seletores de elemento, classe e ID, compreender cascata, herança e especificidade e definir cores e fontes com variáveis CSS. |
| 06 | [Modelo de Caixa (Box Model), dimensões e posicionamento](#06_box_model_e_unidades) | 4 | 6 | Dominar content, padding, border, margin, box-sizing: border-box, unidades relativas (rem, %, vw/vh), modos de display e estados :hover/:focus-visible. |
| 07 | [Layout moderno com Flexbox](#07_layout_flexbox) | 4 | 6 | Alinhar e distribuir componentes em uma dimensão usando display: flex, flex-direction, justify-content, align-items, gap e flex-wrap. |
| 08 | [Layout em grade com CSS Grid e responsividade (Media Queries)](#08_grid_e_responsividade) | 4 | 6 | Construir grades bidimensionais com CSS Grid (fr, minmax, auto-fit) e adaptar layouts para celular e desktop com Media Queries (@media). |
| 09 | [Primeiros passos com JavaScript no navegador e o DOM](#09_javascript_e_dom) | 4 | 6 | Compreender a árvore DOM, selecionar elementos com querySelector/querySelectorAll e atualizar textos (textContent), classes (classList) e atributos com segurança. |
| 10 | [Eventos, leitura de campos e atualização dinâmica da interface](#10_eventos_e_interacao) | 4 | 6 | Reagir a ações do usuário com addEventListener (click, input, submit), usar event.preventDefault(), ler e converter .value de campos e validar formulários na interface. |
| 11 | [Criando elementos dinamicamente e persistência local (localStorage)](#11_elementos_dinamicos_e_storage) | 4 | 6 | Criar e inserir elementos no DOM com createElement/append, filtrar listas de produtos na tela e persistir dados no navegador com localStorage e JSON. |
| 12 | [Projeto Integrado: Vitrine Interativa Lojas Blue](#12_projeto_vitrine_blue) | 4 | 6 | Integrar HTML5 semântico, CSS responsivo (variáveis, Box Model, Flexbox e Grid) e JavaScript (DOM, eventos, filtros, sacola e localStorage) em uma aplicação completa. |

<a id="01_web_e_documento_html"></a>

## 01 — Como a Web funciona e o primeiro documento HTML

**Objetivo:** Compreender o ciclo cliente-servidor (HTTP/URL), os papéis de HTML, CSS e JS e estruturar um documento HTML5 válido.

**Exemplos comentados, na ordem:**

- [01_documento_minimo — Documento HTML5 mínimo da Lojas Blue](01_web_e_documento_html/exemplos/01_documento_minimo.html)
- [02_metadados_head — Metadados essenciais no head (charset, viewport e description)](01_web_e_documento_html/exemplos/02_metadados_head.html)
- [03_comentarios_e_inspecao — Comentários HTML e organização do código-fonte](01_web_e_documento_html/exemplos/03_comentarios_e_inspecao.html)
- [04_tres_camadas_web — As três camadas da Web em ação: estrutura (HTML), estilo (CSS) e comportamento (JS)](01_web_e_documento_html/exemplos/04_tres_camadas_web.html)

**Exercícios práticos, na ordem:**

- [01_estruturar_boas_vindas — Implementar: página de boas-vindas da filial Savassi](01_web_e_documento_html/exercicios/01_estruturar_boas_vindas.html)
- [02_configurar_head_completo — Implementar: configurar metadados de página de ofertas](01_web_e_documento_html/exercicios/02_configurar_head_completo.html)
- [03_organizar_com_comentarios — Implementar: documentar blocos com comentários HTML](01_web_e_documento_html/exercicios/03_organizar_com_comentarios.html)
- [04_teste_de_mesa_arvore_dom — Teste de mesa Web: prever a árvore DOM de um documento](01_web_e_documento_html/exercicios/04_teste_de_mesa_arvore_dom.html)
- [05_investigar_titulo_no_lugar_errado — Investigar e corrigir: <title> e <meta> colocados dentro do <body>](01_web_e_documento_html/exercicios/05_investigar_titulo_no_lugar_errado.html)
- [06_investigar_tags_abertas — Investigar e corrigir: tags sem fechamento e atributo sem aspas](01_web_e_documento_html/exercicios/06_investigar_tags_abertas.html)

<a id="02_texto_e_semantica"></a>

## 02 — Estrutura de texto e semântica de conteúdo

**Objetivo:** Estruturar textos com hierarquia de títulos (h1–h6), parágrafos, ênfase semântica (strong, em) e listas (ul, ol, dl).

**Exemplos comentados, na ordem:**

- [01_hierarquia_de_titulos — Hierarquia correta de títulos (h1 a h3) no catálogo](02_texto_e_semantica/exemplos/01_hierarquia_de_titulos.html)
- [02_enfase_e_destaque_semantico — Diferença entre importância (strong), ênfase (em) e código/citação](02_texto_e_semantica/exemplos/02_enfase_e_destaque_semantico.html)
- [03_listas_ordenadas_e_nao_ordenadas — Listas não ordenadas (ul) e listas ordenadas passo a passo (ol)](02_texto_e_semantica/exemplos/03_listas_ordenadas_e_nao_ordenadas.html)
- [04_lista_de_definicoes_dl — Ficha técnica de produto com lista de descrição (dl, dt, dd)](02_texto_e_semantica/exemplos/04_lista_de_definicoes_dl.html)

**Exercícios práticos, na ordem:**

- [01_hierarquia_setores — Implementar: sumário hierárquico com h1, h2 e h3](02_texto_e_semantica/exercicios/01_hierarquia_setores.html)
- [02_aviso_com_strong_e_em — Implementar: comunicado interno com strong, em e code](02_texto_e_semantica/exercicios/02_aviso_com_strong_e_em.html)
- [03_listas_de_procedimento — Implementar: escolher corretamente entre ul e ol](02_texto_e_semantica/exercicios/03_listas_de_procedimento.html)
- [04_ficha_produto_dl — Implementar: ficha de especificações com dl, dt e dd](02_texto_e_semantica/exercicios/04_ficha_produto_dl.html)
- [05_teste_de_mesa_outline — Teste de mesa Web: auditar a árvore de títulos de uma página](02_texto_e_semantica/exercicios/05_teste_de_mesa_outline.html)
- [06_investigar_falsa_lista_com_br — Investigar e corrigir: substituir quebras <br> improvisadas por lista semântica](02_texto_e_semantica/exercicios/06_investigar_falsa_lista_com_br.html)

<a id="03_estrutura_links_e_midia"></a>

## 03 — Marcos semânticos de página, links e imagens

**Objetivo:** Organizar regiões da página com header, nav, main, section, article, aside e footer, criar links de navegação e inserir imagens acessíveis.

**Exemplos comentados, na ordem:**

- [01_regioes_semanticas — Layout semântico completo (header, nav, main, section, article, aside, footer)](03_estrutura_links_e_midia/exemplos/01_regioes_semanticas.html)
- [02_links_ancoras_e_caminhos — Links internos por âncora (#id), caminhos relativos e links externos seguros](03_estrutura_links_e_midia/exemplos/02_links_ancoras_e_caminhos.html)
- [03_imagens_alt_e_figure — Imagens acessíveis com atributo alt, figure e figcaption](03_estrutura_links_e_midia/exemplos/03_imagens_alt_e_figure.html)
- [04_card_de_produto_semantico — Artigo independente (article) para cartão de produto reutilizável](03_estrutura_links_e_midia/exemplos/04_card_de_produto_semantico.html)

**Exercícios práticos, na ordem:**

- [01_estruturar_landmarks — Implementar: organizar página com header, nav, main, section e footer](03_estrutura_links_e_midia/exercicios/01_estruturar_landmarks.html)
- [02_menu_de_ancoras — Implementar: menu de navegação interna por âncoras (#id)](03_estrutura_links_e_midia/exercicios/02_menu_de_ancoras.html)
- [03_figure_acessivel — Implementar: imagem de produto com alt descritivo e legenda](03_estrutura_links_e_midia/exercicios/03_figure_acessivel.html)
- [04_articles_de_produtos — Implementar: vitrine com três cartões <article>](03_estrutura_links_e_midia/exercicios/04_articles_de_produtos.html)
- [05_teste_de_mesa_caminhos_relativos — Teste de mesa Web: resolver caminhos relativos de links](03_estrutura_links_e_midia/exercicios/05_teste_de_mesa_caminhos_relativos.html)
- [06_investigar_div_soup_e_links_vagos — Investigar e corrigir: trocar excesso de <div> genéricas e links 'clique aqui'](03_estrutura_links_e_midia/exercicios/06_investigar_div_soup_e_links_vagos.html)

<a id="04_tabelas_e_formularios"></a>

## 04 — Tabelas de dados e formulários de entrada

**Objetivo:** Construir tabelas acessíveis (caption, thead, tbody, tfoot, th scope) e formulários estruturados com label, input, select, textarea e validação nativa.

**Exemplos comentados, na ordem:**

- [01_tabela_de_estoque_semantica — Tabela de estoque com caption, thead, tbody, tfoot e th scope](04_tabelas_e_formularios/exemplos/01_tabela_de_estoque_semantica.html)
- [02_formulario_com_labels_conectados — Formulário de cadastro com label for + id e tipos semânticos de input](04_tabelas_e_formularios/exemplos/02_formulario_com_labels_conectados.html)
- [03_select_radio_checkbox_textarea — Agrupamento com fieldset/legend, select, radio, checkbox e textarea](04_tabelas_e_formularios/exemplos/03_select_radio_checkbox_textarea.html)
- [04_validacao_nativa_html5 — Validação nativa do navegador (required, min, max, minlength, type)](04_tabelas_e_formularios/exemplos/04_validacao_nativa_html5.html)

**Exercícios práticos, na ordem:**

- [01_tabela_comparativa_filiais — Implementar: tabela de vendas com thead, tbody e tfoot](04_tabelas_e_formularios/exercicios/01_tabela_comparativa_filiais.html)
- [02_formulario_consulta_preco — Implementar: formulário acessível com label e input](04_tabelas_e_formularios/exercicios/02_formulario_consulta_preco.html)
- [03_triagem_com_select_e_radio — Implementar: escolha de setor (select) e prioridade (radio)](04_tabelas_e_formularios/exercicios/03_triagem_com_select_e_radio.html)
- [04_regras_de_validacao_nativa — Implementar: restrições required, type="email" e min/max](04_tabelas_e_formularios/exercicios/04_regras_de_validacao_nativa.html)
- [05_teste_de_mesa_radio_e_name — Teste de mesa Web: comportamento do atributo name em formulários](04_tabelas_e_formularios/exercicios/05_teste_de_mesa_radio_e_name.html)
- [06_investigar_inputs_sem_label — Investigar e corrigir: formulário usando apenas placeholder sem <label>](04_tabelas_e_formularios/exercicios/06_investigar_inputs_sem_label.html)

<a id="05_css_seletores_e_cascata"></a>

## 05 — Introdução ao CSS: seletores, cascata e tipografia

**Objetivo:** Aplicar regras CSS por seletores de elemento, classe e ID, compreender cascata, herança e especificidade e definir cores e fontes com variáveis CSS.

**Exemplos comentados, na ordem:**

- [01_seletores_tag_classe_id — Seletores de elemento (p), classe (.destaque) e ID (#cabecalho)](05_css_seletores_e_cascata/exemplos/01_seletores_tag_classe_id.html)
- [02_cascata_e_especificidade — Como a cascata e a especificidade decidem qual cor vence](05_css_seletores_e_cascata/exemplos/02_cascata_e_especificidade.html)
- [03_variaveis_css_e_cores — Paleta de cores consistente e contraste usando variáveis CSS (:root)](05_css_seletores_e_cascata/exemplos/03_variaveis_css_e_cores.html)
- [04_tipografia_e_leitura — Tipografia legível: font-family, font-size, line-height e largura de linha (ch)](05_css_seletores_e_cascata/exemplos/04_tipografia_e_leitura.html)

**Exercícios práticos, na ordem:**

- [01_estilizar_catalogo_por_classes — Implementar: estilizar cartões e selos usando classes CSS](05_css_seletores_e_cascata/exercicios/01_estilizar_catalogo_por_classes.html)
- [02_criar_tema_com_variaveis — Implementar: centralizar cores em variáveis CSS no :root](05_css_seletores_e_cascata/exercicios/02_criar_tema_com_variaveis.html)
- [03_ajustar_tipografia_editorial — Implementar: configurar hierarquia tipográfica e conforto de leitura](05_css_seletores_e_cascata/exercicios/03_ajustar_tipografia_editorial.html)
- [04_combinadores_descendente_e_filho — Implementar: estilizar apenas links dentro do menu (.menu a)](05_css_seletores_e_cascata/exercicios/04_combinadores_descendente_e_filho.html)
- [05_teste_de_mesa_especificidade — Teste de mesa Web: calcular qual regra CSS vence](05_css_seletores_e_cascata/exercicios/05_teste_de_mesa_especificidade.html)
- [06_investigar_baixo_contraste_e_important — Investigar e corrigir: remover !important desnecessário e corrigir contraste ilegível](05_css_seletores_e_cascata/exercicios/06_investigar_baixo_contraste_e_important.html)

<a id="06_box_model_e_unidades"></a>

## 06 — Modelo de Caixa (Box Model), dimensões e posicionamento

**Objetivo:** Dominar content, padding, border, margin, box-sizing: border-box, unidades relativas (rem, %, vw/vh), modos de display e estados :hover/:focus-visible.

**Exemplos comentados, na ordem:**

- [01_anatomia_box_model — As quatro camadas do Box Model: content, padding, border e margin](06_box_model_e_unidades/exemplos/01_anatomia_box_model.html)
- [02_content_box_vs_border_box — Comparação direta: content-box (padrão que soma borda/padding) vs. border-box](06_box_model_e_unidades/exemplos/02_content_box_vs_border_box.html)
- [03_display_block_inline_inline_block — Diferença prática entre display: block, inline e inline-block](06_box_model_e_unidades/exemplos/03_display_block_inline_inline_block.html)
- [04_estados_hover_e_focus_visible —  Botões interativos com :hover e contorno de teclado :focus-visible](06_box_model_e_unidades/exemplos/04_estados_hover_e_focus_visible.html)

**Exercícios práticos, na ordem:**

- [01_aplicar_border_box_e_espacamento — Implementar: cartão com respiro interno (padding) e externo (margin)](06_box_model_e_unidades/exercicios/01_aplicar_border_box_e_espacamento.html)
- [02_badges_com_inline_block — Implementar: transformar links em botões com inline-block](06_box_model_e_unidades/exercicios/02_badges_com_inline_block.html)
- [03_centralizar_container_com_margin_auto — Implementar: container centralizado com max-width e margin: 0 auto](06_box_model_e_unidades/exercicios/03_centralizar_container_com_margin_auto.html)
- [04_unidades_rem_e_porcentagem — Implementar: substituir medidas fixas rígidas por rem e %](06_box_model_e_unidades/exercicios/04_unidades_rem_e_porcentagem.html)
- [05_teste_de_mesa_calculo_largura — Teste de mesa Web: calcular a largura total no content-box vs. border-box](06_box_model_e_unidades/exercicios/05_teste_de_mesa_calculo_largura.html)
- [06_investigar_estouro_de_largura_100 — Investigar e corrigir: caixa com width: 100% + padding estourando a tela](06_box_model_e_unidades/exercicios/06_investigar_estouro_de_largura_100.html)

<a id="07_layout_flexbox"></a>

## 07 — Layout moderno com Flexbox

**Objetivo:** Alinhar e distribuir componentes em uma dimensão usando display: flex, flex-direction, justify-content, align-items, gap e flex-wrap.

**Exemplos comentados, na ordem:**

- [01_topbar_com_space_between — Cabeçalho de loja com marca à esquerda e menu à direita (justify-content: space-between)](07_layout_flexbox/exemplos/01_topbar_com_space_between.html)
- [02_fileira_de_cards_com_wrap — Vitrine flexível que quebra linha automaticamente (flex-wrap: wrap e gap)](07_layout_flexbox/exemplos/02_fileira_de_cards_com_wrap.html)
- [03_card_vertical_com_botao_alinhado_na_base — Cartões de mesma altura com botão empurrado para o rodapé (flex-direction: column e margin-top: auto)](07_layout_flexbox/exemplos/03_card_vertical_com_botao_alinhado_na_base.html)
- [04_centralizacao_perfeita_e_badges — Centralização nos dois eixos e alinhamento de ícone + texto](07_layout_flexbox/exemplos/04_centralizacao_perfeita_e_badges.html)

**Exercícios práticos, na ordem:**

- [01_alinhar_cabecalho_flex — Implementar: barra superior com logo, busca e botão de sacola](07_layout_flexbox/exercicios/01_alinhar_cabecalho_flex.html)
- [02_barra_de_filtros_com_gap — Implementar: lista de categorias em linha com flex-wrap e gap](07_layout_flexbox/exercicios/02_barra_de_filtros_com_gap.html)
- [03_cards_com_rodape_alinhado — Implementar: manter o preço e botão sempre na base do cartão](07_layout_flexbox/exercicios/03_cards_com_rodape_alinhado.html)
- [04_resumo_de_pedido_space_between — Implementar: linhas de cupom fiscal com rótulo à esquerda e valor à direita](07_layout_flexbox/exercicios/04_resumo_de_pedido_space_between.html)
- [05_teste_de_mesa_eixos_flex — Teste de mesa Web: identificar eixo principal e transversal no Flexbox](07_layout_flexbox/exercicios/05_teste_de_mesa_eixos_flex.html)
- [06_investigar_itens_espremidos_sem_wrap — Investigar e corrigir: cartões espremidos em uma única linha sem flex-wrap](07_layout_flexbox/exercicios/06_investigar_itens_espremidos_sem_wrap.html)

<a id="08_grid_e_responsividade"></a>

## 08 — Layout em grade com CSS Grid e responsividade (Media Queries)

**Objetivo:** Construir grades bidimensionais com CSS Grid (fr, minmax, auto-fit) e adaptar layouts para celular e desktop com Media Queries (@media).

**Exemplos comentados, na ordem:**

- [01_grade_de_produtos_auto_fit — Grade responsiva automática com repeat(auto-fit, minmax(220px, 1fr))](08_grid_e_responsividade/exemplos/01_grade_de_produtos_auto_fit.html)
- [02_layout_duas_colunas_sidebar_e_main — Layout de página com barra lateral de filtros (240px) e vitrine elástica (1fr)](08_grid_e_responsividade/exemplos/02_layout_duas_colunas_sidebar_e_main.html)
- [03_destaque_com_grid_column_span — Banner promocional ocupando duas colunas da grade (grid-column: span 2)](08_grid_e_responsividade/exemplos/03_destaque_com_grid_column_span.html)
- [04_mobile_first_com_media_queries — Abordagem Mobile-First: 1 coluna no celular e expansão progressiva com @media (min-width)](08_grid_e_responsividade/exemplos/04_mobile_first_com_media_queries.html)

**Exercícios práticos, na ordem:**

- [01_grade_tres_colunas_fr — Implementar: grade de 3 colunas iguais com display: grid e 1fr](08_grid_e_responsividade/exercicios/01_grade_tres_colunas_fr.html)
- [02_grade_fluida_minmax — Implementar: vitrine responsiva sem media query usando auto-fit e minmax](08_grid_e_responsividade/exercicios/02_grade_fluida_minmax.html)
- [03_media_query_empilhar_no_celular — Implementar: empilhar sidebar e conteúdo em telas menores que 680px](08_grid_e_responsividade/exercicios/03_media_query_empilhar_no_celular.html)
- [04_card_destaque_span_2 — Implementar: fazer o cartão principal ocupar 2 colunas na grade](08_grid_e_responsividade/exercicios/04_card_destaque_span_2.html)
- [05_teste_de_mesa_calculo_fr — Teste de mesa Web: distribuição de espaço com a unidade fr](08_grid_e_responsividade/exercicios/05_teste_de_mesa_calculo_fr.html)
- [06_investigar_pagina_sem_meta_viewport — Investigar e corrigir: Media Query ignorada no celular por falta de meta viewport e colunas fixas](08_grid_e_responsividade/exercicios/06_investigar_pagina_sem_meta_viewport.html)

<a id="09_javascript_e_dom"></a>

## 09 — Primeiros passos com JavaScript no navegador e o DOM

**Objetivo:** Compreender a árvore DOM, selecionar elementos com querySelector/querySelectorAll e atualizar textos (textContent), classes (classList) e atributos com segurança.

**Exemplos comentados, na ordem:**

- [01_selecionar_e_alterar_textcontent — Selecionar elementos com querySelector e atualizar o texto com textContent](09_javascript_e_dom/exemplos/01_selecionar_e_alterar_textcontent.html)
- [02_manipular_classes_com_classlist — Alternar estado visual de componentes usando classList (add, remove, toggle)](09_javascript_e_dom/exemplos/02_manipular_classes_com_classlist.html)
- [03_percorrer_elementos_queryselectorall — Percorrer vários elementos com querySelectorAll e forEach](09_javascript_e_dom/exemplos/03_percorrer_elementos_queryselectorall.html)
- [04_atributos_e_dataset — Leitura e atualização de atributos HTML (setAttribute, hidden, disabled e dataset)](09_javascript_e_dom/exemplos/04_atributos_e_dataset.html)

**Exercícios práticos, na ordem:**

- [01_atualizar_painel_via_dom — Implementar: selecionar elementos pelo ID e atualizar textContent](09_javascript_e_dom/exercicios/01_atualizar_painel_via_dom.html)
- [02_destacar_estoque_baixo_classlist — Implementar: aplicar classe .alerta quando o estoque for menor que 5](09_javascript_e_dom/exercicios/02_destacar_estoque_baixo_classlist.html)
- [03_somar_estoque_queryselectorall — Implementar: somar quantidades de todos os itens .item-estoque](09_javascript_e_dom/exercicios/03_somar_estoque_queryselectorall.html)
- [04_desabilitar_botao_sem_estoque — Implementar: desabilitar botão e exibir aviso quando esgotado](09_javascript_e_dom/exercicios/04_desabilitar_botao_sem_estoque.html)
- [05_teste_de_mesa_textcontent_vs_innerhtml — Teste de mesa Web: diferença entre textContent e innerHTML](09_javascript_e_dom/exercicios/05_teste_de_mesa_textcontent_vs_innerhtml.html)
- [06_investigar_seletor_sem_hashtag_e_script_no_topo — Investigar e corrigir: querySelector('aviso') sem # ou .](09_javascript_e_dom/exercicios/06_investigar_seletor_sem_hashtag_e_script_no_topo.html)

<a id="10_eventos_e_interacao"></a>

## 10 — Eventos, leitura de campos e atualização dinâmica da interface

**Objetivo:** Reagir a ações do usuário com addEventListener (click, input, submit), usar event.preventDefault(), ler e converter .value de campos e validar formulários na interface.

**Exemplos comentados, na ordem:**

- [01_evento_click_contador_sacola — Reagir ao clique de botão (addEventListener 'click') atualizando o estado na tela](10_eventos_e_interacao/exemplos/01_evento_click_contador_sacola.html)
- [02_evento_input_calculo_em_tempo_real — Simulador de subtotal em tempo real com o evento 'input'](10_eventos_e_interacao/exemplos/02_evento_input_calculo_em_tempo_real.html)
- [03_submit_e_preventdefault — Interceptar envio de formulário com submit + event.preventDefault() e validar dados](10_eventos_e_interacao/exemplos/03_submit_e_preventdefault.html)
- [04_alternar_detalhes_acessivel — Mostrar/ocultar detalhes de produto atualizando hidden e aria-expanded](10_eventos_e_interacao/exemplos/04_alternar_detalhes_acessivel.html)

**Exercícios práticos, na ordem:**

- [01_botao_reservar_unidade — Implementar: diminuir estoque ao clicar em 'Reservar 1 unidade'](10_eventos_e_interacao/exercicios/01_botao_reservar_unidade.html)
- [02_calculadora_frete_input — Implementar: calcular frete ao alterar o valor do pedido](10_eventos_e_interacao/exercicios/02_calculadora_frete_input.html)
- [03_formulario_validado_com_preventdefault — Implementar: validar quantidade no submit sem recarregar a página](10_eventos_e_interacao/exercicios/03_formulario_validado_com_preventdefault.html)
- [04_contador_de_caracteres_observacao — Implementar: contador de caracteres em tempo real no textarea](10_eventos_e_interacao/exercicios/04_contador_de_caracteres_observacao.html)
- [05_teste_de_mesa_soma_de_input_string — Teste de mesa Web: por que '10' + '5' resulta em '105' no JavaScript?](10_eventos_e_interacao/exercicios/05_teste_de_mesa_soma_de_input_string.html)
- [06_investigar_chamada_imediata_no_addeventlistener — Investigar e corrigir: função executada imediatamente no addEventListener](10_eventos_e_interacao/exercicios/06_investigar_chamada_imediata_no_addeventlistener.html)

<a id="11_elementos_dinamicos_e_storage"></a>

## 11 — Criando elementos dinamicamente e persistência local (localStorage)

**Objetivo:** Criar e inserir elementos no DOM com createElement/append, filtrar listas de produtos na tela e persistir dados no navegador com localStorage e JSON.

**Exemplos comentados, na ordem:**

- [01_criar_item_lista_createelement — Adicionar novos itens à lista de conferência usando document.createElement('li') e append](11_elementos_dinamicos_e_storage/exemplos/01_criar_item_lista_createelement.html)
- [02_renderizar_vitrine_a_partir_de_dados — Renderizar cartões de produtos a partir de uma lista de objetos JavaScript](11_elementos_dinamicos_e_storage/exemplos/02_renderizar_vitrine_a_partir_de_dados.html)
- [03_filtro_de_busca_instantaneo — Filtrar produtos da vitrine ao vivo conforme o usuário digita ou escolhe o setor](11_elementos_dinamicos_e_storage/exemplos/03_filtro_de_busca_instantaneo.html)
- [04_persistencia_com_localstorage — Salvar e recuperar preferência de filial ou sacola com localStorage](11_elementos_dinamicos_e_storage/exemplos/04_persistencia_com_localstorage.html)

**Exercícios práticos, na ordem:**

- [01_adicionar_etiqueta_createelement — Implementar: criar elemento <li> com createElement e inserir na lista](11_elementos_dinamicos_e_storage/exercicios/01_adicionar_etiqueta_createelement.html)
- [02_filtrar_por_setor_select — Implementar: ocultar cartões que não pertencem ao setor selecionado](11_elementos_dinamicos_e_storage/exercicios/02_filtrar_por_setor_select.html)
- [03_remover_item_da_sacola — Implementar: criar item com botão interno 'Remover' que exclui o próprio <li>](11_elementos_dinamicos_e_storage/exercicios/03_remover_item_da_sacola.html)
- [04_salvar_rascunho_localstorage — Implementar: persistir observação do caixa no localStorage](11_elementos_dinamicos_e_storage/exercicios/04_salvar_rascunho_localstorage.html)
- [05_teste_de_mesa_json_localstorage — Teste de mesa Web: por que usar JSON.stringify e JSON.parse no localStorage?](11_elementos_dinamicos_e_storage/exercicios/05_teste_de_mesa_json_localstorage.html)
- [06_investigar_lista_duplicada_a_cada_render — Investigar e corrigir: vitrine duplicando itens por não limpar o container antes de re-renderizar](11_elementos_dinamicos_e_storage/exercicios/06_investigar_lista_duplicada_a_cada_render.html)

<a id="12_projeto_vitrine_blue"></a>

## 12 — Projeto Integrado: Vitrine Interativa Lojas Blue

**Objetivo:** Integrar HTML5 semântico, CSS responsivo (variáveis, Box Model, Flexbox e Grid) e JavaScript (DOM, eventos, filtros, sacola e localStorage) em uma aplicação completa.

**Exemplos comentados, na ordem:**

- [01_estrutura_e_tema_da_vitrine — Etapa 1 do Projeto: estrutura semântica e variáveis de tema claro/escuro](12_projeto_vitrine_blue/exemplos/01_estrutura_e_tema_da_vitrine.html)
- [02_catalogo_com_filtro_e_busca — Etapa 2 do Projeto: catálogo em CSS Grid com busca por texto e filtro por setor](12_projeto_vitrine_blue/exemplos/02_catalogo_com_filtro_e_busca.html)
- [03_sacola_com_subtotal_e_frete — Etapa 3 do Projeto: sacola de compras com cálculo de subtotal e meta de frete grátis](12_projeto_vitrine_blue/exemplos/03_sacola_com_subtotal_e_frete.html)
- [04_vitrine_completa_integrada — Projeto Completo: Vitrine Lojas Blue com busca, filtro, sacola, cupom e persistência](12_projeto_vitrine_blue/exemplos/04_vitrine_completa_integrada.html)

**Exercícios práticos, na ordem:**

- [01_contador_resultados_filtro — Implementar: exibir quantos produtos estão visíveis após filtrar](12_projeto_vitrine_blue/exercicios/01_contador_resultados_filtro.html)
- [02_aplicar_cupom_no_fechamento — Implementar: aplicar 10% de desconto na sacola com o cupom BLUE10](12_projeto_vitrine_blue/exercicios/02_aplicar_cupom_no_fechamento.html)
- [03_barra_progresso_frete_gratis — Implementar: atualizar barra de progresso rumo a R$ 100 de frete grátis](12_projeto_vitrine_blue/exercicios/03_barra_progresso_frete_gratis.html)
- [04_persistir_tema_no_localstorage — Implementar: salvar o tema escolhido (light/dark) no localStorage](12_projeto_vitrine_blue/exercicios/04_persistir_tema_no_localstorage.html)
- [05_teste_de_mesa_fluxo_completo — Teste de mesa Web: rastrear estado da sacola após 3 interações](12_projeto_vitrine_blue/exercicios/05_teste_de_mesa_fluxo_completo.html)
- [06_investigar_cupom_acumulando_desconto_infinito — Investigar e corrigir: botão de cupom aplicando desconto repetidamente sobre o valor já descontado](12_projeto_vitrine_blue/exercicios/06_investigar_cupom_acumulando_desconto_infinito.html)
