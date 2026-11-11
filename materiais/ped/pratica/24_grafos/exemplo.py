"""Busca em largura com fila

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

from collections import deque
grafo = {"A": ["B", "C"], "B": ["A", "D"], "C": ["A"], "D": ["B"]}
fila, vistos = deque(["A"]), {"A"}
while fila:
    atual = fila.popleft()
    print(atual)
    for vizinho in grafo[atual]:
        if vizinho not in vistos:
            vistos.add(vizinho)
            fila.append(vizinho)
