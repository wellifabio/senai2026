# Aula12 - Beecrowd, Vetores e Matrizes

- [Beecrowd](https://becrowd.com/)
- [Vetores](#vetores)
- [Matrizes](#matrizes)

## [Beecrowd](https://beecrowd.com/)
Becrowd https://beecrowd.com/ é uma plataforma online de programação competitiva que oferece uma variedade de problemas para os programadores resolverem. Os usuários podem submeter suas soluções em várias linguagens de programação e receber feedback imediato sobre a correção e eficiência de seus códigos.

## Vetores
Um vetor é uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo. Em muitas linguagens de programação, os vetores são implementados como arrays, que são blocos contíguos de memória.

## Matrizes
Uma matriz é uma estrutura de dados bidimensional (ou multidimensional) que armazena elementos em linhas e colunas. Assim como os vetores, as matrizes também armazenam elementos do mesmo tipo.

## Operações com Vetores e Matrizes
- Acesso a elementos: Você pode acessar elementos específicos em um vetor ou matriz usando índices. Em muitas linguagens, os índices começam em 0.
### Exemplos:
- exp01.c
```c
int vetor[5] = {1, 2, 3, 4, 5};
printf("%d", vetor[2]); // Imprime 3
```
- exp02.c
```c
int matriz[2][3] = {{1, 2, 3}, {4, 5, 6}};
printf("%d", matriz[1][2]); // Imprime 6
```
- Modificação de elementos: Você pode modificar os elementos de um vetor ou matriz atribuindo novos valores a eles.
### Exemplos:
- exp03.c
```c
int vetor[5] = {1, 2, 3, 4, 5};
vetor[0] = 10; // Modifica o primeiro elemento para 10
printf("%d", vetor[0]); // Imprime 10
```
- exp04.c
```c
int matriz[2][3] = {{1, 2, 3}, {4, 5, 6}};
matriz[0][1] = 20; // Modifica o elemento na primeira linha e segunda coluna para 20
printf("%d", matriz[0][1]); // Imprime 20
```
- Iteração: Você pode iterar sobre os elementos de um vetor ou matriz usando loops.
### Exemplos:
- exp05.c
```c
int vetor[5] = {1, 2, 3, 4, 5};
for (int i = 0; i < 5; i++) {
    printf("%d ", vetor[i]); // Imprime os elementos do vetor
}
```
- exp06.c
```c
int matriz[2][3] = {{1, 2, 3}, {4, 5, 6}};
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matriz[i][j]); // Imprime os elementos da matriz
    }
}
```
## Conclusão
Vetores e matrizes são estruturas de dados fundamentais em programação, permitindo armazenar e manipular grandes quantidades de dados de forma eficiente. Compreender como acessar, modificar e iterar sobre esses elementos é essencial para o desenvolvimento de programas mais complexos.