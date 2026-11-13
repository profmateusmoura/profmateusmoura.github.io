# Teste de mesa — Métodos e self
#
# Sem executar, registre cada objeto criado, seus atributos e a saída após cada chamada no programa abaixo. Identifique quais nomes são referências ao mesmo objeto. Depois transcreva, execute e compare.
#
# class Estoque:
#     """Agrupa um saldo e operações didáticas; use quantidades positivas."""
#
#     def __init__(self, saldo):
#         """Recebe o saldo inicial não negativo."""
#         self.saldo = saldo
#
#     def repor(self, quantidade):
#         """Acrescenta a quantidade positiva ao saldo."""
#         self.saldo += quantidade
#
#     def disponivel(self, quantidade):
#         """Consulta se há saldo, sem modificar o objeto."""
#         return self.saldo >= quantidade
#
# estoque = Estoque(4)
# print(estoque.disponivel(5))
# print(estoque.saldo)
#
# Conferência: compare com o exemplo 01. Uma tabela apenas com o resultado final não basta; mostre as mudanças e explique sua ordem.
