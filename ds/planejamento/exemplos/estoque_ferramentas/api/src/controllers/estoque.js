const prisma = require("../data/prisma");

async function criarEstoque(req, res) {
    try {
        if (req.body.tipo === 'Entrada') {
            const novaEntrada = await prisma.estoque.create({
                data: req.body
            });
            const produtoAtualizado = await prisma.produto.update({
                where: { id: Number(req.body.produtoId) },
                data: { estoque: { increment: Number(req.body.quantidade) } }
            });
            res.status(201).json({ novaEntrada, produtoAtualizado }).end();
        } else {
            const produto = await prisma.produto.findUnique({
                where: { id: Number(req.body.produtoId) },
                select: { estoque: true }
            });
            if (produto.estoque >= req.body.quantidade) {
                const novaSaida = await prisma.estoque.create({
                    data: req.body
                });
                const produtoAtualizado = await prisma.produto.update({
                    where: { id: Number(req.body.produtoId) },
                    data: { estoque: { decrement: Number(req.body.quantidade) } }
                });
                res.status(201).json({ novaSaida, produtoAtualizado }).end();
            } else {
                res.status(400).json({ error: 'Quantidade insuficiente em estoque para realizar a saída.' }).end();
            }
        }
    } catch (error) {
        res.status(400).json({ error: 'Erro ao registrar estoque, verifique os dados enviados.' }).end();
    }
}

async function listarEstoques(req, res) {
    const estoques = await prisma.estoque.findMany({
        include: {
            produto: true,
            usuario: true
        }
    });
    res.json(estoques);
}

module.exports = {
    criarEstoque,
    listarEstoques
};