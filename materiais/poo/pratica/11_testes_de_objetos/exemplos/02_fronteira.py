# Testar comportamentos de objetos — fronteira
# Objetivo: Conferir sequências de chamadas, limites e preservação de estado.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# Fronteira: OK

class Estoque:
    """Mantém saldo inteiro não negativo para testes de comportamento."""

    def __init__(self, saldo):
        """Valida o saldo inicial."""
        if type(saldo) is not int or saldo < 0:
            raise ValueError("Saldo inválido")
        self.saldo = saldo

    def retirar(self, quantidade):
        """Valida antes de alterar; quantidade deve ser inteira positiva."""
        if type(quantidade) is not int or quantidade <= 0 or quantidade > self.saldo:
            raise ValueError("Retirada inválida")
        self.saldo -= quantidade


e = Estoque(5)
e.retirar(5)
assert e.saldo == 0
print("Fronteira: OK")
