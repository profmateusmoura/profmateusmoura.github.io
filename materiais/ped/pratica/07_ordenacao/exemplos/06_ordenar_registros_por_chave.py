# 06 — Ordenar registros por chave
# Objetivo: compreender ordenar registros por chave.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# ['B', 'A']

p = [{"nome": "A", "preco": 30}, {"nome": "B", "preco": 10}]
print([v["nome"] for v in sorted(p, key=lambda x: x["preco"])])
