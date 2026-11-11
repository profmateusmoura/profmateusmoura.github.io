# Conferência de três posições — cenário didático Lojas Blue
# Objetivo: Contar saldos críticos sem armazenar histórico.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Posições críticas: 1'
# Entradas guiadas, uma por solicitação:
#   18
#   4
#   10

criticos = 0
minimo = 10  # Regra simplificada, igual para as três leituras.
for ordem in range(1, 4):
    saldo = int(input(f"Saldo não negativo da posição {ordem}: "))
    if saldo < minimo:
        criticos += 1
print("Posições críticas:", criticos)
# Saldos de unidades diferentes são consumidos um de cada vez.
