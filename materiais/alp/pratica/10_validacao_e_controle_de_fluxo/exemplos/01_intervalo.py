# 01 — Repetir até obter um valor válido
# Objetivo: Validar a faixa depois de converter uma entrada.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Esta primeira versão pressupõe texto numérico; letras ainda causam erro.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   -1
#   11
#   8
# Confira na saída: 'Nota aceita: 8.0'

nota = float(input("Nota de 0 a 10: "))
while not (0 <= nota <= 10):
    print("Nota fora do intervalo.")
    nota = float(input("Tente novamente, de 0 a 10: "))
print("Nota aceita:", nota)
# Ambos os limites são aceitos; o laço repete só para os inválidos.
