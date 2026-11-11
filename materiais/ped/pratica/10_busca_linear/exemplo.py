"""Uma comparação por vez

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

valores = [7, 2, 9, 4]
alvo = 9
for i, valor in enumerate(valores):
    if valor == alvo:
        print(i)
        break
