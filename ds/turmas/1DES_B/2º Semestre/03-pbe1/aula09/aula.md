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

## Atividades
- Implemente os **dois CRUDs listar e cadastrar** para a tabela `evento` seguindo o mesmo padrão utilizado para a tabela `usuario`.
- Mostre o resultado dos testes para o professor, incluindo prints das requisições e respostas do Thunder Client.

## Entrega
- Envie o projeto para o github em um repositorio chamado `sesi_pbe1_aula09_eventos_climaticos_2026`.
    - Crie uma pasta `docs` e dentro dela salve as imagens do MER_DER e do Diagrama de Classes.
    - Crie um README.md com:
        - o título do projeto,
        - descrição (Mostrando o DER e o Diagrama de Classes),
        - tecnologias utilizadas,
        - instruções para testar
        - e prints das requisições e respostas do Thunder Client, salvas em `docs/prints`.
- Mostre o repositorio para o professor **VISTAR**

## Desafio - Para a proxima aula
- 1 Implemente os **CRUDs** de `atualizar` e `excluir` para as tabelas `usuario` e `evento`.
- 2 Adicione prints dos testes de atualização e exclusão no README.md do projeto.
- 3 Implemente uma rota `post` de **login** e uma funcionalidade de **login** no conroller `usuario.js` que receba { **email**, **senha** } cadastrados e retorne os dados do usuário se os credenciais forem válidos, se não retorne um erro 404.
- 4 Adicione prints dos testes de login no README.md do projeto.
