## Por que mudar o tipo do jogador?
No microjogo, detectar uma sobreposição era suficiente. Agora o personagem precisa parar no chão e deslizar junto às superfícies. Usamos `CharacterBody2D`; o cenário usa `StaticBody2D`. O desenho e a forma de colisão continuam sendo componentes diferentes.

Abra `03_plataforma/etapa_01`. O projeto é autoral, inspirado na ideia de resgate em plataformas de Flicky. Os quadrados facilitam observar regras sem depender de recursos visuais externos.

## Leia o cenário em execução
Main cria chão e três plataformas pela função `plataforma(pos, tamanho)`. Cada corpo recebe uma RectangleShape2D e um Polygon2D do mesmo tamanho. No editor, execute e abra a árvore Remote para selecionar esses corpos. Para construir manualmente uma nova plataforma, adicione StaticBody2D, CollisionShape2D retangular e desenho; deixe camada 1 ativa.

O jogador usa camada 2 e máscara 1. Assim o cenário bloqueia o corpo, enquanto as áreas de coleta poderão observar a camada do jogador sem bloquear seu caminho.

## Velocidade horizontal e aceleração vertical
```gdscript
velocity.x = Input.get_axis("ui_left", "ui_right") * velocidade
if not is_on_floor():
    velocity.y += gravidade * delta
if Input.is_action_just_pressed("ui_accept") and is_on_floor():
    velocity.y = impulso
move_and_slide()
```

O eixo horizontal retorna -1, 0 ou 1. A gravidade aumenta a velocidade vertical ao longo do tempo. Para subir, o impulso é negativo, pois o eixo y cresce para baixo. `is_on_floor()` informa o contato do movimento físico anterior. `move_and_slide()` usa `velocity` e trata o deslocamento e as colisões: não multiplique novamente `velocity` por delta ao passá-la ao método.

O código fica em `_physics_process`, que acompanha os passos da simulação física. A tecla Espaço está associada à ação interna `ui_accept`. Você poderá criar uma ação `saltar` no Input Map em uma variante, mas deverá trocar também o nome no script.

## Faça uma previsão quantitativa
Com impulso -470 e gravidade 1100, uma estimativa ideal para a altura é v²/(2g), aproximadamente 100 pixels. A simulação discreta e a forma do corpo alteram o resultado exato. As plataformas do exemplo foram separadas para permitir o percurso; não aumente sua altura sem rever o salto.

## Experimente com propósito
Faça três versões: gravidade maior; impulso de maior intensidade; velocidade horizontal menor. Altere um valor por vez. Para cada versão, registre se chega à primeira e à segunda plataforma. Explique por que “saltar mais alto” e “permanecer mais tempo no ar” mudam o controle da fase.

**Conferência:** não pode saltar repetidamente no ar; não atravessa o chão; deve alcançar as plataformas. Se cair através delas, confira máscaras e CollisionShape2D antes de mexer na gravidade.