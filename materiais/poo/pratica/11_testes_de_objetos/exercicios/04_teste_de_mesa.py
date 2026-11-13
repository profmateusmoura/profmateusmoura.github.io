# Teste de mesa — Testar comportamentos de objetos
#
# Sem executar, registre cada objeto criado, seus atributos e a saída após cada chamada no programa abaixo. Identifique quais nomes são referências ao mesmo objeto. Depois transcreva, execute e compare.
#
# class Estoque:
#     """Mantém saldo inteiro não negativo para testes de comportamento."""
#
#     def __init__(self, saldo):
#         """Valida o saldo inicial."""
#         if type(saldo) is not int or saldo < 0:
#             raise ValueError("Saldo inválido")
#         self.saldo = saldo
#
#     def retirar(self, quantidade):
#         """Valida antes de alterar; quantidade deve ser inteira positiva."""
#         if type(quantidade) is not int or quantidade <= 0 or quantidade > self.saldo:
#             raise ValueError("Retirada inválida")
#         self.saldo -= quantidade
#
# e = Estoque(5)
# e.retirar(2)
# assert e.saldo == 3
# print("Caso comum: OK")
#
# Conferência: compare com o exemplo 01. Uma tabela apenas com o resultado final não basta; mostre as mudanças e explique sua ordem.
