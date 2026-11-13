# Guia docente e gabarito de verificação — DW1

Use a sequência: problema concreto da Vitrine Digital Lojas Blue → inspeção visual → código HTML/CSS/JS curto → simulação ao vivo no caderno → prática nos arquivos `.html` independentes do ZIP.

## 01 (Como a Web funciona e o primeiro documento HTML) — 01_estruturar_boas_vindas
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** A aba do navegador deve exibir 'Lojas Blue · Savassi' e a página deve mostrar o título principal e o parágrafo sem erros de acentuação.

## 01 (Como a Web funciona e o primeiro documento HTML) — 02_configurar_head_completo
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** No DevTools (F12 > Elements), a tag <head> deve conter as três tags <meta> e a tag <title>.

## 01 (Como a Web funciona e o primeiro documento HTML) — 03_organizar_com_comentarios
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Os comentários devem aparecer apenas no código-fonte/DevTools e não no texto visível da página.

## 01 (Como a Web funciona e o primeiro documento HTML) — 04_teste_de_mesa_arvore_dom
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** Os filhos diretos de html são head e body (2); dentro de body há h1, p e p (3 elementos).

## 01 (Como a Web funciona e o primeiro documento HTML) — 05_investigar_titulo_no_lugar_errado
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** <meta> e <title> devem ficar exclusivamente dentro de <head>; <h1> e <p> devem ficar dentro de <body>.

## 01 (Como a Web funciona e o primeiro documento HTML) — 06_investigar_tags_abertas
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** Todas as tags de conteúdo devem abrir e fechar na ordem correta sem aninhamento cruzado.

## 02 (Estrutura de texto e semântica de conteúdo) — 01_hierarquia_setores
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Não pule níveis de título (não passe de h1 direto para h4).

## 02 (Estrutura de texto e semântica de conteúdo) — 02_aviso_com_strong_e_em
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Use tags semânticas (strong, em, code) em vez de tags puramente visuais como b ou i.

## 02 (Estrutura de texto e semântica de conteúdo) — 03_listas_de_procedimento
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Cada item deve estar dentro de um elemento <li> filho direto de <ul> ou <ol>.

## 02 (Estrutura de texto e semântica de conteúdo) — 04_ficha_produto_dl
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** A estrutura deve usar <dl> contendo pares <dt> (termo) e <dd> (descrição).

## 02 (Estrutura de texto e semântica de conteúdo) — 05_teste_de_mesa_outline
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** A contagem correta é 2 elementos h2 e 3 elementos h3.

## 02 (Estrutura de texto e semântica de conteúdo) — 06_investigar_falsa_lista_com_br
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** Não deve restar nenhum <br> para separar itens de lista nem salto de <h1> para <h4>.

## 03 (Marcos semânticos de página, links e imagens) — 01_estruturar_landmarks
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** O documento deve possuir apenas um <main> visível e regiões semânticas bem delimitadas.

## 03 (Marcos semânticos de página, links e imagens) — 02_menu_de_ancoras
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Clicar em cada link deve rolar/apontar exatamente para a seção de mesmo id.

## 03 (Marcos semânticos de página, links e imagens) — 03_figure_acessivel
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Toda imagem informativa precisa de um atributo alt significativo.

## 03 (Marcos semânticos de página, links e imagens) — 04_articles_de_produtos
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Use <article> para cada item autônomo do catálogo.

## 03 (Marcos semânticos de página, links e imagens) — 05_teste_de_mesa_caminhos_relativos
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** Para subir um nível usa-se '../': '../index.html' e '../arquivos/pacote.zip'.

## 03 (Marcos semânticos de página, links e imagens) — 06_investigar_div_soup_e_links_vagos
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** Links nunca devem se chamar apenas 'clique aqui' e toda imagem precisa de alt.

## 04 (Tabelas de dados e formulários de entrada) — 01_tabela_comparativa_filiais
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Use <th scope="col"> nos cabeçalhos de coluna.

## 04 (Tabelas de dados e formulários de entrada) — 02_formulario_consulta_preco
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Clicar no texto do <label> deve focar automaticamente o <input> correspondente.

## 04 (Tabelas de dados e formulários de entrada) — 03_triagem_com_select_e_radio
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Os dois botões de rádio devem compartilhar exatamente o mesmo atributo name="prioridade" para que apenas um possa ser marcado por vez.

## 04 (Tabelas de dados e formulários de entrada) — 04_regras_de_validacao_nativa
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** O navegador deve impedir o envio caso o e-mail seja inválido ou a nota esteja fora de 0..10.

## 04 (Tabelas de dados e formulários de entrada) — 05_teste_de_mesa_radio_e_name
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** Com atributos name diferentes, eles não formam um grupo mutuamente exclusivo e os três ficam marcados ao mesmo tempo.

## 04 (Tabelas de dados e formulários de entrada) — 06_investigar_inputs_sem_label
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** Placeholders desaparecem ao digitar e não substituem <label>.

## 05 (Introdução ao CSS: seletores, cascata e tipografia) — 01_estilizar_catalogo_por_classes
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Prefira classes reutilizáveis (.cartao, .esgotado) em vez de estilizar IDs individuais.

## 05 (Introdução ao CSS: seletores, cascata e tipografia) — 02_criar_tema_com_variaveis
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Nenhuma cor hexadecimal deve ficar duplicada fora do :root.

## 05 (Introdução ao CSS: seletores, cascata e tipografia) — 03_ajustar_tipografia_editorial
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** O texto principal deve ficar fácil de ler e contido em até 65ch.

## 05 (Introdução ao CSS: seletores, cascata e tipografia) — 04_combinadores_descendente_e_filho
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Links fora de .menu devem continuar sublinhados para acessibilidade.

## 05 (Introdução ao CSS: seletores, cascata e tipografia) — 05_teste_de_mesa_especificidade
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** A cor exibida será green, pois 1 seletor de ID (1,0,0) vence 2 classes (0,2,0) e 1 tag (0,0,1).

## 05 (Introdução ao CSS: seletores, cascata e tipografia) — 06_investigar_baixo_contraste_e_important
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** O texto deve ser perfeitamente legível e sem nenhum !important.

## 06 (Modelo de Caixa (Box Model), dimensões e posicionamento) — 01_aplicar_border_box_e_espacamento
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** O texto não pode ficar colado na borda do cartão.

## 06 (Modelo de Caixa (Box Model), dimensões e posicionamento) — 02_badges_com_inline_block
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Os links devem aceitar padding vertical sem sobrepor os elementos vizinhos.

## 06 (Modelo de Caixa (Box Model), dimensões e posicionamento) — 03_centralizar_container_com_margin_auto
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Em telas largas, o container fica no centro; em telas estreitas, encolhe suavemente sem gerar barra de rolagem horizontal.

## 06 (Modelo de Caixa (Box Model), dimensões e posicionamento) — 04_unidades_rem_e_porcentagem
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** O cartão deve respeitar o tamanho de fonte padrão do navegador do usuário.

## 06 (Modelo de Caixa (Box Model), dimensões e posicionamento) — 05_teste_de_mesa_calculo_largura
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** No content-box: 200 + 15*2 + 3*2 = 236px. No border-box: 200px.

## 06 (Modelo de Caixa (Box Model), dimensões e posicionamento) — 06_investigar_estouro_de_largura_100
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** A página não deve ter rolagem horizontal.

## 07 (Layout moderno com Flexbox) — 01_alinhar_cabecalho_flex
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Os três elementos filhos devem ficar alinhados na mesma linha horizontal.

## 07 (Layout moderno com Flexbox) — 02_barra_de_filtros_com_gap
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Ao estreitar a janela, os botões de categoria devem quebrar para a linha de baixo sem se sobrepor.

## 07 (Layout moderno com Flexbox) — 03_cards_com_rodape_alinhado
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Mesmo com textos de tamanhos diferentes, os rodapés dos cartões devem terminar alinhados na mesma altura.

## 07 (Layout moderno com Flexbox) — 04_resumo_de_pedido_space_between
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Cada .linha-cupom deve mostrar o nome à esquerda e o valor alinhado à direita.

## 07 (Layout moderno com Flexbox) — 05_teste_de_mesa_eixos_flex
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** Em column, o eixo principal é vertical (controlado por justify-content) e o eixo transversal é horizontal (controlado por align-items).

## 07 (Layout moderno com Flexbox) — 06_investigar_itens_espremidos_sem_wrap
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** Os cartões devem quebrar em múltiplas linhas sem gerar rolagem horizontal.

## 08 (Layout em grade com CSS Grid e responsividade (Media Queries)) — 01_grade_tres_colunas_fr
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Os 6 setores devem ficar organizados em 2 linhas de 3 colunas.

## 08 (Layout em grade com CSS Grid e responsividade (Media Queries)) — 02_grade_fluida_minmax
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Os cartões devem se reorganizar sozinhos ao redimensionar a largura da página.

## 08 (Layout em grade com CSS Grid e responsividade (Media Queries)) — 03_media_query_empilhar_no_celular
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Abaixo de 680px de largura, o menu lateral e o conteúdo principal devem ficar em uma única coluna.

## 08 (Layout em grade com CSS Grid e responsividade (Media Queries)) — 04_card_destaque_span_2
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** O primeiro bloco deve ocupar a largura de duas colunas.

## 08 (Layout em grade com CSS Grid e responsividade (Media Queries)) — 05_teste_de_mesa_calculo_fr
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** O espaço é dividido em 3 partes iguais (1 + 2 = 3): a 1ª coluna recebe 300px e a 2ª coluna recebe 600px.

## 08 (Layout em grade com CSS Grid e responsividade (Media Queries)) — 06_investigar_pagina_sem_meta_viewport
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** A página não pode ter 1200px fixos nem faltar a meta viewport.

## 09 (Primeiros passos com JavaScript no navegador e o DOM) — 01_atualizar_painel_via_dom
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Use textContent para alterar o texto com segurança.

## 09 (Primeiros passos com JavaScript no navegador e o DOM) — 02_destacar_estoque_baixo_classlist
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Para data-estoque="3", o cartão deve receber a classe .alerta.

## 09 (Primeiros passos com JavaScript no navegador e o DOM) — 03_somar_estoque_queryselectorall
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Para 10, 15 e 5, #total-unidades deve exibir 30.

## 09 (Primeiros passos com JavaScript no navegador e o DOM) — 04_desabilitar_botao_sem_estoque
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** O botão #btn-reservar deve ficar desabilitado (disabled) e com o texto 'Indisponível'.

## 09 (Primeiros passos com JavaScript no navegador e o DOM) — 05_teste_de_mesa_textcontent_vs_innerhtml
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** textContent exibe os caracteres literais '<strong>Oferta</strong>' sem interpretá-los como HTML, evitando injeção de scripts (XSS).

## 09 (Primeiros passos com JavaScript no navegador e o DOM) — 06_investigar_seletor_sem_hashtag_e_script_no_topo
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** querySelector usa sintaxe de seletor CSS: '#id' para ID e '.classe' para classe.

## 10 (Eventos, leitura de campos e atualização dinâmica da interface) — 01_botao_reservar_unidade
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Quando estoque chegar a 0, não deve ficar negativo.

## 10 (Eventos, leitura de campos e atualização dinâmica da interface) — 02_calculadora_frete_input
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Para 100 ou mais deve exibir 'Frete Grátis'; para 99 deve exibir 'Frete: R$ 15,00'.

## 10 (Eventos, leitura de campos e atualização dinâmica da interface) — 03_formulario_validado_com_preventdefault
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** A página não deve recarregar ao enviar o formulário.

## 10 (Eventos, leitura de campos e atualização dinâmica da interface) — 04_contador_de_caracteres_observacao
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Ao digitar 'Entrega manhã', #contagem deve atualizar imediatamente para 13.

## 10 (Eventos, leitura de campos e atualização dinâmica da interface) — 05_teste_de_mesa_soma_de_input_string
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** O resultado é a string '105', porque campo.value sempre retorna uma string e o operador + com string realiza concatenação.

## 10 (Eventos, leitura de campos e atualização dinâmica da interface) — 06_investigar_chamada_imediata_no_addeventlistener
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** O texto só deve mudar quando o usuário clicar no botão.

## 11 (Criando elementos dinamicamente e persistência local (localStorage)) — 01_adicionar_etiqueta_createelement
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Não adicione itens vazios se o campo estiver em branco.

## 11 (Criando elementos dinamicamente e persistência local (localStorage)) — 02_filtrar_por_setor_select
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Selecionar 'higiene' deve deixar apenas os itens de higiene visíveis.

## 11 (Criando elementos dinamicamente e persistência local (localStorage)) — 03_remover_item_da_sacola
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Clicar no botão 'Remover' deve retirar apenas a linha correspondente do DOM.

## 11 (Criando elementos dinamicamente e persistência local (localStorage)) — 04_salvar_rascunho_localstorage
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Recarregar a página deve preservar o texto digitado em #anotacao.

## 11 (Criando elementos dinamicamente e persistência local (localStorage)) — 05_teste_de_mesa_json_localstorage
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** localStorage armazena apenas strings; sem JSON.stringify, o objeto é convertido na string inútil '[object Object]'.

## 11 (Criando elementos dinamicamente e persistência local (localStorage)) — 06_investigar_lista_duplicada_a_cada_render
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** Clicar várias vezes em 'Atualizar' deve manter apenas 2 itens na lista, sem duplicatas.

## 12 (Projeto Integrado: Vitrine Interativa Lojas Blue) — 01_contador_resultados_filtro
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Ao buscar um termo que corresponda a 1 produto, deve exibir 'Mostrando 1 produtos'.

## 12 (Projeto Integrado: Vitrine Interativa Lojas Blue) — 02_aplicar_cupom_no_fechamento
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Use event.preventDefault() e valide o código ignorando espaços extras.

## 12 (Projeto Integrado: Vitrine Interativa Lojas Blue) — 03_barra_progresso_frete_gratis
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Se subtotal >= 100, a barra deve ficar em 100 e o texto deve confirmar frete grátis.

## 12 (Projeto Integrado: Vitrine Interativa Lojas Blue) — 04_persistir_tema_no_localstorage
- **Tipo:** Implementar e estruturar
- **Verificação esperada:** Ao recarregar a página, o tema salvo deve ser reaplicado.

## 12 (Projeto Integrado: Vitrine Interativa Lojas Blue) — 05_teste_de_mesa_fluxo_completo
- **Tipo:** Teste de mesa Web (inspecionar e prever)
- **Verificação esperada:** Bruto = 85; líquido com 10% OFF = R$ 76,50; como 76,50 < 100, ainda não há frete grátis.

## 12 (Projeto Integrado: Vitrine Interativa Lojas Blue) — 06_investigar_cupom_acumulando_desconto_infinito
- **Tipo:** Investigar e corrigir (debug)
- **Verificação esperada:** O cupom só pode conceder 10% de desconto uma única vez.

