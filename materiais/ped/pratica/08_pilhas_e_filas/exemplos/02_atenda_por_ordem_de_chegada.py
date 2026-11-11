# 02 — Atenda por ordem de chegada
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

from collections import deque
fila = deque(["Ana", "Bia", "Caio"])
print(fila.popleft())
fila.append("Duda")
print(list(fila))
