"""Uma cópia de dados aninhados

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

from copy import deepcopy
a = [[2, 8], [4, 6]]
b = deepcopy(a)
b[0][0] = 99
print(a)
print(b)
