const prisma = require('../src/data/prisma')

async function main() {
    await prisma.$transaction(async (transaction) => {
        await transaction.item.deleteMany()
        await transaction.pedido.deleteMany()
        await transaction.produto.deleteMany()

        const produtos = await Promise.all([
            transaction.produto.create({ data: { nome: "Caneta Azul", descricao: "Caneta esferográfica azul", imagem:"caneta.png" } }),
            transaction.produto.create({ data: { nome: "Caderno 100 folhas", descricao: "Caderno brochura 100 folhas", imagem:"caderno.webp" } }),
            transaction.produto.create({ data: { nome: "Lápis Preto", descricao: "Lápis preto nº 2", imagem:"lapis.png" } }),
            transaction.produto.create({ data: { nome: "Borracha Branca", descricao: "Borracha branca macia", imagem:"borracha.webp" } }),
            transaction.produto.create({ data: { nome: "Mochila Escolar", descricao: "Mochila escolar com compartimentos", imagem:"mochila.png" } }),
            transaction.produto.create({ data: { nome: "Estojo de Lápis", descricao: "Estojo de lápis com zíper", imagem:"estojo.png" } })
        ])
        console.log('Produtos inseridos com sucesso!');

        const pedidos = await Promise.all([
            transaction.pedido.create({ data: { cliente: "Ana Silva", cep: "13914552", numero: "100", complemento: "Apto 101" } }),
            transaction.pedido.create({ data: { cliente: "Carlos Oliveira", cep: "13905522", numero: "200" } }),
            transaction.pedido.create({ data: { cliente: "Maria Santos", cep: "13476622", complemento: "Fundos" } })
        ])
        console.log('Pedidos inseridos com sucesso!');

        await transaction.item.createMany({
            data: [
                { pedidoId: pedidos[0].id, produtoId: produtos[0].id, quantidade: 50, preco: 1.5 },
                { pedidoId: pedidos[0].id, produtoId: produtos[1].id, quantidade: 15, preco: 15.0 },
                { pedidoId: pedidos[1].id, produtoId: produtos[2].id, quantidade: 25, preco: 1.3 },
                { pedidoId: pedidos[1].id, produtoId: produtos[3].id, quantidade: 10, preco: 1.8 },
                { pedidoId: pedidos[1].id, produtoId: produtos[4].id, quantidade: 10, preco: 2.5 },
                { pedidoId: pedidos[2].id, produtoId: produtos[0].id, quantidade: 5, preco: 1.5 }
            ]
        })
        console.log('Itens inseridos com sucesso!');
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })