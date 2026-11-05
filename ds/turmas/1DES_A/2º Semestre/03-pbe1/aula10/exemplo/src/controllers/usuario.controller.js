const usuarioModel = require("../models/usuario.model");

const cadastrar = async (req, res) => {
    try {
        const resposta = await usuarioModel.cadastrar(req.body);

        res.status(201).json(resposta).end();
    } catch (error) {
        res.status(500).json({erro: error.message}).end()
    }
};

const listar = async (req, res) => {
    try {
        const resposta = await usuarioModel.listar();

        res.status(200).json(resposta).end();
    }catch (error) {
        res.status(500).json({erro: error.message}).end();
    }
};

const alterar = async (req, res) => {
    try {
        const resposta = await usuarioModel.alterar(req.body, req.params.id);

        if(resposta.affectedRows == 1) {
            res.status(200).end();
        }else {
            res.status(404).json({resp: "Usuario nao encontrado"}).end();
        }
    }catch (error) {
        res.status(500).json({erro: error.message}).end();
    }
}

module.exports = {
    cadastrar,
    listar,
    alterar
};