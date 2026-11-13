# Teste de mesa — Invariantes e validação
#
# Sem executar, registre cada objeto criado, seus atributos e a saída após cada chamada no programa abaixo. Identifique quais nomes são referências ao mesmo objeto. Depois transcreva, execute e compare.
#
# class Estoque:
#     """Mantém saldo inteiro não negativo por meio da interface pública."""
#
#     def __init__(self, saldo):
#         """Recusa estados iniciais inválidos."""
#         if type(saldo) is not int or saldo < 0:
#             raise ValueError("Saldo inválido")
#         self._saldo = saldo
#
#     def consultar(self):
#         """Devolve o saldo sem alterá-lo."""
#         return self._saldo
#
#     def retirar(self, quantidade):
#         """Recusa entradas inválidas antes de qualquer alteração."""
#         if type(quantidade) is not int or quantidade <= 0:
#             raise ValueError("Quantidade inválida")
#         if quantidade > self._saldo:
#             raise ValueError("Saldo insuficiente")
#         self._saldo -= quantidade
#
# e = Estoque(4)
# e.retirar(4)
# print(e.consultar())
#
# Conferência: compare com o exemplo 01. Uma tabela apenas com o resultado final não basta; mostre as mudanças e explique sua ordem.
