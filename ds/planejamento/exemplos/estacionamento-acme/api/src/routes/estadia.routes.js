const express = require("express");

const router = express.Router();

const { 
    cadastrar, 
    listar,
    listarAtivos,
    buscar, 
    atualizar, 
    excluir } = require("../controllers/estadia.controller");

router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.get("/listar/ativos", listarAtivos);
router.get("/buscar/:id", buscar);
router.put("/atualizar/:id", atualizar);
router.delete("/excluir/:id", excluir);

module.exports = router;
