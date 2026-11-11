"""Abra espaço e insira

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

valores = [3, 1, 2]
for i in range(1, len(valores)):
    atual = valores[i]
    j = i - 1
    while j >= 0 and valores[j] > atual:
        valores[j+1] = valores[j]
        j -= 1
    valores[j+1] = atual
print(valores)
