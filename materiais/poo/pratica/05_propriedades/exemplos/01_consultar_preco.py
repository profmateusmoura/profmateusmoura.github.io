# Propriedades e interfaces — consultar preco
# Objetivo: Expor atributos de forma controlada, sem prometer privacidade absoluta.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# 2490

class Produto:
    """Guarda preço em centavos inteiros não negativos."""

    def __init__(self, preco_centavos):
        """Usa a propriedade para validar o estado inicial."""
        self.preco_centavos = preco_centavos

    @property
    def preco_centavos(self):
        """Devolve o preço armazenado."""
        return self._preco_centavos

    @preco_centavos.setter
    def preco_centavos(self, valor):
        """Valida antes de substituir o preço."""
        if type(valor) is not int or valor < 0:
            raise ValueError("Preço inválido")
        self._preco_centavos = valor


p = Produto(2490)
print(p.preco_centavos)
