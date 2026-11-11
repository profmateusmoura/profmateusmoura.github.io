# 06 — Pular uma iteração com continue
# Objetivo: Ignorar entradas sem encerrar o processamento.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: continue salta para a próxima volta do laço.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   -1
#   2
#   0
#   3
# Confira na saída: 'Soma: 5'

soma = 0
aceitos = 0
for ordem in range(1, 5):
    valor = int(input(f"Inteiro {ordem}: "))
    if valor < 0:
        print("Negativo ignorado")
        continue
    # Só valores não negativos chegam a estas duas instruções.
    soma += valor
    aceitos += 1
print("Aceitos:", aceitos)
print("Soma:", soma)
