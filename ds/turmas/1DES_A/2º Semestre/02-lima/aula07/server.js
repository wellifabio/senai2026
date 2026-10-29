const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"db_discoteca"
})

//Testar a conexão
db.connect((erro)=>{
    if(erro){
        console.error("Erro ao conectar:", erro)
    }else{
        console.log("Conectado ao BD")
    }
})

//Listar todos os discos
const mostrarDiscos = (req, res) => {
    const sql = "SELECT id, album, artista, genero, imagem_url AS imagem, preco FROM discos"
    db.query(sql,(erro, resultados)=>{
        if(erro){
            return res.status(500).send("Erro ao consultar o BD")
        }
        res.send(resultados)
    })
}
//Cadastrar Discos
const novoDisco = (req, res)=>{
    const{album, artista, genero, imagem, preco}=req.body

    if(album && artista && genero && imagem && preco){
        const sql = "INSERT INTO discos (album, artista, genero, imagem_url, preco) VALUES (?, ?, ?, ?, ?)"
        const valores = [album, artista, genero, imagem, preco]

        db.query(sql, valores,(erro, resultado)=>{
            if(erro){
                return res.status(500).send("Erro ao inserir disco")
            }
            res.send("Disco cadastrado com sucesso")
        })
    }else{
        res.status(400).send("Erro: Preencha todos os campos")
    }
}
//Middlewares

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const porta = 3000

//Rotas
app.get("/listar", mostrarDiscos)
app.post("/cadastrar", novoDisco)

app.listen(porta,()=>{
    console.log(`Servidor rodando (alegria) porta ${porta}`)
})
