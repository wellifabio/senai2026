const express = require("express");

const router = express.Router();

const { 
    cadastrar, 
    listar, 
    buscar,
    login,
    atualizar, 
    excluir } = require("../controllers/professor.controller");

router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.get("/buscar/:id", buscar);
router.post("/login", login);
router.put("/atualizar/:id", atualizar);
router.delete("/excluir/:id", excluir);

module.exports = router;
