"""Escolha o menor restante

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

valores = [3, 1, 2]
for i in range(len(valores)-1):
    menor = i
    for j in range(i+1, len(valores)):
        if valores[j] < valores[menor]:
            menor = j
    valores[i], valores[menor] = valores[menor], valores[i]
print(valores)
