# 04 — Intervalo decrescente
# Objetivo: Usar início e parada compatíveis com o passo.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Para chegar até um, a parada é zero quando o passo vale menos um.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Contagem: 1'

for numero in range(5, 0, -1):
    print("Contagem:", numero)
print("Já!")
# range(1, 5, -1) seria vazio: o passo aponta na direção oposta.
