"""Texto JSON vira objeto Python

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

import json
texto = '{"nome": "Shampoo", "ativo": true, "estoque": 5}'
produto = json.loads(texto)
print(produto["nome"])
print(produto["ativo"])
