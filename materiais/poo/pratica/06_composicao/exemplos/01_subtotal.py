# Composição de objetos — subtotal
# Objetivo: Construir uma colaboração entre objetos sem recorrer imediatamente à herança.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# 3000

class Produto:
    """Representa um preço de catálogo didático."""

    def __init__(self, nome, preco_centavos):
        """Recebe nome e preço inteiro não negativo."""
        if type(preco_centavos) is not int or preco_centavos < 0:
            raise ValueError("Preço inválido")
        self.nome = nome
        self.preco_centavos = preco_centavos


class LinhaPedido:
    """Usa um produto e preserva o preço aplicado na criação."""

    def __init__(self, produto, quantidade):
        """Recebe produto válido e quantidade inteira positiva."""
        if type(quantidade) is not int or quantidade <= 0:
            raise ValueError("Quantidade inválida")
        self.produto = produto
        self.quantidade = quantidade
        self.preco_aplicado = produto.preco_centavos

    def subtotal(self):
        """Calcula usando a fotografia do preço."""
        return self.quantidade * self.preco_aplicado


p = Produto("Shampoo", 1000)
linha = LinhaPedido(p, 3)
print(linha.subtotal())
