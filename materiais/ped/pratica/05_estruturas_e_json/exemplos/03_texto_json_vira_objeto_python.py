# 03 — Texto JSON vira objeto Python
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

import json
texto = '{"nome": "Shampoo", "ativo": true, "estoque": 5}'
produto = json.loads(texto)
print(produto["nome"])
print(produto["ativo"])
