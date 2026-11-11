# Orçamento de shampoo — cenário didático Lojas Blue
# Objetivo: Aplicar produto e percentual em um orçamento independente.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Total: 67.23'
# Sem entrada interativa.

preco = 24.9
quantidade = 3
taxa = 10
# Quantidade vezes preço fornece o total antes da promoção.
bruto = preco * quantidade
desconto = bruto * taxa / 100
final = bruto - desconto
print(f"Bruto: {bruto:.2f}")
print(f"Desconto: {desconto:.2f}")
print(f"Total: {final:.2f}")
