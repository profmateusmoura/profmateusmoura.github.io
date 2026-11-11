# Rastrear um saldo — cenário didático Lojas Blue
# Objetivo: Conferir o limite de retirada por teste de mesa.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Saldo final: 0'
# Sem entrada interativa.

# Simulação: retiradas fixas de três unidades até não haver saldo.
# avaliação | saldo antes | saldo >= 3 | retiradas após corpo
# 1         | 6           | True       | 1
# 2         | 3           | True       | 2
# 3         | 0           | False      | não executa
saldo = 6
retiradas = 0
while saldo >= 3:
    saldo -= 3
    retiradas += 1
print("Retiradas:", retiradas)
print("Saldo final:", saldo)
# Refazer a tabela com saldo sete mostra por que pode haver restante.
