# Projetar uma fase que ensina

## O cenário também explica
Uma plataforma baixa pode ensinar o salto antes de haver um inimigo. Um resgate visível orienta o próximo movimento. Uma saída distante dá direção. Level design organiza essas situações no espaço e no tempo.

Sua fase individual terá três momentos: apresentação segura, prática com variação e combinação de desafios. Desenhe primeiro. Para cada obstáculo, escreva o que o jogador já precisa saber. Se uma ação inédita aparece junto de punição forte, talvez não haja oportunidade de aprender.

## Faça um esboço funcional
Desenhe chão, plataformas, resgates, perigo e porta em uma grade de 960 × 540. Use medidas coerentes com o salto. Marque a rota esperada e uma rota alternativa. Indique onde o jogador pode parar para observar.

Monte a fase alterando posições e tamanhos na função de criação de cenário. Execute após cada pequena mudança. Uma fase que parece possível no papel pode exigir uma altura ou distância que o personagem não alcança.

## Aparência que ajuda a decidir
Separe objetos interativos do fundo por contraste e forma. Mantenha texto legível no tamanho real da janela. Além da cor, use símbolos ou rótulos para perigo e saída. Uma animação de coleta deve confirmar a ação sem esconder a próxima decisão.

Para acrescentar animação no Godot, use AnimationPlayer e crie uma faixa de propriedade em um nó visual. Anime escala ou modulação do desenho, preservando o corpo físico se não quiser mudar a colisão. Teste o estado inicial ao repetir a animação. Para som, adicione AudioStreamPlayer, atribua um recurso de áudio com licença adequada e chame `play()` no evento. Registre autoria e licença nos créditos.

## Observe sem ensinar durante o teste
Convide um colega que ainda não viu sua fase. Diga apenas os controles que o próprio jogo apresenta. Anote onde ele hesita, erra ou pede ajuda. Não explique a solução enquanto ele joga; a dúvida é uma evidência útil.

Depois pergunte: “O que você achou que deveria fazer?” e “O que indicou isso?”. Evite perguntas que sugerem a resposta, como “Você percebeu que a porta precisava de três itens?”.

## Entrega individual
Entregue desenho, projeto executável, créditos, três observações do teste e duas alterações justificadas. A fase deve iniciar, permitir concluir e oferecer nova tentativa. A avaliação considera clareza, funcionamento e revisão, não quantidade de objetos ou beleza dos recursos comprados.
