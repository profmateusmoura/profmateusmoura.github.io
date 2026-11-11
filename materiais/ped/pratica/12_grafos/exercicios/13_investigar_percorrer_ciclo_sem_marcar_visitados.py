# Percorrer ciclo sem marcar visitados
# Tipo: investigar e corrigir
#
# ENUNCIADO
# Sem executar a versão defeituosa, explique a repetição infinita. Corrija marcando vértices ao enfileirar.
#
# TRECHO PARA ANALISAR (não execute sem revisar)
# from collections import deque
# g = {"A": ["B"], "B": ["A"]}
# fila = deque(["A"])
# while fila:
#     no = fila.popleft()
#     fila.extend(g[no])
#
# DICA
# Use um conjunto de descobertos e inclua o vértice inicial.
#
# CASOS PARA CONFERIR
# Visita A e B uma única vez e termina com fila vazia.
#
# APOIO
# Estude os exemplos deste assunto e registre em comentários a causa do erro e a correção.
