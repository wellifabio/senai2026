const prisma = require("../data/prisma");

async function criarProduto(req, res) {
    try {
        const produto = await prisma.produto.create({
            data: req.body
        });
        res.status(201).json(produto);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao registrar produto, verifique os dados enviados.' });
    }
}

async function listarProdutos(req, res) {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
}

async function obterProduto(req, res) {
    const produtos = await prisma.produto.findUnique({
        where: { id: parseInt(req.params.id) }
    });
    res.json(produtos);
}

async function atualizarProduto(req, res) {
    const { id } = req.params;
    try {
        const produto = await prisma.produto.update({
            where: { id: parseInt(id) },
            data: req.body
        });
        res.status(202).json(produto);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar produto, verifique os dados enviados.' });
    }
}

async function excluirProduto(req, res) {
    const { id } = req.params;
    try {
        await prisma.produto.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: 'Erro ao excluir produto, verifique os dados enviados.' });
    }
}

module.exports = {
    criarProduto,
    listarProdutos,
    obterProduto,
    atualizarProduto,
    excluirProduto
};