//Importar model
const usuariomodel = require("../models/usuario.model");

const cadastrar = async (req, res) => {
    const resposta = await usuariomodel.cadastrar(req.body);
    res.status(201).json(resposta).end();
};

const listar = (req, res) => {};

const buscar = (req, res) => {};

const excluir = (req, res) => {};

const atualizar = (req, res) => {};

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar
};