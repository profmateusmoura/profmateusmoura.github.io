"""Trocas entre vizinhos

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

valores = [3, 2, 1]
for fim in range(len(valores)-1, 0, -1):
    for i in range(fim):
        if valores[i] > valores[i+1]:
            valores[i], valores[i+1] = valores[i+1], valores[i]
print(valores)
