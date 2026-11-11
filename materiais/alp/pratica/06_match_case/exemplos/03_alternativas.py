# 03 — Alternativas no mesmo caso
# Objetivo: Agrupar valores literais com a mesma resposta.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Dentro de case, | separa padrões alternativos; não é o or booleano.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   7
# Confira na saída: 'Fim de semana'

dia = int(input("Dia da semana, de 1 a 7: "))
# Convenção desta atividade: 1 é segunda e 7 é domingo.
match dia:
    case 1 | 2 | 3 | 4 | 5:
        print("Dia útil")
    case 6 | 7:
        print("Fim de semana")
    case _:
        print("Dia inválido")
