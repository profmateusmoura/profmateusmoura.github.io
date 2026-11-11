# 09 — Confirmação textual
# Objetivo: Validar uma escolha sem transformar strings.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Só s e n minúsculos são válidos nesta atividade.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   talvez
#   n
# Confira na saída: 'Encerramento confirmado'

resposta = input("Continuar? s/n: ")
while resposta != "s" and resposta != "n":
    print("Use exatamente s ou n.")
    resposta = input("Continuar? s/n: ")
if resposta == "s":
    print("Continuação confirmada")
else:
    print("Encerramento confirmado")
# Com and, repetimos se a resposta não é nenhuma das duas alternativas.
