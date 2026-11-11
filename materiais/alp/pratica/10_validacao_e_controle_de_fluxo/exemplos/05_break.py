# 05 — Saída antecipada com break
# Objetivo: Encerrar um laço antes do fim previsto.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: break encerra apenas o laço mais interno em que aparece.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   x
#   ALP
# Confira na saída: 'Código aceito'

encontrou = False
for tentativa in range(1, 4):
    codigo = input("Código de demonstração (dica: ALP): ")
    if codigo == "ALP":
        encontrou = True
        break  # Não pede novas tentativas após acertar.
    print("Código incorreto.")
if encontrou:
    print("Código aceito")
else:
    print("Tentativas encerradas")
# Exemplo de controle de fluxo; não é um sistema real de autenticação.
