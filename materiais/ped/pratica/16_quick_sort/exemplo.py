"""Particione em torno do pivô

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

def quick_sort(valores):
    if len(valores) <= 1:
        return valores[:]
    pivo = valores[0]
    menores = [v for v in valores if v < pivo]
    iguais = [v for v in valores if v == pivo]
    maiores = [v for v in valores if v > pivo]
    return quick_sort(menores) + iguais + quick_sort(maiores)
print(quick_sort([3, 1, 4, 2, 3]))
