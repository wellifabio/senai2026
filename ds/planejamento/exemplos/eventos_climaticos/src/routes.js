const express = require("express")
const router = express.Router()

const Usuario = require('./controllers/usuario')
const Evento = require('./controllers/evento')

const rotaInicial = (req, res) => {
    res.json("Back-end Eventos Climáticos respondendo")
}

router.get('/',rotaInicial)
router.post('/login', Usuario.login)

router.post('/usuarios', Usuario.cadastrar)
router.get('/usuarios', Usuario.listar)
router.put('/usuarios/:id', Usuario.alterar)
router.patch('/usuarios/:id', Usuario.alterarParcial)
router.delete('/usuarios/:id', Usuario.excluir)

router.post('/eventos', Evento.cadastrar)
router.get('/eventos', Evento.listar)
router.patch('/eventos/:id', Evento.alterar)
router.delete('/eventos/:id', Evento.excluir)

module.exports = router