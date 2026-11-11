# 04 — Desfazer e refazer
# Objetivo: compreender desfazer e refazer.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# ['A'] ['B']
# ['A', 'B'] []

feitas, desfeitas = ["A", "B"], []
desfeitas.append(feitas.pop())
print(feitas, desfeitas)
feitas.append(desfeitas.pop())
print(feitas, desfeitas)
