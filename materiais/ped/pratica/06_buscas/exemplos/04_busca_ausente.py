# 04 — Busca ausente
# Objetivo: compreender busca ausente.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# -1

a, alvo = [3, 6, 9], 4
resultado = -1
for i, v in enumerate(a):
    if v == alvo:
        resultado = i
        break
print(resultado)
