"""Divida e intercale

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

def merge_sort(valores):
    if len(valores) <= 1:
        return valores[:]
    meio = len(valores) // 2
    a, b = merge_sort(valores[:meio]), merge_sort(valores[meio:])
    resultado = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            resultado.append(a[i]); i += 1
        else:
            resultado.append(b[j]); j += 1
    return resultado + a[i:] + b[j:]
print(merge_sort([4, 1, 3, 2]))
