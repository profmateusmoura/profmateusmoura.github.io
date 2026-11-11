# 04 — Flag de ocorrência
# Objetivo: Registrar se algo aconteceu em qualquer repetição.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Uma vez verdadeira, a flag não volta a ser falsa neste algoritmo.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   1
#   -2
#   3
#   4
# Confira na saída: 'Houve pelo menos um negativo.'

houve_negativo = False
for ordem in range(1, 5):
    valor = int(input(f"Inteiro {ordem}: "))
    if valor < 0:
        houve_negativo = True
    # Não coloque else definindo False: isso apagaria o histórico.
if houve_negativo:
    print("Houve pelo menos um negativo.")
else:
    print("Não houve negativos.")
