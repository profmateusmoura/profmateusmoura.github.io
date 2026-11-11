"""Filtre registros completos

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

produtos = [{"nome": "Shampoo", "estoque": 2}, {"nome": "Batom", "estoque": 8}]
for produto in produtos:
    if produto["estoque"] < 5:
        print(produto["nome"])
