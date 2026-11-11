# Função de reposição — cenário didático Lojas Blue
# Objetivo: Retornar uma sugestão sem ler ou exibir dentro do cálculo.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Produto 4, unidade 1: 4'
# Sem entrada interativa.

def sugerir_reposicao(saldo, minimo):
    """Retorne a falta até o mínimo para dois inteiros não negativos."""
    if saldo < minimo:
        return minimo - saldo
    return 0

# A função retorna um inteiro, sem listas ou múltiplos retornos.
print("Produto 4, unidade 1:", sugerir_reposicao(4, 8))
print("Produto 1, unidade 1:", sugerir_reposicao(18, 10))
