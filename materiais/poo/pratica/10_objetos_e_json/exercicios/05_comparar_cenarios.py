# Compare dois cenários — Objetos, arquivos e JSON
#
# Use as mesmas definições dos exemplos deste tópico e compare estes trechos. Antes de executar, registre o estado inicial, as chamadas e o resultado esperado de cada um. Explique a razão da diferença.
#
# CENÁRIO A
# texto = '{"nome": "Batom", "preco_centavos": 800}'
# p = do_registro(json.loads(texto))
# print(p.nome, p.preco_centavos)
#
# CENÁRIO B
# try:
#     do_registro({"nome": "Batom", "preco_centavos": -1})
# except ValueError as erro:
#     print(erro)
#
# Conferência: as saídas esperadas estão nos cabeçalhos dos exemplos 02 e 03. Sua entrega deve explicar o comportamento, não apenas reproduzir essas saídas.
