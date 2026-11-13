## O que vamos usar
A referência desta trilha é **Godot 4.5.1 Standard**, com GDScript e renderizador Compatibility. Não é necessário instalar a edição .NET. GDScript tem semelhanças visuais com Python, mas é outra linguagem: arquivos, tipos e funções deste curso pertencem ao Godot.

Baixe o editor no [arquivo oficial de versões](https://godotengine.org/download/archive/4.5.1-stable/). Extraia o executável para uma pasta de ferramentas. Não execute o projeto dentro do ZIP. Extraia também o pacote de prática de PJE.

## Importe a primeira etapa
1. Abra o gerenciador de projetos do Godot e escolha **Importar / Import**.
2. Localize `02_microjogo/etapa_01/project.godot` no pacote extraído.
3. Abra o projeto e aguarde a importação. Abra `Main.tscn` pelo painel de arquivos.
4. Pressione **F5** para executar o projeto. Clique em Iniciar e use as setas.
5. Pare com **F8**. F6 executa somente a cena aberta, o que pode produzir um resultado diferente de F5.

## Leia a interface como uma oficina
O painel de arquivos guarda cenas, scripts e imagens. A árvore **Scene / Cena** mostra os nós da cena aberta. O **Inspector / Inspetor** edita propriedades do nó selecionado. A área central mostra o espaço 2D. O painel inferior **Output / Saída** e **Debugger / Depurador** apresenta mensagens e erros.

Durante a execução, escolha **Remote / Remoto** na árvore de cenas. Nossos exemplos criam parte da interface e do cenário por código: esses nós aparecem na árvore remota, não na cena salva. Pare a execução antes de alterar o arquivo original. Uma mudança feita apenas em um nó remoto normalmente desaparece ao encerrar a partida.

## Integre o VS Code
1. Instale o VS Code e a extensão **Godot Tools**, identificador `geequlim.godot-tools`.
2. Abra a pasta que contém `project.godot` no VS Code. O ZIP inclui a recomendação da extensão em `.vscode/extensions.json`.
3. No Godot, abra **Editor → Editor Settings → Text Editor → External** (Editor → Configurações do editor → Editor de texto → Externo; os rótulos variam conforme o idioma).
4. Ative **Use External Editor**. No Windows, indique `code.cmd`, normalmente dentro da pasta `bin` da instalação do VS Code.
5. Confira os argumentos: `{project} --goto {file}:{line}:{col}`. Godot 4.5 pode detectá-los automaticamente.
6. Em **Text Editor → Behavior**, ative **Auto Reload Scripts on External Change**.
7. Mantenha o projeto aberto no Godot para a integração de linguagem. Dê dois cliques em `Jogador.gd`: ele deve abrir no VS Code.

Salve uma alteração em `velocidade`, volte ao Godot e execute. Se nada mudar, confirme que abriu a mesma pasta nos dois programas. Se não houver sugestões de código, confira a extensão, o projeto aberto e as portas configuradas. Os padrões documentados são 6005 para linguagem e 6006 para depuração.

## Primeiro diagnóstico
Escreva `print("Olá, PJE")` dentro de `_ready()` em uma cópia do projeto. Confira a saída ao iniciar. Depois remova temporariamente um parêntese, observe a mensagem e restaure o código. O objetivo é localizar arquivo, linha e descrição do erro, não decorar mensagens.

**Fonte de configuração:** [editor externo na documentação oficial](https://docs.godotengine.org/en/stable/tutorials/editor/external_editor.html). Este caderno é uma orientação autoral em português; não é uma tradução integral da documentação.