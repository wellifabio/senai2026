# Tutorial - Back-End Node.js com Routes, Controllers e Models

Passo a passo para criar o back-end de **qualquer projeto** separando o código em três camadas:

| Camada | Pasta | Responsabilidade |
|---|---|---|
| **Routes** | `src/routes` | Define o **caminho** (URL) e o **método** HTTP de cada requisição |
| **Controllers** | `src/controllers` | Recebe a requisição (`req`) e devolve a resposta (`res`) |
| **Models** | `src/models` | Conversa com o **banco de dados** (comandos SQL) |

Caminho de uma requisição:
```
Cliente (Insomnia/Postman) → server.js → routes → controller → model → MariaDB
```

### Antes de começar: identifique o seu projeto
Durante o tutorial, troque os nomes genéricos pelos do seu projeto:

| No tutorial | Significa | Exemplo |
|---|---|---|
| `nome_do_projeto` | Pasta do seu back-end | `backend_energia` |
| `nome_do_banco` | Banco criado pelo seu script SQL | `gestao_consumo` |
| `entidade` | Tabela principal do seu projeto (além de `usuario`) | `consumo` |
| `entidades` | Prefixo das rotas dessa tabela (no plural) | `/consumos` |

Se você está fazendo uma das situações de aprendizagem da aula 10:

| Situação | `nome_do_banco` | `entidade` | Prefixo das rotas |
|---|---|---|---|
| 01 - Gestão de resíduos sólidos | `gestao_residuos` | `ocorrencia` | `/ocorrencias` |
| 02 - Registros de uso de IA | `usos_ia` | `usoia` | `/usosia` |
| 03 - Consumo de energia | `gestao_consumo` | `consumo` | `/consumos` |

> A tabela `usuario` é igual em todos os projetos, por isso ela é o exemplo completo deste tutorial. Depois você repete o mesmo padrão para a sua `entidade`.

### Estrutura final do projeto
Cada tabela do banco tem **um arquivo em cada camada**, sempre com o mesmo nome: `entidade.routes.js`, `entidade.controller.js` e `entidade.model.js`.
```
nome_do_projeto/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── entidade.controller.js
│   │   └── usuario.controller.js
│   ├── models/
│   │   ├── entidade.model.js
│   │   └── usuario.model.js
│   └── routes/
│       ├── entidade.routes.js
│       └── usuario.routes.js
├── .gitignore
├── package.json
└── server.js
```

---

### Passo 01 - Criar o banco de dados
Abra o **XAMPP**, inicie o **MySQL** e execute o **script SQL do seu projeto** no seu cliente SQL (HeidiSQL, phpMyAdmin ou VsCode).

> Os scripts das situações 01, 02 e 03 estão no [README da aula 10](../README.md).

Confira se o banco foi criado:
```sql
use nome_do_banco;
show tables;
select * from usuario;
```

### Passo 02 - Criar o projeto Node.js
Crie a pasta `nome_do_projeto`, abra com o **VsCode**, abra o terminal `CTRL + '` tipo `CMD` e execute:
```bash
npm init -y
npm i express cors mysql2 dotenv
```
| Dependência | Para que serve |
|---|---|
| `express` | Cria o servidor e as rotas |
| `cors` | Permite que o front-end acesse a API |
| `mysql2` | Conecta o Node.js ao MySQL/MariaDB |
| `dotenv` | Lê variáveis de configuração do arquivo `.env` |

Edite o `package.json` adicionando o script `"dev"`:
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node --watch server.js"
},
```
> O `--watch` reinicia o servidor sozinho sempre que você salvar um arquivo.

Crie o arquivo `.gitignore` para não enviar a pasta `node_modules` ao GitHub:
```
node_modules/
```

### Passo 03 - Criar as pastas
Crie a pasta `src` e dentro dela as pastas `config`, `controllers`, `models` e `routes`, conforme a [estrutura final](#estrutura-final-do-projeto).

### Passo 04 - Conexão com o banco (`src/config/db.js`)
Este arquivo cria a conexão com o banco. Todos os models vão importar esta conexão.
```js
const mysql = require("mysql2/promise");
require("dotenv").config();

const con = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "nome_do_banco" // troque pelo nome do seu banco
});

module.exports = con;
```
> Usamos `mysql2/promise` para poder usar `async/await` nas consultas.

### Passo 05 - Model (`src/models/usuario.model.js`)
O **model** guarda os comandos SQL. Cada função executa uma consulta e devolve o resultado.
```js
const con = require("../config/db");

const cadastrar = async ({ nome, email, senha }) => {
    const [resultado] = await con.query(
        "INSERT INTO usuario VALUES (DEFAULT, ?, ?, ?);",
        [nome, email, senha]
    );

    return {
        id: resultado.insertId,
        nome,
        email
    };
};

const listar = async () => {
    const [resultado] = await con.query(
        "SELECT id, nome, email FROM usuario;"
    );

    return resultado;
};

const buscar = async (id) => {
    const [resultado] = await con.query(
        "SELECT id, nome, email FROM usuario WHERE id = ?;",
        [id]
    );

    return resultado;
};

const excluir = async (id) => {
    const [resultado] = await con.query(
        "DELETE FROM usuario WHERE id = ?;",
        [id]
    );

    return resultado;
};

const atualizar = async (dados, id) => {
    const [resultado] = await con.query(
        "UPDATE usuario SET ? WHERE id = ?;",
        [dados, id]
    );

    return resultado;
};

module.exports = {
    cadastrar, 
    listar,
    buscar,
    excluir,
    atualizar
};
```
> Os `?` são substituídos, na ordem, pelos valores do array. Isso protege o banco contra **SQL Injection**.
>
> Repare que o `SELECT` **não** traz a coluna `senha`: ela nunca deve ser enviada na resposta.

### Passo 06 - Controller (`src/controllers/usuario.controller.js`)
O **controller** pega os dados da requisição, chama o model e envia a resposta com o **status HTTP**.
```js
//Importar model
const usuariomodel = require("../models/usuario.model");

const cadastrar = async (req, res) => {
    const resposta = await usuariomodel.cadastrar(req.body);
    res.status(201).json(resposta).end();
};

const listar = async (req, res) => {
    const resposta = await usuariomodel.listar();
    res.status(200).json(resposta).end();
};

const buscar = async (req, res) => {
    const resposta = await usuariomodel.buscar(req.params.id);
    res.status(200).json(resposta).end();
};

const excluir = async (req, res) => {
    const resposta = await usuariomodel.excluir(req.params.id);
    res.status(204).json(resposta).end();
};

const atualizar = async (req, res) => {
    const resposta = await usuariomodel.atualizar(req.body, req.params.id);
    res.status(200).json(resposta).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar
};
```
| De onde vem o dado | Exemplo |
|---|---|
| `req.body` | JSON enviado no corpo da requisição (cadastrar e atualizar) |
| `req.params` | Valor que está na URL, como o `:id` em `/buscar/:id` |

| Status | Significado |
|---|---|
| `200` | OK |
| `201` | Criado |
| `204` | Sem conteúdo (usado na exclusão) |

### Passo 07 - Rotas (`src/routes/usuario.routes.js`)
As **rotas** ligam cada URL e método HTTP a uma função do controller.
```js
const express = require("express");
const routes = express.Router();

const { 
    cadastrar, 
    listar,
    buscar,
    excluir,
    atualizar
} = require("../controllers/usuario.controller");

routes.post("/cadastrar", cadastrar);
routes.get("/listar", listar);
routes.get("/buscar/:id", buscar);
routes.delete("/excluir/:id", excluir);
routes.patch("/atualizar/:id", atualizar);

module.exports = routes;
```

### Passo 08 - Servidor (`server.js`)
O `server.js` cria o servidor e registra as rotas com um **prefixo**. Todas as rotas de usuário começam com `/usuarios`.
```js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
    importar as rotas
*/

//http://localhost:3000/usuarios/cadastrar
const usuarioroutes = require("./src/routes/usuario.routes");
app.use("/usuarios", usuarioroutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});
```
> O `express.json()` permite que o servidor leia o JSON enviado no `req.body`.

### Passo 09 - Executar
No terminal:
```bash
npm run dev
```
Se aparecer `Servidor Online`, o back-end está funcionando.

### Passo 10 - Testar com Insomnia ou Postman
| Método | URL | Body (JSON) |
|---|---|---|
| `POST` | `http://localhost:3000/usuarios/cadastrar` | `{ "nome": "Maria Silva", "email": "maria@email.com", "senha": "123456" }` |
| `GET` | `http://localhost:3000/usuarios/listar` | - |
| `GET` | `http://localhost:3000/usuarios/buscar/1` | - |
| `PATCH` | `http://localhost:3000/usuarios/atualizar/1` | `{ "nome": "Jacinto Penna Silva" }` |
| `DELETE` | `http://localhost:3000/usuarios/excluir/4` | - |

> No `PATCH` envie **apenas** os campos que deseja alterar.

---

### Passo 11 - Agora é com você: CRUD da sua `entidade`
Repita os passos 05 a 08 para a tabela principal do seu projeto, usando o código do `usuario` como modelo:
1. `src/models/entidade.model.js`: troque a tabela `usuario` pela sua tabela e as colunas `nome, email, senha` pelas colunas dela
2. `src/controllers/entidade.controller.js`: importe o model da sua entidade (`require("../models/entidade.model")`)
3. `src/routes/entidade.routes.js`: importe o controller da sua entidade e crie as rotas `/cadastrar`, `/listar`, `/buscar/:id`, `/excluir/:id` e `/atualizar/:id`
4. No `server.js`, registre as novas rotas com o prefixo da sua entidade, logo abaixo das rotas de usuário:
```js
const entidaderoutes = require("./src/routes/entidade.routes");
app.use("/entidades", entidaderoutes);
```
5. Teste todas as rotas no Insomnia ou Postman. O body do `POST` deve ter **todas as colunas obrigatórias** da sua tabela, menos o `id`.

Exemplo para a Situação 03 (`consumo`), rota `POST http://localhost:3000/consumos/cadastrar`:
```json
{
    "usuarioId": 1,
    "local": "Laboratório 3",
    "equipamento": "Computador",
    "consumoKwh": 52.3,
    "mesReferencia": "2026-10",
    "status": "Normal"
}
```

> **Dica:** se o seu projeto tiver mais tabelas, cada uma ganha seus três arquivos (`routes`, `controller` e `model`) e um `app.use` no `server.js`.
