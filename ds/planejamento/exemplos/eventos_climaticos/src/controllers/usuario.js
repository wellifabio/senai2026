const con = require('../db')

const login = (req, res) => {
    try {
        if (!req.body){
            res.status(400).json("Informe email e senha no corpo da requisição").end();
            return
        }
        const { email, senha } = req.body
        if (email == undefined || senha == undefined){
            res.status(400).json("Informe email e senha").end();
            return
        }
        const sql = 'SELECT id, nome, email FROM usuario WHERE email = ? AND senha = password(?);'
        con.query(sql, [email, senha], (err, results) => {
            if (err) {
                console.error(err)
                res.status(500).json({ erro: 'Erro ao listar usuários' })
            } else {
                if (results.length == 0) {
                    res.status(404).json("Acesso negado, credenciais inválidas")
                } else {
                    res.json(results)
                }
            }
        })
    } catch (e) {
        res.status(500).json({ erro: 'Erro ao conectar com o banco de dados' })
    }
}

const cadastrar = (req, res) => {
    const { nome, email, senha } = req.body
    try {
        const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, password(?));'
        con.query(sql, [nome, email, senha], (err, results) => {
            if (err) {
                console.error(err)
                res.status(500).json({ erro: 'Erro ao cadastrar usuário' })
            } else {
                const novoUsuario = req.body
                novoUsuario.id = results.insertId
                res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: novoUsuario })
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({ erro: 'Erro ao cadastrar usuário', details: 'Informe { nome, email, senha }' })
    }
}

const listar = (req, res) => {
    const sql = 'SELECT * FROM usuario;'
    con.query(sql, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ erro: 'Erro ao listar usuários' })
        } else {
            res.json(results)
        }
    })
}

const buscarAgregandoEventos = async (req, res) => {
    const id = Number(req.params.id)
    const consultar = (sql, mensagemErro) => new Promise((resolve, reject) => {
        con.query(sql, [id], (err, results) => {
            if (err) {
                reject({ err, mensagemErro })
                return
            }
            resolve(results)
        })
    })

    try {
        const [usuarios, eventos] = await Promise.all([
            consultar('SELECT id, nome, email FROM usuario WHERE id = ?;', 'Erro ao listar usuários'),
            consultar('SELECT * FROM evento WHERE usuarioId = ?;', 'Erro ao listar eventos do usuário')
        ])

        if (usuarios.length === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' })
        }

        res.json({ ...usuarios[0], eventos })
    } catch (failure) {
        console.error(failure.err || failure)
        res.status(500).json({ erro: failure.mensagemErro || 'Erro ao buscar usuário e eventos' })
    }
}

const alterar = (req, res) => {
    const id = Number(req.params.id)
    const { nome, email, senha } = req.body
    const sql = 'UPDATE usuario SET nome = ?, email = ?, senha = password(?) WHERE id = ?;'
    con.query(sql, [nome, email, senha, id], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ erro: 'Erro ao alterar usuário', msg: err.sqlMessage })
        } else {
            if (results.affectedRows == 1)
                res.json("Registro alterado com sucesso")
            else
                res.status(404).json({ msg: "Nada alerado no banco de dados", erro: results })
        }
    })
}

const alterarParcial = (req, res) => {
    const id = Number(req.params.id)
    const chaves = Object.keys(req.body)
    let campos = ''
    const colunas = []
    chaves.forEach((chave) => {
        if (chave == "senha") {
            campos += `${chave} = password(?),`
        } else {
            campos += `${chave} = ?,`
        }
        colunas.push(req.body[chave])
    })
    campos = campos.slice(0, -1) //Remove a ultima virgula
    colunas.push(id)
    const sql = `UPDATE usuario SET ${campos} WHERE id = ?;`
    con.query(sql, colunas, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ erro: 'Erro ao alterar usuário', msg: err.sqlMessage })
        } else {
            if (results.affectedRows == 1)
                res.json("Registro alterado com sucesso")
            else
                res.status(404).json({ msg: "Nada alerado no banco de dados", erro: results })
        }
    })
}

const excluir = (req, res) => {
    const id = Number(req.params.id)
    const sql = 'DELETE FROM usuario WHERE id = ?;'
    con.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ erro: 'Erro ao excluir usuário', msg: err.sqlMessage })
        } else {
            if (results.affectedRows == 1)
                res.json("Registro excluído com sucesso")
            else
                res.status(404).json({ msg: "Nada alerado no banco de dados", erro: results })
        }
    })
}

module.exports = {
    login,
    cadastrar,
    listar,
    alterar,
    alterarParcial,
    excluir,
    buscarAgregandoEventos
}