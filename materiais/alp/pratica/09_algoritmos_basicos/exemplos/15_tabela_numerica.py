# 15 — Tabela numérica
# Objetivo: Gerar resultados derivados de um intervalo.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Cada linha é calculada e exibida imediatamente.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: '5 | 25 | 125'

print("n | quadrado | cubo")
for numero in range(1, 6):
    quadrado = numero ** 2
    cubo = numero ** 3
    print(f"{numero} | {quadrado} | {cubo}")
# É uma tabela visual no terminal, sem estrutura tabular na memória.
