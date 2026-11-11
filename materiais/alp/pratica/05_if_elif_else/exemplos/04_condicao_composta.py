# 04 — Intervalos e condições compostas
# Objetivo: Testar limites inclusivos.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: and exige que as duas comparações sejam verdadeiras.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   25
# Confira na saída: 'Dentro da faixa'

idade = int(input("Idade: "))
# Regra fictícia desta atividade: faixa de 16 até 25 inclusive.
if idade >= 16 and idade <= 25:
    print("Dentro da faixa")
else:
    print("Fora da faixa")
# Compare as saídas ao testar 15, 16, 25 e 26.
