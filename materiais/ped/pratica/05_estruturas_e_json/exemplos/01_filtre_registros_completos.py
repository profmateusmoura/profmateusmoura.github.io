# 01 — Filtre registros completos
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

produtos = [{"nome": "Shampoo", "estoque": 2}, {"nome": "Batom", "estoque": 8}]
for produto in produtos:
    if produto["estoque"] < 5:
        print(produto["nome"])
