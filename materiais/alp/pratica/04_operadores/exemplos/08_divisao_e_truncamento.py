# Divisão inteira, resto e truncamento
# Execução: python 04_operadores/exemplos/08_divisao_e_truncamento.py
# Confira na saída: 'Reconstrução: -7'
# Preveja o estado dos dados antes de executar; depois altere um caso de fronteira.

numero = -7
divisor = 3
# / produz o quociente real aproximado. int descarta sua parte fracionária
# em direção a zero. //, por sua vez, arredonda o quociente para baixo.
print("Divisão real:", numero / divisor)
print("Truncamento com int:", int(numero / divisor))
print("Quociente com //:", numero // divisor)
print("Resto com %:", numero % divisor)
# Mesmo com dividendo negativo, a reconstrução conserva o número original.
quociente = numero // divisor
resto = numero % divisor
print("Reconstrução:", divisor * quociente + resto)
