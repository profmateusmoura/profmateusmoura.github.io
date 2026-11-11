# Alerta de estoque — cenário didático Lojas Blue
# Objetivo: Classificar um saldo por comparação com o mínimo.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Sugestão até o mínimo: 4'
# Sem entrada interativa.

# Recorte da posição unidade 1, produto 4.
quantidade = 4
minimo = 8
if quantidade < minimo:
    print("Estoque crítico")
    print("Sugestão até o mínimo:", minimo - quantidade)
else:
    print("Sem falta até o mínimo")
# Igualdade com o mínimo pertence ao segundo caminho.
