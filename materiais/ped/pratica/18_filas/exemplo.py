"""Atenda por ordem de chegada

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

from collections import deque
fila = deque(["Ana", "Bia", "Caio"])
print(fila.popleft())
fila.append("Duda")
print(list(fila))
