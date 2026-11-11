# 02 — Dois caminhos
# Objetivo: Escolher entre if e else.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Exatamente um dos dois blocos será executado.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   -3
# Confira na saída: 'Ímpar'

numero = int(input("Número inteiro: "))
# Um inteiro é par quando o resto da divisão por dois é zero.
if numero % 2 == 0:
    print("Par")
else:
    print("Ímpar")
