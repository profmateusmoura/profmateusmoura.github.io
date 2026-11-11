# 16 — Retângulo de símbolos
# Objetivo: Traduzir altura e largura em dois laços.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O produto altura * largura prevê a quantidade de símbolos.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   2
#   3
# Confira na saída: '###\n###'

altura = int(input("Altura positiva: "))
largura = int(input("Largura positiva: "))
for linha in range(altura):
    for coluna in range(largura):
        print("#", end="")
    print()  # Uma quebra por linha, depois de todas as colunas.
# Teste largura um e altura um para observar os limites.
