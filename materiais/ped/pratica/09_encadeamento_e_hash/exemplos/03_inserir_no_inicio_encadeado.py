# 03 — Inserir no início encadeado
# Objetivo: compreender inserir no início encadeado.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# B A

nos = {"A": {"valor": 10, "proximo": None}}
cabeca = "A"
nos["B"] = {"valor": 20, "proximo": cabeca}
cabeca = "B"
print(cabeca, nos[cabeca]["proximo"])
