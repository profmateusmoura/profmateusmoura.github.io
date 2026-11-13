# Screen wrap, câmera e parallax

## Sair à direita e entrar à esquerda
Na etapa 04, o espaço horizontal forma um ciclo. Quando o centro do personagem sai do intervalo [0, 960), ele reaparece na outra borda. Isso é screen wrap. A altura permanece igual. O corpo visual pode ficar parcialmente fora da tela até seu centro ultrapassar o limite; essa é a regra adotada no exemplo.

```gdscript
if position.x < 0.0 or position.x >= 960.0:
    position.x = wrapf(position.x, 0.0, 960.0)
    atravessou_borda.emit()
```

Não aplique wrap vertical automaticamente. Em um jogo de plataformas, cair pode ter outra consequência. Escolha quais entidades atravessam: neste projeto, apenas o jogador e seu grupo. O inimigo mantém a patrulha entre os próprios limites.

## O que acontece com a trilha?
Um histórico que liga x=959 a x=1 faria os seguidores usarem posições dos dois lados. Nosso sinal limpa a trilha e reposiciona os seguidores junto ao jogador. A fila volta a se formar depois. É uma escolha de design explícita; outra possibilidade seria guardar coordenadas contínuas de um mundo circular.

Use o laboratório visual para prever a posição após atravessar. Depois compare com a etapa 04 do projeto e teste as duas bordas, inclusive durante um salto.

## Parallax é movimento relativo
Quando camadas se movem em velocidades diferentes, percebemos profundidade. Na etapa 05 há dois `Parallax2D`: montanhas distantes com velocidade -8 e próximas com -22 pixels por segundo. A câmera fica parada. O efeito usa `autoscroll`, portanto o fundo se move mesmo que o personagem pare.

```gdscript
longe.autoscroll = Vector2(-8, 0)
longe.repeat_size = Vector2(960, 0)
longe.ignore_camera_scroll = true
```

Cada camada possui um Sprite2D com imagem de 960 × 540. `repeat_size.x` corresponde à largura da textura; o eixo y igual a zero não se repete. Observe as emendas. Uma imagem com bordas incompatíveis revela saltos mesmo com a configuração correta.

## Uma câmera que acompanha é outra experiência
Como experimento separado, crie um cenário mais largo e adicione Camera2D ao jogador. Nesse caso, o fundo pode usar `ignore_camera_scroll = false`, `autoscroll = Vector2.ZERO` e `scroll_scale = Vector2(0.25, 1)` na camada distante. A câmera se move, e a camada acompanha parcialmente. Consulte [Parallax2D](https://docs.godotengine.org/en/stable/classes/class_parallax2d.html) para essas propriedades.

Não combine imediatamente câmera seguindo e wrap por largura da tela: as coordenadas do mundo deixam de coincidir com a borda visível. Primeiro defina se o ciclo pertence a uma arena fixa ou a limites do mundo. Depois decida como reposicionar a câmera quando o jogador atravessa.

## Desafio autoral
Escolha uma fase de arena com wrap ou um cenário longo com câmera. Explique a escolha, desenhe as camadas e indique o comportamento esperado na borda. Teste com os seguidores e registre qualquer salto visual. No pacote final, a arena fixa com fundo automático é a referência executável.
