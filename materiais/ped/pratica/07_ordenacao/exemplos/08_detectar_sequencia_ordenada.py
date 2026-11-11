# 08 — Detectar sequência ordenada
# Objetivo: compreender detectar sequência ordenada.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# True

a = [1, 2, 2, 5]
ordenada = all(a[i] <= a[i+1] for i in range(len(a)-1))
print(ordenada)
