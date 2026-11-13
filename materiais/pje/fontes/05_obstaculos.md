## Da cena guardada ao objeto em jogo
Abra `02_microjogo/etapa_02`. A cena `Obstaculo.tscn` descreve um modelo; cada chamada de `instantiate()` produz um novo objeto. Alterar a posição de um deles não move os demais.

```gdscript
const OBSTACULO = preload("res://Obstaculo.tscn")
var item := OBSTACULO.instantiate()
item.position = Vector2(randf_range(24, 936), -25)
add_child(item)
```

`res://` começa na pasta do projeto. `preload` carrega o recurso ao carregar o script. O objeto aparece na árvore quando é adicionado. Sua posição inicial fica acima da tela; ele passa a entrar pelo topo durante o movimento.

## Use o tempo como evento
Main cria um Timer com `wait_time = 0.8`. O sinal `timeout` chama `criar_obstaculo`. O Timer só começa quando a partida inicia. Compare intervalos de 0,8 e 1,6 segundo: o intervalo maior cria menos obstáculos no mesmo período, mantendo as demais condições.

Abra Main.gd e localize criação, conexão e início do Timer. Em seguida execute e observe a árvore remota. Não crie um obstáculo a cada `_process`: isso vincularia a quantidade à frequência de quadros.

## Faça o obstáculo atravessar a tela
```gdscript
func _process(delta: float) -> void:
    position.y += velocidade * delta
    if position.y > 580:
        queue_free()
```

Y aumenta para baixo. Ao ultrapassar o limite inferior, `queue_free()` agenda a remoção do nó e de seus filhos. Observe a quantidade de obstáculos na árvore remota depois de um minuto. Ela deve variar, sem crescer continuamente por objetos que já saíram.

## Um sinal informa o acontecimento
O jogador conecta `area_entered` a `_ao_tocar`. Quando detecta uma área de obstáculo, emite seu sinal `atingido`. Main decide a consequência. O jogador sabe que houve contato; a regra de fim da partida pertence ao controlador.

Camadas desta atividade: jogador na camada 1, observando 2; obstáculo na camada 2, sem observar outra camada. Apenas o jogador precisa detectar o evento. Confira que ambos possuem CollisionShape2D com uma forma definida.

Na etapa 02, a colisão ainda não encerra a partida: o controlador reativa o jogador. Isso permite estudar surgimento e detecção antes de introduzir vitória e derrota. Na etapa 03, o mesmo sinal terá consequência visível.

## Exercício de investigação
Pare o jogo, altere a máscara do jogador para nenhuma camada e execute. Explique por que o desenho continua visível mesmo que a detecção deixe de funcionar. Restaure a máscara antes de avançar. Registre um desenho da relação cena → instância → sinal → controlador.