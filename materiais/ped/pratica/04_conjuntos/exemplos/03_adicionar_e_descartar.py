# 03 — Adicionar e descartar
# Objetivo: compreender adicionar e descartar.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [1, 2, 3]

s = {1, 2}
s.add(2)
s.add(3)
s.discard(9)
print(sorted(s))
