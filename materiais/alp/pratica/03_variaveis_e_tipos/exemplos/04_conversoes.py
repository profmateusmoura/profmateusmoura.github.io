# 04 — Conversões explícitas
# Objetivo: Distinguir conversão e arredondamento.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: int descarta a parte fracionária em direção a zero.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Outro valor convertido: 8'

texto = "42"
inteiro = int(texto)
decimal = float(inteiro)
representacao = str(decimal)
print(inteiro, type(inteiro))
print(decimal, type(decimal))
print(representacao, type(representacao))
# Isto não é arredondar para o inteiro mais próximo.
print("Parte inteira:", int(7.9))
print("Outro valor convertido:", int(8.2))
# As conversões aqui não envolvem contas ou comparações.
