# 01 — Siga a próxima referência
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

nos = {"A": {"valor": 10, "proximo": "B"}, "B": {"valor": 20, "proximo": None}}
atual = "A"
while atual is not None:
    print(nos[atual]["valor"])
    atual = nos[atual]["proximo"]
