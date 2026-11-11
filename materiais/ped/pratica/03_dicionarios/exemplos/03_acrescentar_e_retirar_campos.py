# 03 — Acrescentar e retirar campos
# Objetivo: compreender acrescentar e retirar campos.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 4 {'nome': 'Creme'}

p = {"nome": "Creme"}
p["estoque"] = 4
retirado = p.pop("estoque")
print(retirado, p)
