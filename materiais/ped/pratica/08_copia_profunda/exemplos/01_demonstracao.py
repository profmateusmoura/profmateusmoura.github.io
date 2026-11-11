# 01 — Uma cópia de dados aninhados
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

from copy import deepcopy
a = [[2, 8], [4, 6]]
b = deepcopy(a)
b[0][0] = 99
print(a)
print(b)
