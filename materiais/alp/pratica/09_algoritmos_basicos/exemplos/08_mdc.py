# 08 — MDC pelo algoritmo de Euclides
# Objetivo: Reduzir um problema usando restos sucessivos.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: MDC(a, b) é igual a MDC(b, a % b), enquanto b não for zero.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   48
#   18
# Confira na saída: 'MDC de 48 e 18: 6'

a = int(input("Primeiro inteiro positivo: "))
b = int(input("Segundo inteiro positivo: "))
# Trabalhamos com cópias para preservar as entradas na apresentação.
x = a
y = b
while y != 0:
    resto = x % y
    x = y
    y = resto
# O último divisor não nulo é o MDC.
print(f"MDC de {a} e {b}: {x}")
