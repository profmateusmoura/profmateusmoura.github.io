# Identidade, representação e dados — alias
# Objetivo: Distinguir ser o mesmo objeto de possuir os mesmos valores.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# True

from dataclasses import dataclass


@dataclass(frozen=True)
class Etiqueta:
    """Valor composto por código e nome; tipos anotados não validam entradas."""
    codigo: int
    nome: str


a = Etiqueta(1, "Shampoo")
b = a
print(a is b)
