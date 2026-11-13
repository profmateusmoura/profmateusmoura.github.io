# Herança e especialização — prazo especializado
# Objetivo: Usar herança quando existe uma relação coerente de substituição.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# 2

class Entrega:
    """Fornece um prazo didático em dias inteiros positivos."""

    def prazo_dias(self):
        """Retorna o prazo padrão."""
        return 5


class EntregaExpressa(Entrega):
    """Especializa a entrega mantendo o contrato de consulta."""

    def prazo_dias(self):
        """Retorna um prazo menor neste cenário didático."""
        return 2


print(EntregaExpressa().prazo_dias())
