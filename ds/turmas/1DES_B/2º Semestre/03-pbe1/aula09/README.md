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
