# Problema evolutivo — reposição das lojas

## Situação e dados de entrada

A equipe precisa saber quais posições estão abaixo do mínimo e quantas unidades repor.
As quatro posições abaixo são as mesmas nas três disciplinas e existem na base fornecida.

| Unidade | Produto | Nome | Saldo | Mínimo | Falta inicial |
|---:|---:|---|---:|---:|---:|
| 1 | 1 | Shampoo Nutritivo 350 ml | 18 | 10 | 0 |
| 1 | 4 | Perfume Floral 100 ml | 4 | 8 | 4 |
| 1 | 10 | Protetor Solar Facial FPS 60 | 6 | 10 | 4 |
| 3 | 2 | Condicionador Nutritivo 350 ml | 9 | 10 | 1 |

Uma posição é crítica quando saldo < mínimo. A sugestão é a diferença positiva,
ou zero quando o saldo já atinge o mínimo. Quantidade igual ao mínimo é regular.

## Primeira conferência

O recorte tem **três posições críticas** e **nove unidades a repor**.
Considere uma retirada válida de nove unidades apenas da posição (1,1).
Seu saldo muda de 18 para 9, e sua falta passa de zero para um.
O novo resumo tem **quatro posições críticas** e **dez unidades a repor**.
As outras três posições não mudam.

## A mesma pergunta em cada disciplina

| Disciplina | Representação e responsabilidade |
|---|---|
| ALP | Receber ou fornecer saldo e mínimo, calcular uma posição por vez e manter contadores e acumuladores escalares. |
| PED | Carregar a base, selecionar e copiar o recorte, consultar registros e produzir nova lista de sugestões. |
| POO | Converter posições em objetos, realizar a retirada por operação do objeto e consultar um serviço de reposição. |

O que muda é a solução e sua organização; os números de referência permanecem os mesmos.
Em ALP, percorra o raciocínio uma posição de cada vez. Em PED, explique a cópia dos registros.
Em POO, explique quem valida a retirada, quem mantém o estado e quem coordena as sugestões.

## Casos para conferir

1. Recorte inicial: três críticas, total nove.
2. Após retirada de nove em (1,1): quatro críticas, total dez.
3. Posição com saldo igual ao mínimo: falta zero.
4. Recorte vazio, em PED e POO: nenhuma sugestão e total zero.
5. Retirada acima do saldo: recusa e estado preservado, nas soluções com validação.

## Extensão

Compare alvo igual ao mínimo com alvo igual ao mínimo mais duas unidades de reserva.
Na configuração inicial, os totais sugeridos passam de nove para quinze.
A definição original de estoque crítico continua sendo saldo abaixo do mínimo;
a política de reserva muda o planejamento de reposição.

## Exemplo desta disciplina

Estude [12_decomposicao_de_problemas/exemplos/91_caso_reposicao.py](12_decomposicao_de_problemas/exemplos/91_caso_reposicao.py).

Execute pela raiz de ALP:

```text
python 12_decomposicao_de_problemas/exemplos/91_caso_reposicao.py
```
