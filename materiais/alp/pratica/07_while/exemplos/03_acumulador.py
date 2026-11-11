# 03 — Contador e acumulador
# Objetivo: Somar os inteiros de um até um limite.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O contador controla a repetição; o acumulador guarda a soma parcial.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   4
# Confira na saída: 'Soma final: 10'

limite = int(input("Limite inteiro não negativo: "))
atual = 1
soma = 0  # Zero é o elemento neutro da soma.
while atual <= limite:
    soma += atual
    print("Até", atual, "a soma é", soma)
    atual += 1
print("Soma final:", soma)
# Limite zero produz soma zero sem executar o corpo.
