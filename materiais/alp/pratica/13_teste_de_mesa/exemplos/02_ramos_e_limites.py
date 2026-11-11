# 02 — Rastrear ramos e limites
# Objetivo: Conferir exatamente onde uma classificação muda.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Uma cadeia if/elif executa somente o primeiro ramo verdadeiro.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: '7: A'

def classificar(nota):
    """Classifique nota válida de 0 a 10 com cortes em 5 e 7."""
    if nota >= 7:
        return "A"
    elif nota >= 5:
        return "R"
    return "F"

# nota | >=7  | >=5 avaliada? | retorno
# 4.9  | False| sim, False   | F
# 5    | False| sim, True    | R
# 7    | True | não          | A
print("4.9:", classificar(4.9))
print("5:", classificar(5))
print("7:", classificar(7))
# São casos de fronteira; não basta testar somente notas intermediárias.
