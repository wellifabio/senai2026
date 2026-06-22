const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    const item = await prisma.turma.create({
        data
    });

    res.json(item).status(201).end();
};

const listar = async (req, res) => {
    const lista = await prisma.turma.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.turma.findUnique({
        where: { id: Number(id) }, include: { atividades: true }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.turma.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.turma.delete({
            where: { id: Number(id) }
        });
        res.json({ message: 'Turma excluída com sucesso' }).status(200).end();
    } catch (error) {
        if (error.code === 'P2003') {
            return res.status(400).json({ error: 'Você não pode excluir uma turma com atividades cadastradas' }).end();
        } else if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Turma não encontrada' }).end();
        } else {
            res.status(500).json({ error }).end();
        }
    }
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
