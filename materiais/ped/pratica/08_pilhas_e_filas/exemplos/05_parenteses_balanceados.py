# 05 — Parênteses balanceados
# Objetivo: compreender parênteses balanceados.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# True

texto = "(())"
pilha = []
valido = True
for simbolo in texto:
    if simbolo == "(":
        pilha.append(simbolo)
    elif not pilha:
        valido = False
        break
    else:
        pilha.pop()
print(valido and not pilha)
