# 02 — Consulta com valor padrão
# Objetivo: compreender consulta com valor padrão.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 0
# False

p = {"nome": "Batom"}
print(p.get("estoque", 0))
print("estoque" in p)
