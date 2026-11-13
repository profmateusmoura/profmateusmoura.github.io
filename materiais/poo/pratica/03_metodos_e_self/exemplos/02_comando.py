# Métodos e self — comando
# Objetivo: Associar operações ao objeto e distinguir retorno de alteração de estado.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# 7

class Estoque:
    """Agrupa um saldo e operações didáticas; use quantidades positivas."""

    def __init__(self, saldo):
        """Recebe o saldo inicial não negativo."""
        self.saldo = saldo

    def repor(self, quantidade):
        """Acrescenta a quantidade positiva ao saldo."""
        self.saldo += quantidade

    def disponivel(self, quantidade):
        """Consulta se há saldo, sem modificar o objeto."""
        return self.saldo >= quantidade


estoque = Estoque(4)
estoque.repor(3)
print(estoque.saldo)
