# 07 — Repetir até atingir uma meta
# Objetivo: Usar uma condição de parada ligada ao problema.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A meta é fixa e o avanço positivo garante o término.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Dias necessários: 4'

distancia = 0
dias = 0
meta = 20
while distancia < meta:
    distancia += 6  # Avanço diário fictício, sempre positivo.
    dias += 1
    print(f"Dia {dias}: {distancia} km acumulados")
# A distância pode ultrapassar a meta no último passo.
print("Dias necessários:", dias)
