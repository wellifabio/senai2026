const express = require("express")
const cors = require("cors")

const routes = require("./src/routes")

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
const porta = 3000

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})