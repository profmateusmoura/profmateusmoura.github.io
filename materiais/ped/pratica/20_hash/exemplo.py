"""Duas chaves no mesmo balde

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

baldes = [[] for _ in range(5)]
for chave in [12, 7, 9]:
    baldes[chave % 5].append(chave)
print(baldes)
