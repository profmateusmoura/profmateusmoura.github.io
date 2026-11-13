# Polimorfismo e estratégias — frete fixo
# Objetivo: Trocar um comportamento mantendo a forma de uso pelo cliente.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# 2500

class FreteFixo:
    """Calcula um frete fixo didático em centavos."""

    def calcular_centavos(self):
        """Retorna 500 centavos."""
        return 500


class RetiradaNaLoja:
    """Atende ao mesmo contrato sem custo de frete."""

    def calcular_centavos(self):
        """Retorna zero centavos."""
        return 0


class Orcamento:
    """Recebe uma estratégia de frete em vez de escolher seu tipo."""

    def __init__(self, subtotal, frete):
        """Recebe subtotal válido em centavos e estratégia compatível."""
        self.subtotal = subtotal
        self.frete = frete

    def total(self):
        """Soma subtotal e frete na mesma unidade."""
        return self.subtotal + self.frete.calcular_centavos()


print(Orcamento(2000, FreteFixo()).total())
