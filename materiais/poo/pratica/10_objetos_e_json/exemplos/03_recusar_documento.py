# Objetos, arquivos e JSON — recusar documento
# Objetivo: Separar o modelo de objetos do formato utilizado para trocar dados.
# Execução: Python 3.10+, sem entrada e sem bibliotecas externas.
# Os dados são sintéticos e não alteram bases de outros cursos.
# Antes de executar, preveja o estado e a saída.
# Confira:
# Preço inválido

import json


class Produto:
    """Representa um nome válido e preço em centavos."""

    def __init__(self, nome, preco_centavos):
        """Valida o estado reconstruído ou criado manualmente."""
        if not isinstance(nome, str) or not nome.strip():
            raise ValueError("Nome inválido")
        if type(preco_centavos) is not int or preco_centavos < 0:
            raise ValueError("Preço inválido")
        self.nome = nome
        self.preco_centavos = preco_centavos


def para_registro(produto):
    """Converte o domínio para campos simples de JSON."""
    return {"nome": produto.nome, "preco_centavos": produto.preco_centavos}


def do_registro(registro):
    """Exige campos mínimos; valores passam pelo construtor."""
    if not isinstance(registro, dict) or not {"nome", "preco_centavos"} <= registro.keys():
        raise ValueError("Registro incompleto")
    return Produto(registro["nome"], registro["preco_centavos"])


try:
    do_registro({"nome": "Batom", "preco_centavos": -1})
except ValueError as erro:
    print(erro)
