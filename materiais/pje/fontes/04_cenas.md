## Uma cena é uma composição
Um jogador tem aparência, posição e uma região de contato. No microjogo, o nó raiz é `Area2D`, que detecta sobreposições. Um `Polygon2D` desenha o quadrado e um `CollisionShape2D` define a área física. O desenho, sozinho, não cria colisão.

```text
Jogador (Area2D) — script Jogador.gd
├── Forma (Polygon2D) — aparência
└── Colisao (CollisionShape2D) — RectangleShape2D
```

## Monte a cena no editor
Trabalhe em uma cópia da etapa 01. Abra `Jogador.tscn` e compare com a árvore acima. Para reconstruir, crie uma nova cena com raiz Area2D, renomeie para Jogador e adicione os filhos. Em Polygon2D, desenhe um quadrado próximo da origem; em CollisionShape2D, crie RectangleShape2D com tamanho 26 × 30. Centralize desenho e colisão em (0, 0). Salve como Jogador.tscn.

Em Collision, deixe a camada 1 e a máscara 2. A camada informa onde o objeto está; a máscara informa o que ele observa. Anexe o script `Jogador.gd` fornecido no pacote. Abra Main e execute com F5: é Main que instancia o jogador e posiciona a interface.

## O movimento em pequenas partes
```gdscript
var direcao := Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
position += direcao * velocidade * delta
position = position.clamp(Vector2(18, 18), Vector2(942, 522))
```

`Input.get_vector` reúne as quatro ações em um vetor. Sem tecla, o resultado é zero. Para a direita, x é positivo; para cima, y é negativo. O método limita a intensidade para que a diagonal não produza uma velocidade maior.

Velocidade é medida aqui em pixels por segundo. `delta` é o intervalo desde a atualização anterior. Com velocidade 260 e intervalo de 0,02 s, o deslocamento é 5,2 pixels. Multiplicar pelo tempo aproxima o comportamento em máquinas com frequências de atualização diferentes.

O último comando limita a posição do centro. As margens preservam o corpo dentro da tela de 960 × 540. Se o personagem aumentar de tamanho, reavalie essas margens.

## Leia o script completo
`extends Area2D` define o tipo do nó que receberá o script. `@export` deixa a velocidade ajustável no Inspetor. `ativo` controla se o personagem responde. `_process(delta)` é chamado repetidamente. `return` encerra a função naquele instante; não fecha o jogo.

Quando a partida inicia, Main muda `ativo` para verdadeiro. Antes disso, a interface está no estado de espera. Essa separação evita que o personagem se mova atrás do menu.

## Preveja, execute, altere
Antes de executar, calcule o deslocamento esperado com velocidades 130 e 260 durante um segundo. Depois observe sem exigir exatidão manual de cronômetro. Altere a cor no Inspetor e a velocidade no script. Identifique qual mudança afeta a apresentação e qual afeta a dificuldade.

**Conferência:** o personagem responde às quatro setas, não sai da tela e não se move antes de Iniciar. Se a colisão ficar deslocada, confira a posição dos filhos da cena.