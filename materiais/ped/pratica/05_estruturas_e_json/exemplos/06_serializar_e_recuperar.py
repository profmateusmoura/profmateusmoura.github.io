# 06 — Serializar e recuperar
# Objetivo: compreender serializar e recuperar.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# {"ativo": true, "desconto": null}
# True

import json
p = {"ativo": True, "desconto": None}
texto = json.dumps(p)
print(texto)
print(json.loads(texto) == p)
