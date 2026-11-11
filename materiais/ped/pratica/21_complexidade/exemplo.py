"""Conte operações, não segundos

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

for n in [2, 4, 8]:
    contador = 0
    for i in range(n):
        for j in range(n):
            contador += 1
    print(n, contador)
