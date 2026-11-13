# Guia docente — PJE

## Organização
13 cadernos em seis etapas. Ajuste duração à carga horária: estes blocos não pressupõem número fixo de encontros. Pré-requisitos para programação: variáveis, condições e funções; retome com pequenas demonstrações se necessário.

## Rotina sugerida por encontro
10% experimentar e prever; 20% explicar com demonstração; 35% construir; 20% modificar com autonomia; 15% compartilhar e registrar. Essas proporções são sugestões, não tempos obrigatórios.

## Marcos
1. Pesquisa individual: ficha com evidências e apresentação de até três minutos. Reserve categorias antes da pesquisa.
2. Game design: alteração de uma regra e protótipo de papel.
3. Microjogo individual: partida completa e variante justificada.
4. Plataforma: fase individual original com registro de teste.
5. Equipe: proposta vinculada a curso da ETMSL, conteúdo pesquisado e protótipo de papel.
6. Entrega: jogo, código, instruções, créditos, testes e contribuição individual.

## Avaliação sugerida
Pesquisa individual 15%; microjogo 15%; fase autoral 20%; projeto final 35%; processo e contribuição 15%. Divulgue e ajuste esses pesos antes da aplicação. Para cada critério, use quatro níveis: ausente; parcial com ajuda; suficiente e explicado; consistente com revisão por evidência. Evite avaliar apenas estética ou quantidade de recursos.

## Mediação
Peça previsão antes de execução. Quando houver erro, peça ao aluno para apontar estado, evento e primeira divergência. Durante testes, o autor observa antes de explicar. As respostas de pesquisa são abertas: não há gabarito único de classificação.

## Versões e limites técnicos
Godot 4.5.1 Standard; projetos cumulativos com ETAPA no Main.gd. Nós de cenário e HUD são criados por código e aparecem em Remote. Jogador e obstáculo/inimigo têm cenas próprias. Os seguidores são visuais; dano encerra a tentativa; recuperação e segunda fase são extensões. Parallax final usa câmera fixa e autoscroll. Os projetos não incluem arte de jogos comerciais.

## Conferência por caderno

### Investigar: como os jogos funcionam?
- Observar uma decisão: A evidência identifica estado inicial, ação e consequência.
- Comparar sem repetir: As diferenças não se limitam a tema ou aparência.
- Alterar uma regra: Explique uma situação antes e depois.
- Fonte e interpretação: Indique a fonte ou a situação observada.

### Das descobertas ao game design
- Ciclo em cartões: Um colega consegue repetir um ciclo.
- Protótipo de papel: O aplicador das regras não precisa improvisar.
- Comparar restrições: Registre previsão e duas observações.
- Sem pontuação: Explique como o jogador percebe consequências e cria objetivos.

### Godot e VS Code: preparar e entender o ambiente
- Abrir e localizar: Explique diferença entre F5 e F6.
- Editor externo: A mudança aparece ao executar a mesma pasta.
- Investigar erro: Registre arquivo, linha e causa.
- Árvore remota: Identifique um nó criado por código.

### Cenas, nós e o primeiro movimento
- Direção e tempo: Preveja 4 pixels e explique as unidades.
- Margens: O corpo inteiro permanece na tela.
- Velocidade: Registre a hipótese e a observação.
- Cena reutilizável: A mudança de posição de um não altera a do outro.

### Obstáculos, instâncias e sinais
- Intervalo: Explique a quantidade esperada por intervalo.
- Limpeza: Não restam instâncias abaixo do limite.
- Máscaras: Diferencie desenho visível e detecção.
- Nova aparência: A região de contato acompanha o desenho.

### Uma partida completa: início, resultado e reinício
- Nova tentativa: Tempo, posição e objetos voltam ao estado esperado.
- Meta menor: Mensagem e condição devem concordar.
- Curva de dificuldade: Calcule valores aos 10 e 20 segundos.
- Variante autoral: Registre motivo, resultado e revisão.

### Plataformas, gravidade e salto
- Altura alcançável: Registre posição anterior e nova.
- Gravidade: Relacione altura e duração do salto.
- Ação própria: Salto continua limitado ao chão.
- Novo percurso: Demonstre chegar à última sem salto no ar.

### Resgates, porta e condições de vitória
- Porta bloqueada: Apenas três itens permitem vencer.
- Coleta única: A contagem aumenta apenas uma vez.
- Feedback da porta: Não dependa apenas de cor.
- Segunda fase: A primeira cena existe, a segunda carrega e há conclusão definida.

### Seguidores, patrulha e consequências
- Histórico: Não consulte índices inexistentes.
- Distância: Explique por que a distância também depende da velocidade.
- Patrulha: Ele não ultrapassa os limites após inverter.
- Recuperação: Contato contínuo não desconta vida a cada quadro; apresente feedback.

### Screen wrap, câmera e parallax
- Bordas: Y é preservado e x retorna ao intervalo.
- Grupo: A trilha anterior é descartada sem cruzamento diagonal.
- Camadas: Explique a diferença de profundidade percebida.
- Câmera separada: Use scroll_scale no fundo e explique a mudança de coordenadas.

### Projetar uma fase que ensina
- Apresentar: Um colega descobre a ação com as instruções do jogo.
- Variar: É possível explicar o que mudou.
- Combinar: O trecho pode ser concluído com os controles existentes.
- Revisar: Registre problema, alteração e novo resultado.

### Do curso da ETMSL ao protótipo de jogo
- Pesquisar: Separe informação confirmada e pendência.
- Propor: O tema aparece nas ações e consequências.
- Prototipar: Registre a primeira dúvida e a revisão.
- Planejar: Cada tarefa tem responsável e critério de conclusão.

### Testar, exportar e apresentar
- Casos críticos: Registre esperado e observado.
- Créditos: Cada recurso tem origem verificável.
- Exportar: O destinatário abre com suas instruções.
- Apresentar: Cada integrante explica sua contribuição.
