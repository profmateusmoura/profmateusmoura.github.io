# O segundo teste nem sempre é avaliado
# Execução: python 04_operadores/exemplos/07_curto_circuito.py
# Confira na saída: 'Condição com divisor zero: False'
# Preveja o estado dos dados antes de executar; depois altere um caso de fronteira.

numerador = 8
divisor = 0
# and só precisa da segunda condição quando a primeira é verdadeira.
# Como divisor != 0 é False, a divisão à direita não será executada.
pode_calcular = divisor != 0 and numerador / divisor > 2
print("Condição com divisor zero:", pode_calcular)
divisor = 2
print("Condição com divisor dois:", divisor != 0 and numerador / divisor > 2)
# or encerra a avaliação assim que já houver uma condição verdadeira.
possui_convite = True
autorizado = possui_convite or numerador / 0 > 2
print("Autorização por convite:", autorizado)
# A divisão por zero acima é deliberada para observar o curto-circuito.
# Trocar a ordem das condições mudaria quais expressões chegam a ser avaliadas.
