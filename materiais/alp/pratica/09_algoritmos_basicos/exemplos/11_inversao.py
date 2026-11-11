# 11 — Inversão numérica
# Objetivo: Reconstruir um inteiro com dígitos em ordem inversa.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Multiplicar por dez abre espaço para o próximo algarismo.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   120
# Confira na saída: 'Invertido: 21'

numero = int(input("Inteiro não negativo: "))
restante = numero
invertido = 0
while restante > 0:
    algarismo = restante % 10
    invertido = invertido * 10 + algarismo
    restante //= 10
print("Invertido:", invertido)
# Zeros à esquerda não são preservados em um inteiro: 120 vira 21.
