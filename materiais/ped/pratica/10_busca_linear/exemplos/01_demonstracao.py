# 01 — Uma comparação por vez
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

valores = [7, 2, 9, 4]
alvo = 9
for i, valor in enumerate(valores):
    if valor == alvo:
        print(i)
        break
