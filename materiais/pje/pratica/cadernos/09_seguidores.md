# Seguidores, patrulha e consequências

## Seguir o caminho exige memória
Se um seguidor recebe a posição atual do jogador, os dois ficam sobrepostos. Para criar distância, guardamos posições anteriores. `historico` é uma lista cujo primeiro elemento representa a posição mais recente. Cada seguidor consulta um ponto um pouco mais antigo.

```gdscript
historico.push_front(jogador.position)
if historico.size() > 120:
    historico.pop_back()
for i in range(seguidores.size()):
    var indice := mini((i + 1) * 12, historico.size() - 1)
    seguidores[i].position = historico[indice]
```

O limite de 120 impede crescimento indefinido. `mini` evita acessar um índice que ainda não existe. Esse trecho só é executado depois de registrar pelo menos uma posição. Os seguidores são visuais: não têm colisão própria e podem sobrepor cenários. Esse é um modelo inicial, adequado para estudar histórico; uma fila com corpos físicos exigiria outras regras.

## Confira a árvore e os dados
Abra a etapa 03, resgate um item e observe o seguidor. Pare o jogador: a fila gradualmente se aproxima porque as posições paradas continuam sendo registradas. Troque o espaçamento de 12 para 20 amostras e explique a diferença. A distância depende também da velocidade de deslocamento e da frequência física.

## Patrulhar é alternar direção
O inimigo soma `sentido * velocidade * delta` à posição x. Ao alcançar um limite, fixa a posição no limite e inverte o sentido. Os limites precisam estar em ordem e cobrir uma superfície sem buracos. No exemplo, ele percorre o chão entre x=320 e x=700.

O contato do inimigo com o jogador encerra a tentativa. Não há vidas ou invulnerabilidade nesta versão. O botão prepara uma nova cena, e um segundo clique inicia a partida. Esse fluxo preserva um estado inicial previsível.

## Amplie com estados
Para acrescentar recuperação, descreva antes a sequência vulnerável → atingido → invulnerável → vulnerável. Um Timer pode encerrar a invulnerabilidade. A regra de dano deve consultar o estado, e o feedback deve mostrar por que um contato temporariamente não produz dano.

Evite descontar uma vida em cada quadro de contato. Use o evento e bloqueie novo dano pelo estado ou temporizador. O desafio pede tanto a regra quanto sua comunicação.

## Entrega
Desenhe uma tabela com cinco posições do jogador e a posição consultada por um seguidor. Depois implemente uma variante de patrulha ou recuperação e registre um teste em que o contato contínuo não produz consequências repetidas indevidas.
