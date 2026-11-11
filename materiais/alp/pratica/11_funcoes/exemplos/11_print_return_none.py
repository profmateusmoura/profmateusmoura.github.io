# Mostrar um cálculo e devolver um cálculo
# Execução: python 11_funcoes/exemplos/11_print_return_none.py
# Confira na saída: 'Retorno da exibição: None'
# Preveja o estado dos dados antes de executar; depois altere um caso de fronteira.

def mostrar_dobro(numero):
    """Exiba o dobro do número; não forneça um resultado de cálculo ao chamador."""
    print("Dobro exibido:", numero * 2)
    # Chegar ao fim sem return explícito faz a chamada devolver None.

def calcular_dobro(numero):
    """Retorne o dobro do número sem imprimir internamente."""
    return numero * 2

recebido_da_exibicao = mostrar_dobro(4)
recebido_do_calculo = calcular_dobro(4)
print("Retorno da exibição:", recebido_da_exibicao)
print("Retorno do cálculo:", recebido_do_calculo)
# Só o segundo retorno é o número que pode entrar nesta nova conta.
print("Cálculo mais três:", recebido_do_calculo + 3)
