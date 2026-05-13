# Aula12 - Beecrowd, Vetores e Matrizes

- [Beecrowd](https://beecrowd.com/)
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
## Vetor - Ilustrado com um exemplo de vetor unidimensional
- vetora[5]
```c
#include <stdio.h>
int main() {
    int vetora[5];
    return 0;
}
```
|indices|0|1|2|3|4|
|-|-|-|-|-|-|
|dados|||||

- vetorb[5]
```c
#include <stdio.h>
int main() {
    int vetorb[5] = {52,25,0,15,21};
    return 0;
}
```
|indices|dados|
|-|-|
|0|52|
|1|25|
|2|0|
|3|15|
|4|21|

## Matriz - Ilustrado com um exemplo de matriz bidimensional
- matriza[5][5]
```c
#include <stdio.h>
int main() {
    int matriza[5][5];
    return 0;
}
```
||0|1|2|3|4|
|-|-|-|-|-|-|
|**0**||||||
|**1**||||||
|**2**||||||
|**3**||||||
|**4**||||||

- matrizb[5][5]
```c
#include <stdio.h>
int main() {
    int matrizb[5][5]={{1,0,3,8,5},{2,1,0,3,5},{1,2,3,3,3},{2,2,2,2,2},{0,2,5,8,9}};
    int i, j;
    for(i = 0; i < 5; i++){
        for(j = 0; j < 5; j++)
            printf("%d\t",matrizb[i][j]);
        printf("\n");
    }
    return 0;
}
```
||0|1|2|3|4|
|-|-|-|-|-|-|
|**0**|1|0|3|8|5|
|**1**|2|1|0|3|5|
|**2**|1|2|3|3|3|
|**3**|2|2|2|2|2|
|**4**|0|2|5|8|9|

## Exemplos de código
- O processador calcula ou compara palavras
- palavras são variáveis divididas em três partes [endereço][dados][controle]
- Para acessar o endereço de uma variável utilizamos o caracter **&**
```c
#include <stdio.h>
int main() {
    //int i; Declaração de variável sem nenhum valor (sujeira)
    int i = 10; //Declaração de variável com valor
    printf("Endereço de i: %p\n", &i);
    printf("Conteúdo de i: %d\n", i);
}
```
- A exclusão de dados não existe de fato, o que existe é a alteração dos dados por outros sobrescritos
- **Vetores** são variávies (espaços de memórias com comprimento maior)
```c
#include <stdio.h>
int main() {
    int cpm = 5;
    int vetor[cpm];
    int i;
    for (i = 0; i < cpm; i++) {
        vetor[i] = i;
    }
    for (i = 0; i < cpm; i++) {
        printf("%d\n", vetor[i]);
    }
    return 0;
}
```
- Vetor com dados pré-definidos
```c
#include <stdio.h>
int main() {
    int vetor[5] = {15, 12, 33, 45, 16};
    int i;
    for (i = 0; i < 5; i++) {
        printf("%d\n", vetor[i]);
    }
    return 0;
}
```
- Declaração de um **vetor** e mostrar valores de **memória** **suja**
```c
#include <stdio.h>
int main() {
    int cmp = 5;
    int vetor[cmp];//Declaração com sujeira
    int i;

    //Laço para mostrar o vetor
    for (i = 0; i < cmp; i++) {
        printf("%d\n", vetor[i]);
    }
    return 0;
}
```

## Conclusão
Vetores e matrizes são estruturas de dados fundamentais em programação, permitindo armazenar e manipular grandes quantidades de dados de forma eficiente. Compreender como acessar, modificar e iterar sobre esses elementos é essencial para o desenvolvimento de programas mais complexos.

|Lista de exercícios 04 - Vetores e Matrizes|
|-|
|1) Crie uma matriz de 5 por 5 com números randômicos de 0 a 100 e mostre na tela|
|2) Crie um vetor com 25 números randômicos de 0 a 100 e mostre na tela|
|3) Reescreva o programa da atividade 2 e mostre também o maior número aleatório gerado e em qual posição do vetor se encontra|
|4) Reescreva o programa da atividade 1 e mostre também o menor número aleatório gerado e em qual posição do vetor se encontra|
|5) Reescreva o programa da atividade 2 e peça ao usuário para informar um número e verifique se este número está no vetor, caso positivo informe em qual posição do vetor ele está, senão informe que o número não foi encontrado|
|6) Reescreva o programa da atividade 1 e peça ao usuário para informar um número e verifique se este número está na matriz, caso positivo informe em qual posição do vetor ele está, senão informe que o número não foi encontrado|
|7) Reescreva o programa da atividade 2 e peça ao usuário para informar se deseja ver os números em ordem 1. crescente ou 2. decrescente, ordene e mostre conforme escolha do usuário|
|8) Desenvolva um programa que permita ao usuário inserir elementos em um vetor de 5 números inteiros e depois exiba os elementos em ordem inversa|
|9) Desenvolva um programa que permita ao usuário inserir elementos (números reais) em uma matriz de 3 por 3 e depois exiba os elementos em ordem inversa|
|10) Desenvolva um programa que permita ao usuário inserir nomes em um vetor de 5 elementos e depois exiba todos os nomes|
|11) Desenvolva um programa que permita ao usuário inserir 10 números inteiros e depois mostre em ordem crescente|
|12) Reescreva o programa anterior, porem exibindo os números em ordem decrescente|
|13) Desenvolva um programa que permita ao usuário inserir 10 números inteiros e depois mostre o maior e o menor número inserido|
|14) Reescreva o programa anterior, porem mostrando a posição do maior e do menor número inserido|
|15) Desenvolva um programa que permita ao usuário inserir 5 nomes e depois exiba todos os nomes em ordem alfabética|
