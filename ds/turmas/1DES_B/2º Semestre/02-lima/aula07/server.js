const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")

//Configuração conexão BD
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"db_discoteca"
})

db.connect((erro)=>{
    if(erro){
        console.error("Erro ao conectar o mysql:", erro)
    } else {
        console.log("Conectado ao BD com sucesso!")
    }
})

//Listar Discos
const mostrarDiscos = (req, res) => {
    const sql = "SELECT id, album, artista, genero, imagem_url, preco from discos"

    db.query(sql,(erro, resultados)=>{
        if(erro){
            return res.status(500).send("Erro ao consultar o BD")
        }
        res.send(resultados)
    })
}
//Cadastrar Disco
const novoDisco = (req, res)=>{
    const{album, artista, genero, imagem, preco}= req.body

        if(album && artista && genero && imagem && preco){
            const sql = "INSERT INTO discos (album, artista, genero, imagem_url, preco) VALUES (?, ?, ?, ?, ?)"
            const valores = [album, artista, genero, imagem, preco]

            db.query(sql, valores, (erro, resultado)=>{
                if(erro){
                    return res.status(500).send("Erro ao inserir disco")
                }
                res.send("Disco cadastrado com sucesso")
            })
        }else{
            res.status(400).send("Erro: Preencha todos os campos")
        }
}
const atualizarDisco = (req,res)=>{
    const {id} = req.params
    const {album, artista, genero, imagem, preco}= req.body

    if(album && artista && genero && imagem && preco){
        const sql = "UPDATE discos SET album = ?, artista = ?, genero = ?, imagem_url = ?, preco = ? WHERE id = ?"
        const valores = [album, artista, genero, imagem, preco, id]

        db.query(sql,valores,(erro,resultado)=>{
            if(erro){
                return res.status(500).send("Erro ao atualizar disco")
            }
            res.send("Disco atualizado com sucesso")
        })
    }else{
        res.status(400).send("Erro: Preencha todos os campos")
    }
}
const deletarDisco = (req, res)=>{
    const {id} = req.params
    const sql = "DELETE FROM discos WHERE id = ?"

    db.query(sql,[id],(erro,resultado)=>{
        if(erro){
            return res.status(500).send("Erro ao deletar disco")
        }
        res.send("Disco deletado com sucesso")
    })
}
//Middlewares
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const porta = 3000

//Rotas
app.get("/listar",mostrarDiscos)
app.post("/cadastrar", novoDisco)
app.put("/atualizar/:id", atualizarDisco)
app.delete("/deletar/:id", deletarDisco)

app.listen(porta,()=>{
    console.log(`Servidor rodando (alegria) porta ${porta}`)
})
