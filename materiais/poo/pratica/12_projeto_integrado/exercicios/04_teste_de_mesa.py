# Teste de mesa — Projeto: reposição entre unidades
#
# Sem executar, registre cada objeto criado, seus atributos e a saída após cada chamada no programa abaixo. Identifique quais nomes são referências ao mesmo objeto. Depois transcreva, execute e compare.
#
# class Estoque:
#     """Posição didática do mesmo produto em uma unidade."""
#
#     def __init__(self, unidade, saldo):
#         """Cria uma posição com saldo inteiro não negativo."""
#         if type(saldo) is not int or saldo < 0:
#             raise ValueError("Saldo inválido")
#         self.unidade = unidade
#         self.saldo = saldo
#
#
# def transferir(origem, destino, quantidade):
#     """Coordena uma transferência em memória, sem concorrência ou persistência."""
#     if origem is destino:
#         raise ValueError("Posições devem ser distintas")
#     if type(quantidade) is not int or quantidade <= 0:
#         raise ValueError("Quantidade inválida")
#     if quantidade > origem.saldo:
#         raise ValueError("Saldo insuficiente")
#     origem.saldo -= quantidade
#     destino.saldo += quantidade
#
# a, b = Estoque("Centro", 8), Estoque("Norte", 2)
# transferir(a, b, 3)
# print(a.saldo, b.saldo)
#
# Conferência: compare com o exemplo 01. Uma tabela apenas com o resultado final não basta; mostre as mudanças e explique sua ordem.
