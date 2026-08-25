# Aula04 - SQL

### Capacidades Técnicas
- 9 Utilizar linguagem de definição de dados (DDL)
- 10 Utilizar linguagem de manipulação de dados (DML)

## Conhecimentos
  - 2.2 SQL (Structured Query Language)
  - 2.4  DDL (Data Definition Language)
    - 2.4.1 CREATE DATABASE
    - 2.4.2 DROP DATABASE
    - 2.4.3 USE
    - 2.4.4 CREATE TABLE
    - 2.4.5 ALTER TABLE
    - 2.4.6 DROP TABLE
    - 2.4.7 CREATE INDEX
    - 2.4.8 DROP INDEX

## SQL - Structured Query Language (Linguagem de Consulta Estruturada)
é a linguagem padrão usada para criar, consultar, atualizar e gerenciar dados em bancos de dados relacionais
### Divisões da linguagem SQL
- DDL - Data Definition Language (Linguagem de Definição de Dados)
- DML - Data Manipulation Language (Linguagem de Manipulação de Dados)
- DCL - Data Control Language (Linguagem de Controle de Dados)
- DQL - Data Query Language (Linguagem de Consulta de Dados)

## Prática
Vamos criar com SQL o banco de dados do: **Sistema de Compras do Caixeiro Viajante** cujo MER foi apresentado na aula anterior.
- O banco de dados será criado no SGBD MySQL Workbench.

|Entidade|Atributo|Tipo|Tamanho|Descrição|
|-|-|-|-|-|
|Produto|id|int|11|Chave primária|
|Produto|nome|varchar|40|nome do produto|
|Produto|descrição|varchar|200|descrição do produto|
|Produto|peso|decimal|10,2|peso em Kg|
|Produto|volume|decimal|10,2|volume em litros|
|Produto|valor|decimal|10,2|valor em reais|
|Produto|quantidade|int|11|Atributo derivado do cáclulo da diferença entre compra e venda|
|Fornecedor|id|int|11|Chave primária|
|Fornecedor|nome|varchar|40|nome do fornecedor|
|Fornecedor|cidade|varchar|40|endereço cidade|
|Fornecedor|estado|varchar|40|endereço estado|
|Fornecedor|pais|varchar|40|endereço pais|
|Fornecedor|referencia|varchar|40|endereço referencia|
|Fornecedor|observação|varchar|200|outros dados do fornecedor|
|Compra|id|int|11|Chave primária|
|Compra|id_produto|int|11|Chave estrangeira, referencia: Produto(id)|
|Compra|id_fornecedor|int|11|Chave estrangeira, referencia: Fornecedor(id)|
|Compra|data|Date||Data da compra|
|Compra|quantidade|int|11|Quantidade comprada|
|Compra|custo_unitario|decimal|10,2|Custo unitário da mercadoria|
|Compra|total|decimal|10,2|Atributo derivado do cálculo da quantidade vezes o custo_unitário|

![MER DER](./caixeiro/mer_der_logico.png)

# Atividades
- Crie o banco de dados do **[Projeto: Gestão de Pedidos](https://github.com/wellifabio/sesi_bcd_aula03_mer_der_dd_dados_2026.git)**
- Crie o banco de dados do sistema que você desenvolveu na aula03