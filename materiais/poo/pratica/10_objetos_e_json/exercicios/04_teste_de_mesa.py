# Teste de mesa — Objetos, arquivos e JSON
#
# Sem executar, registre cada objeto criado, seus atributos e a saída após cada chamada no programa abaixo. Identifique quais nomes são referências ao mesmo objeto. Depois transcreva, execute e compare.
#
# import json
#
#
# class Produto:
#     """Representa um nome válido e preço em centavos."""
#
#     def __init__(self, nome, preco_centavos):
#         """Valida o estado reconstruído ou criado manualmente."""
#         if not isinstance(nome, str) or not nome.strip():
#             raise ValueError("Nome inválido")
#         if type(preco_centavos) is not int or preco_centavos < 0:
#             raise ValueError("Preço inválido")
#         self.nome = nome
#         self.preco_centavos = preco_centavos
#
#
# def para_registro(produto):
#     """Converte o domínio para campos simples de JSON."""
#     return {"nome": produto.nome, "preco_centavos": produto.preco_centavos}
#
#
# def do_registro(registro):
#     """Exige campos mínimos; valores passam pelo construtor."""
#     if not isinstance(registro, dict) or not {"nome", "preco_centavos"} <= registro.keys():
#         raise ValueError("Registro incompleto")
#     return Produto(registro["nome"], registro["preco_centavos"])
#
# p = Produto("Creme", 1200)
# print(json.dumps(para_registro(p), ensure_ascii=False))
#
# Conferência: compare com o exemplo 01. Uma tabela apenas com o resultado final não basta; mostre as mudanças e explique sua ordem.
