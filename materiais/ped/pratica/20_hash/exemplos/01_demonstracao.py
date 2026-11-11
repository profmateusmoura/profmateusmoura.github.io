# 01 — Duas chaves no mesmo balde
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

baldes = [[] for _ in range(5)]
for chave in [12, 7, 9]:
    baldes[chave % 5].append(chave)
print(baldes)
