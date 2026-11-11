# 03 — Contar folhas
# Objetivo: compreender contar folhas.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 2

arvore = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}
print(sum(1 for filhos in arvore.values() if not filhos))
