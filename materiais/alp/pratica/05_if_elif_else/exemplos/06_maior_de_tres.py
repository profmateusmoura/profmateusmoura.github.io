# 06 — Maior entre três valores
# Objetivo: Manter um candidato sem coleções.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Os if independentes permitem comparar o candidato duas vezes.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   -8
#   -2
#   -5
# Confira na saída: 'Maior: -2'

a = int(input("Primeiro: "))
b = int(input("Segundo: "))
c = int(input("Terceiro: "))
# Começamos com um valor real, não com zero arbitrário.
maior = a
if b > maior:
    maior = b
if c > maior:
    maior = c
# Em caso de empate, o valor máximo continua correto.
print("Maior:", maior)
