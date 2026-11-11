# 03 — Rastrear um while
# Objetivo: Incluir a avaliação final falsa na simulação.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A tabela usa o estado antes da avaliação da condição.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'i final: 4'

# avaliação | i antes | soma antes | i <= 3 | soma após corpo
# 1         | 1       | 0          | True   | 1
# 2         | 2       | 1          | True   | 3
# 3         | 3       | 3          | True   | 6
# 4         | 4       | 6          | False  | corpo não executado
i = 1
soma = 0
while i <= 3:
    soma += i
    i += 1
print("Soma:", soma)
print("i final:", i)
# Foram três execuções do corpo e quatro avaliações da condição.
