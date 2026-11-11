# 09 — MMC a partir do MDC
# Objetivo: Reutilizar uma ideia algorítmica sem funções ainda.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Para positivos, MMC(a,b) = (a // MDC(a,b)) * b.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   12
#   18
# Confira na saída: 'MMC: 36'

a = int(input("Primeiro inteiro positivo: "))
b = int(input("Segundo inteiro positivo: "))
x = a
y = b
while y != 0:
    resto = x % y
    x = y
    y = resto
mdc = x
# A divisão inteira é exata porque mdc divide a.
mmc = (a // mdc) * b
print("MMC:", mmc)
