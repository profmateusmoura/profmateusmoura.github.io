# 04 — Comparações
# Objetivo: Produzir valores booleanos.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: = atribui; == compara igualdade.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Maior ou igual a 18: True'

idade = 18
# Cada comparação resulta em True ou False.
print("Igual a 18:", idade == 18)
print("Diferente de 18:", idade != 18)
print("Maior que 18:", idade > 18)
print("Maior ou igual a 18:", idade >= 18)
print("Menor que 60:", idade < 60)
print("Menor ou igual a 17:", idade <= 17)
# Comparações encadeadas conferem os dois limites de um intervalo.
# A idade deve ser ao menos zero e no máximo vinte, inclusive.
print("No intervalo de 0 a 20:", 0 <= idade <= 20)
