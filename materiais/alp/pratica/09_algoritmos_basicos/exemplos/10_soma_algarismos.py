# 10 — Soma dos algarismos
# Objetivo: Extrair dígitos usando aritmética.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: % 10 extrai o último dígito; // 10 remove esse dígito.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   204
# Confira na saída: 'Soma dos algarismos: 6'

numero = int(input("Inteiro não negativo: "))
restante = numero
soma = 0
while restante > 0:
    algarismo = restante % 10
    soma += algarismo
    restante //= 10
print("Soma dos algarismos:", soma)
# Para zero, não há voltas e a soma correta permanece zero.
# Não convertemos o número em string para percorrer seus caracteres.
