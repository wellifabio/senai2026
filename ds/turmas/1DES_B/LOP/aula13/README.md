# Aula13 - Funções

## O que são funções?
Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas permitem que você escreva código mais organizado, modular e fácil de manter. Em C, as funções são definidas com um nome, um tipo de retorno e uma lista de parâmetros (opcional).

## Estrutura de uma função
A estrutura básica de uma função em C é a seguinte:

```c
tipo_de_retorno nome_da_funcao(lista_de_parametros) {
    // corpo da função
    return valor_de_retorno; // se o tipo de retorno não for void
}
```

## Procedimentos
Quando uma função não retorna um valor, ela é chamada de procedimento. Em C, isso é indicado pelo tipo de retorno `void`. Por exemplo:

```c
void nome_do_procedimento(lista_de_parametros) {
    // corpo do procedimento
}
```

## Exemplos
### Exemplo 1: Função que retorna um valor
```c
#include <stdio.h>
int soma(int a, int b) {
    return a + b;
}
int main() {
    int resultado = soma(5, 3);
    printf("A soma é: %d\n", resultado);
    return 0;
}
```
### Exemplo 2: Procedimento que não retorna um valor
```c
#include <stdio.h>
void imprimirMensagem() {
    printf("Olá, esta é uma mensagem!\n");
}
int main() {
    imprimirMensagem();
    return 0;
}
```

## Desafios
### Desafio 1:
Escreva um programa com 4 funções que realizem as operações básicas de soma, subtração, multiplicação e divisão. O programa deve solicitar ao usuário dois números em seguida exibir um menu para escolher a operação desejada e mostrar o resultado.
### Desafio 2:
Crie um programa que contenha uma função para calcular o fatorial de um número. O programa deve solicitar ao usuário um número inteiro e exibir o resultado do fatorial.
### Desafio 3:
Escreva um programa que contenha uma função para verificar se um número é primo. O programa deve solicitar ao usuário um número inteiro e exibir se ele é primo ou não.
### Desafio 4:
Crie um programa que contenha uma função para calcular a média de um array de números. O programa deve solicitar ao usuário o tamanho do array, os elementos do array e exibir a média dos números.
### Desafio 5:
Escreva um programa que contenha uma função para ordenar um array de números em ordem crescente. O programa deve solicitar ao usuário o tamanho do array, os elementos do array e exibir o array ordenado.
