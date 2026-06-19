const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    const item = await prisma.professor.create({
        data
    });

    res.json(item).status(201).end();
};

const listar = async (req, res) => {
    const lista = await prisma.professor.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.professor.findUnique({
        where: { id: Number(id) }, include: { turmas: true }
    });

    res.json(item).status(200).end();
};

const login = async (req, res) => {
    const { email, senha } = req.body;

    const item = await prisma.professor.findUnique({
        where: { email },
        include: { turmas: true }
    });

    if (!item) {
        return res.status(404).json({ error: "Professor não encontrado" });
    }

    if (item.senha !== senha) {
        return res.status(401).json({ error: "Credenciais inválidas" });
    }

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.professor.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.professor.delete({
        where: { id: Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    login,
    atualizar,
    excluir
}
