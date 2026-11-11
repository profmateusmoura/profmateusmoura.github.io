# 08 — Padrão triangular
# Objetivo: Construir uma figura apenas com saída e laços.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A quantidade de colunas depende da linha atual.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: '****'

altura = 4
for linha in range(1, altura + 1):
    for coluna in range(1, linha + 1):
        # end vazio mantém os símbolos na linha atual.
        print("*", end="")
    # Só depois de todas as colunas mudamos de linha.
    print()
# Não há matrizes ou multiplicação de strings nesta construção.
