# Aula05 - Manipulação de dados com SQL

## Capacidades técnicas
- 9 Utilizar linguagem de definição de dados (DDL)
- 10 Utilizar linguagem de manipulação de dados (DML)
- 11 Utilizar funções nativas do banco de dados

## Conhecimentos
  - 2.5 Migração de dados
    - 2.5.1 Exportação de dados
    - 2.5.2 Importação de dados
  - 2.6  DML (Data Manipulation Language)
    - 2.6.1 INSERT
    - 2.6.2 UPDATE
    - 2.6.3 DELETE
    - 2.6.4 SELECT

## Capacidades Socioemocionais
- 1 Demonstrar autogestão
- 2 Demonstrar pensamento analítico
- 4 Demonstrar autonomia

## Prática
Vamos executar o script de criação do banco de dados do Caixeiro Viajante, que será utilizado para a prática de manipulação de dados com SQL.

|MER DER Conceitual - BD Caixeiro Viajante|
|-|
|![MER DER](./mer_der_conceitual_caixeiro.png)|

- Crie uma pasta na área de trabalho com o nome `compras_caixeiro`;
- Abra a pasta com VsCode dentro dela crie um arquivo chamado `ddl.sql`.
- Copie e cole o Script abaixo no arquivo `ddl.sql` e salve o arquivo.

```sql
-- DDL (Data Definition Language)
-- CRUD (Create, [Describe, Show], Alter, Drop)
-- Se estamos criando o banco de dados do zero, vamos apagar o banco de dados caso ele exista
drop database if exists compras_caixeiro;
-- Criar o Banco de dados
create database compras_caixeiro;
-- Acessa o Banco de dados
use compras_caixeiro;
-- Criar a tabela de Produtos
create table produto(
    id int primary key not null auto_increment,
    nome varchar(40) not null,
    descricao varchar(200),
    peso decimal(10,2) not null,
    volume decimal(10,2) not null,
    valor decimal(10,2) not null
);
-- Criar a tabela de Fornecedor
create table fornecedor(
    id int primary key not null auto_increment,
    nome varchar(40) not null,
    cidade varchar(40) not null,
    estado varchar(40) not null,
    pais varchar(40) not null,
    referencia varchar(40) not null,
    observacao varchar(200)
);
-- Criar tabela de Compra
create table compra(
    id int primary key not null auto_increment,
    id_produto int not null,
    id_fornecedor int not null,
    data Date default(curdate()) not null,
    quantidade int not null,
    custo_unitario decimal(10,2) not null
);
-- Criar as chaves estrangeiras (Relacionamentos)
alter table compra add constraint possui foreign key (id_produto) references produto(id);
alter table compra add constraint fornece foreign key (id_fornecedor) references fornecedor(id);

-- Vendo as tabelas criadas
show tables;
describe produto;
describe fornecedor;
describe compra;
```
- Execute o script no MySQL Workbench ou em outro cliente SQL, para criar o banco de dados e as tabelas.
- Vamos criar outro arquivo chamado `dml.sql` e criar um script de manipulação de dados, para inserir os dados da [planilha](./dados_caixeiro.xlsx) que criamos na aula02 que agora está atualizada neste repositório. 
- Iniciaremos pelos dados da tabela `fornecedor`, inserindo um por vez.
```sql
```