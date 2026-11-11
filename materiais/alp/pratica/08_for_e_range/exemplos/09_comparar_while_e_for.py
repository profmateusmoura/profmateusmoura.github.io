# O mesmo acumulador com while e for
# Execução: python 08_for_e_range/exemplos/09_comparar_while_e_for.py
# Confira na saída: 'Com for: 10'
# Preveja o estado dos dados antes de executar; depois altere um caso de fronteira.

limite = 4
soma_while = 0
atual = 1
# No while, o programa inicializa e atualiza o estado de controle.
while atual <= limite:
    soma_while += atual
    atual += 1
soma_for = 0
# No for, range fornece os valores; limite + 1 inclui o último pretendido.
for numero in range(1, limite + 1):
    soma_for += numero
print("Com while:", soma_while)
print("Com for:", soma_for)
# Limite zero produz soma zero nas duas versões, sem executar os corpos.
# A escolha é pelo tipo de controle necessário, não pelo resultado da soma.
