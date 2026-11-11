# Confundir posição de inserção com sucesso
# Tipo: investigar e corrigir
#
# ENUNCIADO
# Corrija a consulta para anunciar encontrado apenas quando o valor existir. Trate também alvo maior que todos.
#
# TRECHO PARA ANALISAR (não execute sem revisar)
# from bisect import bisect_left
# a = [1, 3, 7]
# i = bisect_left(a, 5)
# print("encontrado", i)
#
# DICA
# Confira o limite antes de acessar a[i].
#
# CASOS PARA CONFERIR
# Alvo 5: ausente; 7: índice 2; 9: ausente; lista vazia: ausente.
#
# APOIO
# Estude os exemplos deste assunto e registre em comentários a causa do erro e a correção.
