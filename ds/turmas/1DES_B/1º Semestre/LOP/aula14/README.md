# Aula 14 - [Estruturas](https://meet.google.com/wye-njof-zve)

## Estruturas
Estruturas são tipos de dados compostos que permitem agrupar diferentes tipos de dados sob um mesmo nome. Em C, as estruturas são definidas usando a palavra-chave `struct`. Elas são úteis para organizar e representar dados complexos de forma mais clara e eficiente.

## Exemplos de estrutura

### Cliente
```c
struct Cliente {
    char nome[50];
    int idade;
    char email[100];
};
```
### Produto
```c
struct Produto {
    char nome[50];
    float preco;
    int quantidade;
};
```

### Utilizando estruturas para armazenar e exibir informações
Vamos utilizar a estrutura `Cliente` para criar um programa que armazena e exibe informações de um cliente:

```c
#include <stdio.h>

struct Cliente {
    char nome[50];
    int idade;
    char email[100];
};

int main() {
    struct Cliente cliente1;

    // Atribuindo valores aos campos da estrutura
    strcpy(cliente1.nome, "João da Silva");
    cliente1.idade = 30;
    strcpy(cliente1.email, "joao.silva@example.com");

    // Exibindo as informações do cliente
    printf("Nome: %s\n", cliente1.nome);
    printf("Idade: %d\n", cliente1.idade);
    printf("Email: %s\n", cliente1.email);

    return 0;
}
```
Uma estrutura se torna um tipo de dado personalizado, e podemos criar variáveis desse tipo para armazenar informações relacionadas. No exemplo acima, criamos uma variável `cliente1` do tipo `struct Cliente` e atribuímos valores aos seus campos.

### Utilizando como vetor
Podemos também criar um vetor de estruturas para armazenar informações de múltiplos clientes:

```c
#include <stdio.h>
#include <string.h>
struct Cliente {
    char nome[50];
    int idade;
    char email[100];
};

int main() {
    struct Cliente clientes[3];

    // Atribuindo valores aos campos da estrutura para cada cliente
    strcpy(clientes[0].nome, "João da Silva");
    clientes[0].idade = 30;
    strcpy(clientes[0].email, "joao.silva@example.com");

    strcpy(clientes[1].nome, "Maria Souza");
    clientes[1].idade = 25;
    strcpy(clientes[1].email, "maria.souza@example.com");

    strcpy(clientes[2].nome, "Carlos Oliveira");
    clientes[2].idade = 35;
    strcpy(clientes[2].email, "carlos.oliveira@example.com");

    // Exibindo as informações dos clientes
    for (int i = 0; i < 3; i++) {
        printf("Cliente %d:\n", i + 1);
        printf("Nome: %s\n", clientes[i].nome);
        printf("Idade: %d\n", clientes[i].idade);
        printf("Email: %s\n", clientes[i].email);
        printf("\n");
    }

    return 0;
}
```
Neste exemplo, criamos um vetor de estruturas `clientes` para armazenar informações de três clientes diferentes. Utilizamos um loop para exibir as informações de cada cliente de forma organizada.

### Atividades
- 1 Crie um programa que utilize uma estrutura para armazenar informações de um produto (nome, preço, quantidade) e exiba essas informações.
- 2 Ao exibir as informações do produto, calcule e exiba o valor total em estoque (preço * quantidade).
- 3 Crie um vetor de estruturas para armazenar informações de múltiplos produtos e exiba as informações de cada produto, incluindo o valor total em estoque e o total geral.
- 4 Modifique o programa para permitir que o usuário insira as informações dos produtos em vez de atribuí-las diretamente no código.
