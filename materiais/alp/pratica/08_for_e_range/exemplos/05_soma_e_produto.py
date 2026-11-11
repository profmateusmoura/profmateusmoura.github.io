# 05 — Acumular em um for
# Objetivo: Escolher valores iniciais adequados.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A soma começa em zero; o produto começa em um.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Produto: 24'

soma = 0
produto = 1
for numero in range(1, 5):
    soma += numero
    produto *= numero
print("Soma:", soma)
print("Produto:", produto)
# Começar produto em zero faria todos os resultados serem zero.
