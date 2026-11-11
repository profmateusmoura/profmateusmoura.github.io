# 05 — Troca com variável auxiliar
# Objetivo: Preservar um valor durante uma troca.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A variável auxiliar evita perder o primeiro valor.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Segundo: 10'

primeiro = 10
segundo = 20
# Não usamos a forma de troca por tupla neste curso.
auxiliar = primeiro
primeiro = segundo
segundo = auxiliar
print("Primeiro:", primeiro)
print("Segundo:", segundo)
