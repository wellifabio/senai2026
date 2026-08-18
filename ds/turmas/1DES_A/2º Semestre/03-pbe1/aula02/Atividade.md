# Atividade – Sistema de Vendedores

Nesta atividade, você deverá desenvolver um pequeno sistema de cadastro e gerenciamento de vendedores utilizando JavaScript, seguindo a estrutura de módulos trabalhada em aula.

## 1. Mockup de vendedores

Crie um arquivo `mockup.vendedores.js` contendo um array com **no mínimo 4 vendedores**.

Cada vendedor deverá possuir as seguintes informações:

- `matricula`
- `nome`
- `salario`
- `comissao`

A comissão deverá ser representada por um valor entre **0 e 1**, considerando que:

- `0.10` = 10%
- `0.15` = 15%
- `0.20` = 20%

O array deverá ser exportado utilizando `module.exports`.

## 2. Service de vendedores

Crie um arquivo `vendedores.service.js` que importe o mockup e implemente as seguintes funções:

- **Cadastrar vendedor:** receber matrícula, nome, salário e comissão e adicionar um novo vendedor ao array.
- **Listar vendedores:** exibir todos os vendedores cadastrados.
- **Buscar:** realizar uma busca geral nos dados dos vendedores.
- **Buscar por matrícula:** localizar um vendedor utilizando sua matrícula.
- **Buscar por nome:** localizar vendedor(es) utilizando o nome.
- **Excluir por matrícula:** localizar um vendedor pela matrícula e removê-lo do array.

As funções deverão ser **testadas no próprio service**, demonstrando seu funcionamento.

## 3. Fluxogramas

Além do código, deverão ser elaborados **4 fluxogramas**, representando a lógica do sistema:

1. **Fluxograma do código completo:** representar o fluxo geral da execução do programa.
2. **Fluxograma da função `excluirPorMatricula`.**
3. **Fluxograma da função `buscarPorMatricula`.**
4. **Fluxograma da função `buscarPorNome`.**

Os fluxogramas devem representar a **lógica e as decisões do algoritmo**, e não apenas reproduzir as linhas de código.

## Entrega

A entrega deverá ser realizada **através do Git**, contendo:

- `mockup.vendedores.js`
- `vendedores.service.js`
- **4 fluxogramas:**
  - Código completo
  - `excluirPorMatricula`
  - `buscarPorMatricula`
  - `buscarPorNome`

Após realizar a entrega no Git, preencha o formulário abaixo informando os dados solicitados e o link do seu repositório:

**Formulário de entrega:**  
https://forms.cloud.microsoft/r/znJeKSKfEJ

### Atenção

O código deve seguir a estrutura trabalhada em aula e apresentar **organização, indentação e nomenclatura adequadas**.

A entrega realizada pelo Git deve estar organizada e conter todos os arquivos solicitados.
