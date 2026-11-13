# Projeto: reposição entre unidades — conservacao
# Objetivo: Integrar objetos, regras e testes em uma operação de transferência didática.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# 0 10
# True

class Estoque:
    """Posição didática do mesmo produto em uma unidade."""

    def __init__(self, unidade, saldo):
        """Cria uma posição com saldo inteiro não negativo."""
        if type(saldo) is not int or saldo < 0:
            raise ValueError("Saldo inválido")
        self.unidade = unidade
        self.saldo = saldo


def transferir(origem, destino, quantidade):
    """Coordena uma transferência em memória, sem concorrência ou persistência."""
    if origem is destino:
        raise ValueError("Posições devem ser distintas")
    if type(quantidade) is not int or quantidade <= 0:
        raise ValueError("Quantidade inválida")
    if quantidade > origem.saldo:
        raise ValueError("Saldo insuficiente")
    origem.saldo -= quantidade
    destino.saldo += quantidade


a, b = Estoque("Centro", 8), Estoque("Norte", 2)
antes = a.saldo + b.saldo
transferir(a, b, 8)
print(a.saldo, b.saldo)
print(a.saldo + b.saldo == antes)
