# 03 — Faixas com elif
# Objetivo: Ordenar condições mutuamente exclusivas.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A primeira condição verdadeira encerra a cadeia.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   5
# Confira na saída: 'Recuperação'

# Considere uma nota válida entre zero e dez.
nota = float(input("Nota: "))
if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    # Aqui já sabemos que a nota é menor que sete.
    print("Recuperação")
else:
    print("Reprovado")
