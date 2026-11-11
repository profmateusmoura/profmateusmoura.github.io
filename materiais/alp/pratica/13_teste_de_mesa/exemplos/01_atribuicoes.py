# 01 — Rastrear atribuições
# Objetivo: Registrar o estado depois de cada atualização.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: As colunas abaixo são uma tabela em comentários, não uma coleção Python.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'b: 4'

# Antes de executar, cubra a tabela preenchida e refaça no papel.
# Ponto                 | a | b | auxiliar
# após inicialização    | 2 | 5 | —
# após auxiliar = a     | 2 | 5 | 2
# após a = b + 1        | 6 | 5 | 2
# após b = auxiliar * 2 | 6 | 4 | 2
a = 2
b = 5
auxiliar = a
a = b + 1
b = auxiliar * 2
print("a:", a)
print("b:", b)
# Leia sempre o lado direito usando os valores daquele instante.
