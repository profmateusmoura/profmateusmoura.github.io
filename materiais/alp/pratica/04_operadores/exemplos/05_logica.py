# 05 — Operadores lógicos
# Objetivo: Combinar condições com and, or e not.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Use parênteses para tornar explícitos os grupos de condições.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Sem convite: True'

idade = 20
possui_convite = False
# and exige ambas as condições; or exige pelo menos uma.
pode_entrar = (idade >= 18) and possui_convite
possui_beneficio = (idade < 12) or (idade >= 60)
print("Pode entrar:", pode_entrar)
print("Possui benefício:", possui_beneficio)
# not inverte um valor booleano.
print("Sem convite:", not possui_convite)
