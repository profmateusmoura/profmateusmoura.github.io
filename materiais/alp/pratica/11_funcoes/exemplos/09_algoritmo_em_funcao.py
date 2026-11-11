# 09 — Algoritmo numérico em função
# Objetivo: Encapsular um laço sem entrada ou saída interna.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O retorno é um único inteiro, nunca uma coleção.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: '0! = 1'

def calcular_fatorial(numero):
    """Retorne numero!; numero deve ser inteiro maior ou igual a zero."""
    produto = 1
    for fator in range(2, numero + 1):
        produto *= fator
    return produto

# O chamador assume a responsabilidade de cumprir o contrato.
for numero in range(6):
    print(f"{numero}! = {calcular_fatorial(numero)}")
# O produto local é reiniciado em cada chamada.
