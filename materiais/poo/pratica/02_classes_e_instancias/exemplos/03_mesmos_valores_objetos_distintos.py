# Classes e instâncias — mesmos valores objetos distintos
# Objetivo: Criar objetos a partir de uma definição comum e distinguir classe de instância.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# False

class Produto:
    """Representa nome e estoque didáticos de um produto."""

    def __init__(self, nome, estoque):
        """Inicializa o estado desta instância."""
        self.nome = nome
        self.estoque = estoque


a = Produto("Creme", 2)
b = Produto("Creme", 2)
print(a is b)
