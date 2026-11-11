# 02 — Código inteiro
# Objetivo: Comparar um valor já convertido.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O literal 1 é diferente do texto "1".
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   3
# Confira na saída: 'Noite'

codigo = int(input("Código do turno: 1, 2 ou 3: "))
match codigo:
    case 1:
        print("Manhã")
    case 2:
        print("Tarde")
    case 3:
        print("Noite")
    case _:
        print("Código desconhecido")
