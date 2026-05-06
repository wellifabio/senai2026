const express = require("express");

const router = express.Router();

const { 
    cadastrar, 
    listar, 
    buscar, 
    atualizar, 
    excluir } = require("../controllers/automovel.controller");

router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.get("/buscar/:placa", buscar);
router.put("/atualizar/:placa", atualizar);
router.delete("/excluir/:placa", excluir);

module.exports = router;
