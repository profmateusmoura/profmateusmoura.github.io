# 07 — Repetições aninhadas
# Objetivo: Relacionar volta externa e voltas internas.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O laço interno reinicia para cada valor do laço externo.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: '3 x 3 = 9'

for tabuada in range(2, 4):
    print("Tabuada reduzida de", tabuada)
    for fator in range(1, 4):
        print(f"{tabuada} x {fator} = {tabuada * fator}")
    # Esta separação ocorre uma vez por tabuada, fora do laço interno.
    print("---")
