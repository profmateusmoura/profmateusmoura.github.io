# 05 — Número primo
# Objetivo: Relacionar primalidade à quantidade de divisores.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Inteiros menores que dois não são primos.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   1
# Confira na saída: 'Não primo'

numero = int(input("Inteiro: "))
divisores = 0
# Versão direta e didática; otimizações ficam para outro momento.
for candidato in range(1, numero + 1):
    if numero % candidato == 0:
        divisores += 1
if numero >= 2 and divisores == 2:
    print("Primo")
else:
    print("Não primo")
