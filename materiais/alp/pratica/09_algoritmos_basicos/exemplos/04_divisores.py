# 04 — Divisores de um inteiro
# Objetivo: Usar resto para testar divisibilidade.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Só testamos divisores de um até o próprio número positivo.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   6
# Confira na saída: 'Quantidade de divisores: 4'

numero = int(input("Inteiro positivo: "))
quantidade = 0
for candidato in range(1, numero + 1):
    if numero % candidato == 0:
        print("Divisor:", candidato)
        quantidade += 1
# Um é divisor de todo inteiro positivo.
print("Quantidade de divisores:", quantidade)
