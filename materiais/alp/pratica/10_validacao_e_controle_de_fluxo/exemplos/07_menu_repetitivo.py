# 07 — Menu repetitivo
# Objetivo: Manter um estado entre escolhas do usuário.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A opção sair altera a flag que controla o laço.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   x
#   1
#   2
#   0
# Confira na saída: 'Pontos: 1'

pontos = 0
executando = True
while executando:
    print("1: adicionar ponto | 2: consultar | 0: sair")
    opcao = input("Opção: ")
    match opcao:
        case "1":
            pontos += 1
        case "2":
            print("Pontos:", pontos)
        case "0":
            executando = False
        case _:
            print("Opção inválida")
print("Menu encerrado")
