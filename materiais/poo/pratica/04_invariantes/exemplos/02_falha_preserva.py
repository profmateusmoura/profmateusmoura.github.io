# Invariantes e validação — falha preserva
# Objetivo: Manter regras verdadeiras durante toda a vida de um objeto.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# Saldo insuficiente
# 4

class Estoque:
    """Mantém saldo inteiro não negativo por meio da interface pública."""

    def __init__(self, saldo):
        """Recusa estados iniciais inválidos."""
        if type(saldo) is not int or saldo < 0:
            raise ValueError("Saldo inválido")
        self._saldo = saldo

    def consultar(self):
        """Devolve o saldo sem alterá-lo."""
        return self._saldo

    def retirar(self, quantidade):
        """Recusa entradas inválidas antes de qualquer alteração."""
        if type(quantidade) is not int or quantidade <= 0:
            raise ValueError("Quantidade inválida")
        if quantidade > self._saldo:
            raise ValueError("Saldo insuficiente")
        self._saldo -= quantidade


e = Estoque(4)
try:
    e.retirar(5)
except ValueError as erro:
    print(erro)
print(e.consultar())
