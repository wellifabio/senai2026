# Aula15 - Persistencia de dados em C

## Arquivos em C
Em C, podemos trabalhar com arquivos para armazenar e recuperar dados de forma persistente. Para isso, utilizamos as funções da biblioteca `<stdio.h>`, como `fopen()`, `fclose()`, `fprintf()`, `fscanf()`, entre outras.

## Exemplo de escrita em arquivo
Vamos criar um programa que escreve informações de clientes em um arquivo:

```c
#include <stdio.h>
struct Cliente {
    char nome[50];
    int idade;
    char email[100];
};

void main() {
    struct Cliente cliente1 = {"João da Silva", 30, "joao.silva@email.com"};
    FILE *arquivo = fopen("clientes.txt", "w"); // Abrindo o arquivo para escrita
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo!\n");
        return 1;
    }
    fprintf(arquivo, "Nome: %s\n", cliente1.nome);
    fprintf(arquivo, "Idade: %d\n", cliente1.idade);
    fprintf(arquivo, "Email: %s\n", cliente1.email);
    fclose(arquivo); // Fechando o arquivo
    printf("Dados do cliente foram salvos no arquivo clientes.txt\n");
    getch();
}
```
Neste exemplo, criamos um arquivo chamado `clientes.txt` e escrevemos as informações do cliente utilizando a função `fprintf()`. Após a escrita, fechamos o arquivo com `fclose()`.

## Exemplo de leitura de arquivo
Agora, vamos criar um programa que lê as informações do cliente a partir do arquivo `clientes.txt`:

```c
#include <stdio.h>
struct Cliente {
    char nome[50];
    int idade;
    char email[100];
};
void main() {
    struct Cliente cliente1;
    FILE *arquivo = fopen("clientes.txt", "r"); // Abrindo o arquivo para leitura
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo!\n");
        return 1;
    }
    fscanf(arquivo, "Nome: %[^\n]\n", cliente1.nome);
    fscanf(arquivo, "Idade: %d\n", &cliente1.idade);
    fscanf(arquivo, "Email: %[^\n]\n", cliente1.email);
    fclose(arquivo); // Fechando o arquivo
    printf("Dados do cliente lidos do arquivo:\n");
    printf("Nome: %s\n", cliente1.nome);
    printf("Idade: %d\n", cliente1.idade);
    printf("Email: %s\n", cliente1.email);
    getch();
}
```
Neste exemplo, abrimos o arquivo `clientes.txt` para leitura e utilizamos a função `fscanf()` para ler as informações do cliente. Após a leitura, fechamos o arquivo e exibimos os dados lidos na tela.
## Conclusão
A manipulação de arquivos em C é essencial para a persistência de dados. Com as funções adequadas, podemos criar, ler, escrever e fechar arquivos para armazenar informações de forma eficiente. As estruturas também são úteis para organizar os dados relacionados, facilitando a leitura e escrita em arquivos.

## Atividades
- 1 A partir da estrutura a seguir "Produto", crie um programa que permita ao usuário inserir informações de um produto e salvar essas informações em um arquivo chamado "produtos.txt". 

```c
struct Produto {
    char nome[50];
    float preco;
    int quantidade;
};
```

- 2 Em seguida, crie outro programa que leia as informações do arquivo "produtos.txt" e exiba os detalhes do produto na tela.
- 3 Modifique o programa de leitura para permitir a leitura de múltiplos produtos, armazenando-os em um vetor de estruturas e exibindo as informações de todos os produtos lidos do arquivo.
- 4 Adicione uma funcionalidade para calcular e exibir o valor total em estoque de cada produto (preço * quantidade) e o valor total geral de todos os produtos em estoque.