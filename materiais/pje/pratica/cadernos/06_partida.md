# Uma partida completa: início, resultado e reinício

## O jogo precisa saber em que momento está
Na etapa 03, a sequência é espera → jogando → resultado. O botão inicia a partida. Enquanto `jogando` é verdadeiro, o tempo aumenta. Uma colisão encerra com derrota; alcançar 30 segundos encerra com vitória. O botão reaparece e prepara uma tentativa com tempo zerado.

```gdscript
func _process(delta: float) -> void:
    if not jogando:
        return
    tempo += delta
    painel.text = "Tempo: %.1f / 30 s" % tempo
    if tempo >= 30.0:
        terminar("Conseguiu!")
```

Este trecho destaca a contagem; use o arquivo completo do pacote para preservar os controles e as conexões. O teste de tempo só acontece durante a partida. O texto da interface deve informar a condição necessária para vencer.

## Complete o ciclo
Abra a etapa 03 e localize `iniciar`, `perder` e `terminar`. Em `iniciar`, os obstáculos antigos são removidos, o jogador volta à posição inicial, o tempo zera e o Timer começa. Em `terminar`, movimento, geração e contagem param. O controlador atualiza a mensagem e apresenta a nova tentativa.

Uma interface que mostra “fim” sem interromper as regras produz resultados contraditórios: o jogador ainda poderia perder depois de vencer. Por isso a mudança de estado vem antes da apresentação do resultado.

## Dificuldade com uma mudança observável
Na etapa 04, a velocidade do novo obstáculo é `160 + tempo * 3`. Aos 10 segundos, um obstáculo nasce com velocidade 190; aos 20, com 220. Obstáculos já existentes preservam sua velocidade de criação. Essa distinção é importante ao comparar sua previsão com a tela.

Experimente mudar somente o multiplicador. Convide outra pessoa e pergunte em que momento a partida ficou difícil. Registre o tempo observado e a alteração; “mais difícil” sem evidência não ajuda a decidir.

## Roteiro de conferência
1. Na tela inicial, pressione setas: o jogador deve permanecer parado.
2. Inicie, mova e provoque uma colisão: deve aparecer o resultado e a contagem deve parar.
3. Reinicie: tempo e posição devem voltar ao estado inicial.
4. Complete 30 segundos: deve aparecer vitória e os obstáculos devem parar.
5. Repita duas vezes e confira se o número de objetos não acumula entre tentativas.

## Sua primeira autoria
Crie uma variante com uma regra própria: zona segura temporária, objetivo de tempo diferente com justificativa ou dois tipos de obstáculos. Entregue o projeto, uma descrição da regra, previsão do efeito e registro do teste. Preserve uma versão original para comparação.

O percurso foi inspirado na progressão do [primeiro jogo 2D da documentação](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html). O código, as formas e as instruções deste pacote são próprios e simplificados para a disciplina.
