"""Empilhe chamadas e retorne

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

def soma(n):
    if n == 0:
        return 0
    return n + soma(n - 1)
print(soma(3))
