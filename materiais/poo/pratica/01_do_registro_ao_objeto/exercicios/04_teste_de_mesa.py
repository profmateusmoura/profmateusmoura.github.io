# Teste de mesa — Do registro ao objeto
#
# Sem executar, registre cada objeto criado, seus atributos e a saída após cada chamada no programa abaixo. Identifique quais nomes são referências ao mesmo objeto. Depois transcreva, execute e compare.
#
# def retirar(produto, quantidade):
#     """Retira um inteiro positivo se houver saldo; falhas preservam o registro."""
#     if type(quantidade) is not int or quantidade <= 0:
#         raise ValueError("Quantidade deve ser um inteiro positivo")
#     if quantidade > produto["estoque"]:
#         raise ValueError("Saldo insuficiente")
#     produto["estoque"] -= quantidade
#
# produto = {"nome": "Shampoo", "estoque": 8}
# retirar(produto, 3)
# print(produto["estoque"])
#
# Conferência: compare com o exemplo 01. Uma tabela apenas com o resultado final não basta; mostre as mudanças e explique sua ordem.
