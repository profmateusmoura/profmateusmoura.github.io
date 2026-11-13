# Do registro ao objeto — retirada valida
# Objetivo: Reconhecer estado, comportamento e responsabilidade antes de escrever classes.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# 5

def retirar(produto, quantidade):
    """Retira um inteiro positivo se houver saldo; falhas preservam o registro."""
    if type(quantidade) is not int or quantidade <= 0:
        raise ValueError("Quantidade deve ser um inteiro positivo")
    if quantidade > produto["estoque"]:
        raise ValueError("Saldo insuficiente")
    produto["estoque"] -= quantidade


produto = {"nome": "Shampoo", "estoque": 8}
retirar(produto, 3)
print(produto["estoque"])
