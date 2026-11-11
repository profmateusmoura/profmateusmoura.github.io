# 07 — Fibonacci sem coleções
# Objetivo: Atualizar dois estados preservando o valor anterior.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A sequência adotada começa em 0 e 1.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   7
# Confira na saída: '8\n'

quantidade = int(input("Quantidade não negativa de termos: "))
anterior = 0
atual = 1
for ordem in range(quantidade):
    print(anterior)
    # Calcule antes de sobrescrever os valores necessários.
    proximo = anterior + atual
    anterior = atual
    atual = proximo
# Quantidade zero não imprime termos; um imprime apenas zero.
