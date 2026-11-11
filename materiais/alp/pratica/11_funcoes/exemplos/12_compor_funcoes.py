# Usar o retorno de uma função em outra
# Execução: python 11_funcoes/exemplos/12_compor_funcoes.py
# Confira na saída: 'Por etapas: 67.23'
# Preveja o estado dos dados antes de executar; depois altere um caso de fronteira.

def calcular_bruto(preco, quantidade):
    """Retorne total bruto para preço não negativo e quantidade positiva."""
    return preco * quantidade

def aplicar_desconto(total, taxa):
    """Retorne total após taxa percentual válida entre zero e cem."""
    return total - total * taxa / 100

# A expressão mais interna é calculada antes de aplicar_desconto receber dados.
final_direto = aplicar_desconto(calcular_bruto(24.9, 3), 10)
# A decomposição com variável intermediária facilita acompanhar o mesmo fluxo.
bruto = calcular_bruto(24.9, 3)
final_por_etapas = aplicar_desconto(bruto, 10)
print(f"Direto: {final_direto:.2f}")
print(f"Por etapas: {final_por_etapas:.2f}")
# Nenhuma função precisou ler, imprimir ou acessar o estado interno da outra.
