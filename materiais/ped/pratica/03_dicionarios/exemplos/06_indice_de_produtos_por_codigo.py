# 06 — Índice de produtos por código
# Objetivo: compreender índice de produtos por código.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# B

produtos = [{"id": 2, "nome": "A"}, {"id": 5, "nome": "B"}]
indice = {p["id"]: p for p in produtos}
print(indice[5]["nome"])
