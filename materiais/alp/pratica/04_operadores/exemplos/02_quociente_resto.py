# 02 — Quociente e resto
# Objetivo: Decompor uma quantidade inteira.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: // calcula o quociente inteiro e % calcula o resto.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Reconstrução: 135'

segundos = 135
minutos = segundos // 60
restantes = segundos % 60
print(f"{minutos} minuto(s) e {restantes} segundo(s)")
# Para valores não negativos: dividendo = divisor * quociente + resto.
print("Reconstrução:", 60 * minutos + restantes)
