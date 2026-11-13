# Testar, exportar e apresentar

## Teste comportamentos, não apenas a abertura
Uma janela que abre não comprova que a partida funciona. Use uma tabela com condição inicial, ação, resultado esperado, resultado observado e decisão. Inclua ganhar, perder, reiniciar e repetir a partida. Registre também uma entrada inesperada: pressionar duas direções, tentar usar a porta cedo ou coletar algo duas vezes.

## Teste com outra pessoa
Observe compreensão do objetivo, legibilidade, controles e feedback. Registre problemas por impacto: impede concluir; confunde a regra; dificulta perceber; acabamento. Corrija primeiro o que bloqueia a experiência. Depois repita o mesmo teste para saber se a mudança resolveu o problema.

Peça uma revisão do conteúdo ao professor do curso escolhido. A validação técnica do Godot não confirma precisão educacional. Se o jogo simplifica uma situação, explique essa simplificação na apresentação e nas instruções quando ela afetar a interpretação.

## Prepare uma entrega reproduzível
Inclua `project.godot`, cenas, scripts, recursos, instruções e créditos. Exclua caches `.godot` do ZIP de código: o editor os recria. Abra uma cópia extraída em outra pasta para conferir se não depende de arquivos externos à pasta do projeto.

## Exportar pelo Godot
1. Abra **Editor → Manage Export Templates** e instale os templates da mesma versão do editor.
2. Abra **Project → Export**, adicione o destino escolhido e confira os avisos.
3. Para Windows, exporte para uma pasta `exportados` e preserve todos os arquivos produzidos, incluindo o pacote de dados quando separado.
4. Para Web, use Compatibility e confira as opções do exportador. O pacote didático não precisa de threads; desative suporte a threads se o destino não oferecer os cabeçalhos necessários.
5. Teste a exportação web por HTTP. Não abra o HTML exportado por duplo clique e conclua que o jogo falhou: o carregamento de recursos exige um servidor.
6. No VS Code, abra um terminal na pasta exportada e execute `python -m http.server 8000` se Python estiver instalado. Acesse `http://localhost:8000`. Encerre com Ctrl+C.

Consulte [exportação de projetos](https://docs.godotengine.org/en/stable/tutorials/export/exporting_projects.html) e [exportação para Web](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html) antes de publicar. Os ZIPs desta trilha contêm projetos-fonte, não executáveis exportados.

## Apresentação final
Mostre uma partida curta, explique a relação com o curso, apresente uma decisão de design e uma melhoria motivada por teste. Cada integrante identifica sua contribuição. Demonstre a versão revisada e mantenha disponível a ficha de validação do conteúdo.

**Entrega:** jogo, código-fonte, instruções, créditos e licenças, proposta atualizada, registro de testes e contribuições. Verifique se uma pessoa externa consegue abrir, começar, concluir e repetir usando apenas suas instruções.
