# Guia docente

Use previsão individual, discussão em duplas, execução e comparação. Os exercícios não incluem solução. O teste de mesa exige registros intermediários, além da saída. Para avançar, o estudante deve explicar por que a transformação funciona e quais entradas aceita.

## Listas

### Alterar sem aumentar

```text
['Shampoo', 'Sabonete', 'Creme']
3
```

### A variável muda, a saída cresce

```text
Shampoo
Batom
Creme
```

### O fim fica de fora

```text
['B', 'C', 'D']
```

### Índices negativos

```text
C B
```

### Acrescentar um e vários

```text
[1, [2, 3]]
[1, 2, 3]
```

### Inserção desloca posições

```text
[10, 20, 30]
```

### Remover por valor e posição

```text
2
[7, 9]
```

### Pertencimento e contagem

```text
True 3 0
```

### Filtrar sem modificar o percurso

```text
[2, 8]
[2, 7, 1, 8]
```

### Acumular total e média

```text
60 20.0
```

### Percorrer com enumerate

```text
0 Batom
1 Creme
```

### Cópia e referência

```text
[9, 2] [9, 2] [1, 2]
```

### Ordenar e inverter

```text
[2, 1, 3]
[1, 2, 3]
```

### Compreensão com transformação

```text
[4, 8]
```

### Reposição por posição

```text
[3, 5, 3]
```

## Tuplas

### Desempacote uma tupla

```text
101 Shampoo 25
```

### Tupla de um elemento

```text
tuple int
```

### Leitura e corte

```text
10 30
(10, 20)
```

### Construir uma nova tupla

```text
(1, 2)
(1, 2, 3)
```

### Retorno com dois valores

```text
2 8
```

### Mutabilidade interna

```text
('A', [2, 3, 4])
```

## Dicionários

### Atualizar por chave

```text
5
```

### Consulta com valor padrão

```text
0
False
```

### Acrescentar e retirar campos

```text
4 {'nome': 'Creme'}
```

### Percorrer pares

```text
A 3
B 7
```

### Contar frequências

```text
{'A': 2, 'B': 1}
```

### Índice de produtos por código

```text
B
```

## Conjuntos

### Interseção entre lojas

```text
['Batom']
```

### Eliminar repetições

```text
['A', 'B', 'C']
```

### Adicionar e descartar

```text
[1, 2, 3]
```

### Diferença e diferença simétrica

```text
[1, 3]
[1, 3, 4]
```

### Subconjunto

```text
True
```

### Interseção vazia

```text
True
```

## Estruturas combinadas e JSON

### Filtre registros completos

```text
Shampoo
```

### Uma cópia de dados aninhados

```text
[[2, 8], [4, 6]]
[[99, 8], [4, 6]]
```

### Texto JSON vira objeto Python

```text
Shampoo
True
```

### Matriz com linhas independentes

```text
[[0, 7], [0, 0], [0, 0]]
```

### Total por linha de estoque

```text
5
5
```

### Serializar e recuperar

```text
{"ativo": true, "desconto": null}
True
```

## Buscas

### Uma comparação por vez

```text
2
```

### Reduza o intervalo

```text
5
```

### Todas as ocorrências

```text
[0, 2]
```

### Busca ausente

```text
-1
```

### Comparações até encontrar

```text
3
```

### Primeira ocorrência com bisect

```text
1
4
```

## Ordenação

### Trocas entre vizinhos

```text
[1, 2, 3]
```

### Escolha o menor restante

```text
[1, 2, 3]
```

### Abra espaço e insira

```text
[1, 2, 3]
```

### Divida e intercale

```text
[1, 2, 3, 4]
```

### Particione em torno do pivô

```text
[1, 2, 3, 3, 4]
```

### Ordenar registros por chave

```text
['B', 'A']
```

### Estabilidade e empates

```text
[('B', 1), ('A', 2), ('C', 2)]
```

### Detectar sequência ordenada

```text
True
```

## Pilhas e filas

### Desfaça a última ação

```text
digitar B
['digitar A']
```

### Atenda por ordem de chegada

```text
Ana
['Bia', 'Caio', 'Duda']
```

### Pilha vazia

```text
vazia
```

### Desfazer e refazer

```text
['A'] ['B']
['A', 'B'] []
```

### Parênteses balanceados

```text
True
```

### Fila com chegada durante atendimento

```text
P1
['P2', 'P3']
```

### Rodízio de tarefas

```text
A
B
C
A
```

### Comparar LIFO e FIFO

```text
3 1
```

## Encadeamento e hash

### Siga a próxima referência

```text
10
20
```

### Duas chaves no mesmo balde

```text
[[], [], [12, 7], [], [9]]
```

### Inserir no início encadeado

```text
B A
```

### Remover a cabeça encadeada

```text
20
```

### Buscar em um balde

```text
True
```

### Chave composta imutável

```text
3
```

## Complexidade e recursão

### Conte operações, não segundos

```text
2 4
4 16
8 64
```

### Empilhe chamadas e retorne

```text
6
```

### Laços consecutivos

```text
8
```

### Redução pela metade

```text
4
```

### Triângulo de comparações

```text
6
```

### Fatorial com caso base

```text
24
```

## Árvores

### Escolha um ramo da árvore

```text
8
3
6
```

### Raiz e filhos

```text
['B', 'C']
3
```

### Contar folhas

```text
2
```

### Percurso em pré-ordem

```text
A
B
D
C
```

### Altura em arestas

```text
2
```

### Percurso em ordem na BST

```text
2
4
6
```

## Grafos

### Busca em largura com fila

```text
A
B
C
D
```

### Vizinhança e grau

```text
['B', 'C']
2
```

### Contar arestas não direcionadas

```text
2
```

### Vértice isolado

```text
['C']
```

### Busca em profundidade iterativa

```text
A
B
D
C
```

### Distâncias em número de arestas

```text
{'A': 0, 'B': 1, 'C': 2}
```

