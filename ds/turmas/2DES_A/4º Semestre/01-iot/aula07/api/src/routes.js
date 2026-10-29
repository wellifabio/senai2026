const express = require("express")
const router = express.Router()

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

const comandos = (req, res) => {
    console.log(req.body)
    res.json("dados recebidos")
}

router.get('/',rotaInicial)
router.post('/comandos',comandos)

module.exports = router