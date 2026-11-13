# Teste de mesa — Propriedades e interfaces
#
# Sem executar, registre cada objeto criado, seus atributos e a saída após cada chamada no programa abaixo. Identifique quais nomes são referências ao mesmo objeto. Depois transcreva, execute e compare.
#
# class Produto:
#     """Guarda preço em centavos inteiros não negativos."""
#
#     def __init__(self, preco_centavos):
#         """Usa a propriedade para validar o estado inicial."""
#         self.preco_centavos = preco_centavos
#
#     @property
#     def preco_centavos(self):
#         """Devolve o preço armazenado."""
#         return self._preco_centavos
#
#     @preco_centavos.setter
#     def preco_centavos(self, valor):
#         """Valida antes de substituir o preço."""
#         if type(valor) is not int or valor < 0:
#             raise ValueError("Preço inválido")
#         self._preco_centavos = valor
#
# p = Produto(2490)
# print(p.preco_centavos)
#
# Conferência: compare com o exemplo 01. Uma tabela apenas com o resultado final não basta; mostre as mudanças e explique sua ordem.
