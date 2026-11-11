# 04 — Remover a cabeça encadeada
# Objetivo: compreender remover a cabeça encadeada.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 20

nos = {"A": {"valor": 10, "proximo": "B"}, "B": {"valor": 20, "proximo": None}}
cabeca = "A"
cabeca = nos[cabeca]["proximo"]
print(nos[cabeca]["valor"])
