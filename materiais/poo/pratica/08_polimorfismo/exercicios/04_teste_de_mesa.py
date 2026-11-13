# Teste de mesa — Polimorfismo e estratégias
#
# Sem executar, registre cada objeto criado, seus atributos e a saída após cada chamada no programa abaixo. Identifique quais nomes são referências ao mesmo objeto. Depois transcreva, execute e compare.
#
# class FreteFixo:
#     """Calcula um frete fixo didático em centavos."""
#
#     def calcular_centavos(self):
#         """Retorna 500 centavos."""
#         return 500
#
#
# class RetiradaNaLoja:
#     """Atende ao mesmo contrato sem custo de frete."""
#
#     def calcular_centavos(self):
#         """Retorna zero centavos."""
#         return 0
#
#
# class Orcamento:
#     """Recebe uma estratégia de frete em vez de escolher seu tipo."""
#
#     def __init__(self, subtotal, frete):
#         """Recebe subtotal válido em centavos e estratégia compatível."""
#         self.subtotal = subtotal
#         self.frete = frete
#
#     def total(self):
#         """Soma subtotal e frete na mesma unidade."""
#         return self.subtotal + self.frete.calcular_centavos()
#
# print(Orcamento(2000, FreteFixo()).total())
#
# Conferência: compare com o exemplo 01. Uma tabela apenas com o resultado final não basta; mostre as mudanças e explique sua ordem.
