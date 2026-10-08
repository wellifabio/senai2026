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
- Na pasta `db`, criar um script para chamado `script.sql` para:
    - criar um banco de dados chamado `registos_climaticos` (DDL)
    - e popular com os dados fornecidos para as tabelas `Usuários` e `Eventos` (DML).
```sql
drop database if exists registros_climaticos;
create database registros_climaticos;
use registros_climaticos;
-- DDL para criar as tabelas do banco de dados
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
    data date not null,
    nivelImpacto enum('Baixo', 'Médio', 'Alto') default 'Médio' not null
);

alter table evento add
constraint fk_registra foreign key (usuarioId) references usuario(id);

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
##### Programando os controllers e rotas
- Após concluir o tutorial e iniciar um novo Back-end MVC, instale a dependência `mysql` para conectar o Node.js com o banco de dados MariaDB.
```bash
npm install mysql
```
- Crie um arquivo de conexão com o banco de dados chamado `db.js` na pasta `src`:
```javascript
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'registros_climaticos'
})

module.exports = connection
```
- Edite o arquivo `´src/controllers/usuario.js`
```javascript
const con = require('../db')

const cadastrar = (req, res) => {
    const { nome, email, senha } = req.body
    try {
        const query = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, password(?));'
        con.query(query, [nome, email, senha], (err, results) => {
            if (err) {
                console.error(err)
                res.status(500).json({ error: 'Erro ao cadastrar usuário' })
            } else {
                const novoUsuario = req.body
                novoUsuario.id = results.insertId
                res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: novoUsuario })
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: 'Erro ao cadastrar usuário', details: 'Informe { nome, email, senha }' })
    }
}

const listar = (req, res) => {
    const query = 'SELECT * FROM usuario;'
    con.query(query, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar usuários' })
        } else {
            res.json(results)
        }
    })
}

module.exports = {
    cadastrar,
    listar
}
```
- Edite o arquivo `src/routes.js` para definir as rotas da aplicação:
```javascript
const express = require("express")
const router = express.Router()

const Usuario = require('./controllers/usuario')

const rotaInicial = (req, res) => {
    res.json("Back-end Eventos Climáticos respondendo")
}

router.get('/',rotaInicial)
router.post('/usuarios', Usuario.cadastrar)
router.get('/usuarios', Usuario.listar)

module.exports = router
```
#### Realizar teste unitário com o Thunder Client
- Instale a extensão **Thunder Client** no VS Code.
- Abra o Thunder Client e crie uma nova requisição POST para cadastrar um usuário:
    - URL: `http://localhost:3000/usuarios`
    - Body (JSON):
```json
{
    "nome": "Carlos Pereira",
    "email": "carlos.pereira@example.com",
    "senha": "senha123"
}
```
- Clique em **Send** e verifique se o usuário foi cadastrado com sucesso.
- Crie uma nova requisição GET para listar todos os usuários:  
    - URL: `http://localhost:3000/usuarios`
- Clique em **Send** e verifique se a lista de usuários é retornada corretamente.

## Implemente os dois CRUDs listar e cadastrar para a tabela `evento` seguindo o mesmo padrão utilizado para a tabela `usuario`.
- Mostre o resultado dos testes para o professor, incluindo prints das requisições e respostas do Thunder Client. 