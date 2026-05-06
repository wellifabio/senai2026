const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    const item = await prisma.automovel.create({
        data
    });

    res.json(item).status(201).end();
};

const listar = async (req, res) => {
    const lista = await prisma.automovel.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { placa } = req.params;
    
    const item = await prisma.automovel.findUnique({
        where: { placa : placa }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { placa } = req.params;
    const dados = req.body;
    
    const item = await prisma.automovel.update({
        where: { placa : placa },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { placa } = req.params;
    
    const item = await prisma.automovel.delete({
        where: { placa : placa }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
