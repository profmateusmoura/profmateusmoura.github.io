"""Reduza o intervalo

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

valores = [2, 4, 6, 8, 10, 12, 14]
inicio, fim, alvo = 0, 6, 12
while inicio <= fim:
    meio = (inicio + fim) // 2
    if valores[meio] == alvo:
        print(meio)
        break
    if valores[meio] < alvo:
        inicio = meio + 1
    else:
        fim = meio - 1
