# Aula09 - Conexão com Banco de Dados
- SGBD: Sistema de Gerenciamento de Banco de Dados
- MariaDB: Sistema de Gerenciamento de Banco de Dados relacional, derivado do MySQL.
- Node.js: Ambiente de execução JavaScript, que permite a execução de código JavaScript fora do navegador.

## Objetivo
Conectar o back-end da aplicação web com um banco de dados relacional, utilizando o SGBD MariaDB e a linguagem de programação JavaScript com Node.js.
### Capacidades Técnicas
- 1 Utilizar o paradigma da programação orientada a objetos
- 2 Elaborar diagramas de classe
- 5 Preparar o ambiente necessário ao desenvolvimento back-end para a plataforma web
- 6 Definir os elementos de entrada, processamento e saída para a programação da aplicação web
- 7 Utilizar design patterns no desenvolvimento da aplicação web
- 8 Definir os frameworks a serem utilizados no desenvolvimento da aplicação web
- 9 Utilizar interações com base de dados para desenvolvimento de sistemas web
### Conhecimentos
- 8 Persistência de dados
  - 8.1. Conexão com base de dados
  - 8.2. CRUD

## Demonstração prática:
### Sistema: Registro de eventos climáticos
- Duas tabelas:
- Usuários: id, nome, email, senha
- Eventos: id, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto (Baixo, Médio, Alto), usuarioId (chave estrangeira referenciando a tabela Usuários)

### Exemplo de dados para a tabela Usuários:
```json
[
    {
        "id": 1,
        "nome": "Maria Oliveira",
        "email": "maria.oliveira@email.com",
        "senha": "senha123"
    },
    {
        "id": 2,
        "nome": "João Silva",
        "email": "joao.silva@email.com",
        "senha": "senha123"
    },
    {
        "id": 3,
        "nome": "Ana Souza",
        "email": "ana.souza@email.com",
        "senha": "senha123"
    }
]
```
### Exemplo de dados para a tabela Eventos:
```json
[
    {
        "id": 1,
        "cidade": "Campinas",
        "tipoEvento": "Onda de calor",
        "temperaturaMaxima": 38.7,
        "data": "2026-09-23",
        "nivelImpacto": "Alto",
        "usuarioId": 1
    },
    {
        "id": 2,
        "cidade": "São Paulo",
        "tipoEvento": "Chuva intensa",
        "temperaturaMaxima": 25.3,
        "data": "2026-09-24",
        "nivelImpacto": "Médio",
        "usuarioId": 2
    },
    {
        "id": 3,
        "cidade": "Rio de Janeiro",
        "tipoEvento": "Tempestade",
        "temperaturaMaxima": 30.1,
        "data": "2026-09-25",
        "nivelImpacto": "Alto",
        "usuarioId": 1
    },
    {
        "id": 4,
        "cidade": "Belo Horizonte",
        "tipoEvento": "Seca prolongada",
        "temperaturaMaxima": 35.0,
        "data": "2026-09-26",
        "nivelImpacto": "Alto",
        "usuarioId": 2
    },
    {
        "id": 5,
        "cidade": "Porto Alegre",
        "tipoEvento": "Nevasca",
        "temperaturaMaxima": -2.5,
        "data": "2026-09-27",
        "nivelImpacto": "Médio",
        "usuarioId": 3
    }
]
```
## Atividades práticas:
### 1 Banco de dados relacional
#### Documentação
![Diagrama de Entidade-Relacionamento](./mer_der_conceitual.png)
#### Script SQL
- Crie uma pasta na área de trabalho chamada `eventos_climaticos` e dentro dela crie uma outra pasta chamada `db`.
- Na pasta `db`, criar um script chamado `script.sql` para:
    - criar um banco de dados chamado `registros_climaticos` (DDL)
    - e popular com os dados fornecidos para as tabelas `Usuários` e `Eventos` (DML).
```sql
drop database if exists registros_climaticos;
create database registros_climaticos;
use registros_climaticos;
-- DDL Criação das tabelas
create table usuario (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(100) not null
);
create table evento (
    id int not null auto_increment primary key,
    usuarioId int not null,
    cidade varchar(100) not null,
    tipoEvento varchar(100) not null,
    temperaturaMaxima decimal(10,2) not null,
    data Date default(curdate()) not null,
    nivelImpacto enum('Baixo', 'Médio', 'Alto') default('Médio') not null
);
alter table evento add constraint fk_registra
foreign key (usuarioId) references usuario(id);

-- DML para inserir dados de exemplo nas tabelas
insert into usuario (nome, email, senha) values
('Maria Oliveira', 'maria.oliveira@email.com', password('senha123')),
('João Silva', 'joao.silva@email.com', password('senha123')),
('Ana Souza', 'ana.souza@email.com', password('senha123'));

insert into evento (usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto) values
(1, 'Campinas', 'Onda de calor', 38.7, '2026-09-23', 'Alto'),
(2, 'São Paulo', 'Chuva intensa', 25.3, '2026-09-24', 'Médio'),
(1, 'Rio de Janeiro', 'Tempestade', 30.1, '2026-09-25', 'Alto'),
(2, 'Belo Horizonte', 'Seca prolongada', 35.0, '2026-09-26', 'Alto'),
(3, 'Porto Alegre', 'Nevasca', -2.5, '2026-09-27', 'Médio');

select * from usuario;
select * from evento;
```
### 2 Back-end com Node.js
#### Documentação
![Diagrama de classes](./uml_dc.png)
#### Desenvolvimento JavaScript
- Ainda na pasta `eventos_climaticos`, crie um arquivo `server.js` para implementar o back-end da aplicação web, utilizando Node.js e o framework Express.
    - Crie uma pasta `src` e dentro dela crie uma pasta `controllers` para implementar os controladores da aplicação.
    - crie o arquivo `routes.js` para definir as rotas da aplicação.
    - Crie a seguinte estrutura de pastas e arquivos:
```
eventos_climaticos/
├── db/
│   └── script.sql
├── src/
│   ├── controllers/
│   │   └── evento.js
|   |   └── usuario.js
│   ├── routes.js
└── server.js
```
- Siga este **[tutorial](https://github.com/wellifabio/sesi_pbe1_aula08_pedidos_mvc_uml_dc_2026/blob/main/docs/tutorial_mvc.md)** para implementar o back-end da aplicação web
