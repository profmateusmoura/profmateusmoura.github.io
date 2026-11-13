# Resgates, porta e condições de vitória

## Objetos que informam sem bloquear
Na etapa 02 da plataforma, os quadrados amarelos e a porta são `Area2D`. Eles observam a camada 2, onde está o jogador, e não têm camada física própria. O sinal usado é `body_entered`, porque o jogador agora é um corpo, não uma Area2D.

Compare com o microjogo: ali se usava `area_entered`. A escolha do sinal depende do tipo detectado. Um sinal correto com a máscara errada também não dispara; investigue as duas partes.

## Conte cada resgate uma vez
```gdscript
if corpo != jogador or not jogando or item.has_meta("coletado"):
    return
item.set_meta("coletado", true)
item.set_deferred("monitoring", false)
item.hide()
coletados += 1
```

A verificação evita contar corpos diferentes, contatos fora da partida e o mesmo item repetido. `set_deferred` agenda a mudança de monitoramento para um momento adequado do processamento de física. Esconder o desenho não remove automaticamente sua colisão.

## Uma porta com uma regra clara
A porta da trilha é uma saída de fase, não um portal que teletransporta. Para vencer, o jogador precisa resgatar três itens e entrar na área da porta. No pacote, a conclusão apresenta uma mensagem. A troca real de cena será um exercício de extensão.

```gdscript
if corpo == jogador and jogando and coletados == 3:
    terminar("Resgate concluído!")
```

Para criar outra fase, salve uma cópia de Main.tscn com outro cenário e use `get_tree().change_scene_to_file("res://Fase2.tscn")` quando a condição for satisfeita. Esse caminho só funciona depois que Fase2.tscn existir. Defina também o que acontece no fim da última fase.

## Comunique a condição
Uma porta verde pode parecer aberta mesmo antes dos resgates. Por isso a interface deve mostrar a condição. Melhore o exemplo com rótulo persistente “saída: 2/3”, cadeado desenhado ou mudança de aparência acompanhada de texto. Não use apenas cor para comunicar aberto e fechado.

## Teste os limites
Entre na porta com zero, dois e três resgates. Volte à posição de um item coletado: a contagem não deve aumentar novamente. Depois tente entrar antes de iniciar a partida. Para cada caso, escreva a previsão e o resultado.

**Entrega:** um diagrama de estados da porta e uma melhoria de feedback. Use estados bloqueada e liberada, identifique o evento que produz a mudança e explique quando a vitória ocorre.
