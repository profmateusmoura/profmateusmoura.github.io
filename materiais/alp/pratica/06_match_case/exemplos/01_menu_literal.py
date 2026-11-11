# 01 — Menu por valor exato
# Objetivo: Selecionar uma alternativa textual.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: match/case requer Python 3.10 ou superior.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   2
# Confira na saída: 'Leia o enunciado antes de programar.'

opcao = input("Digite 1 para iniciar ou 2 para ajuda: ")
# Comparamos texto porque não convertemos a entrada para int.
match opcao:
    case "1":
        print("Iniciando")
    case "2":
        print("Leia o enunciado antes de programar.")
    case _:
        # O curinga deve ficar por último.
        print("Opção inválida")
