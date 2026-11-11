"""Siga a próxima referência

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

nos = {"A": {"valor": 10, "proximo": "B"}, "B": {"valor": 20, "proximo": None}}
atual = "A"
while atual is not None:
    print(nos[atual]["valor"])
    atual = nos[atual]["proximo"]
