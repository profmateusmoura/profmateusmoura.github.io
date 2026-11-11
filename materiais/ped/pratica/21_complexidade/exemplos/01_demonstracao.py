# 01 — Conte operações, não segundos
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

for n in [2, 4, 8]:
    contador = 0
    for i in range(n):
        for j in range(n):
            contador += 1
    print(n, contador)
