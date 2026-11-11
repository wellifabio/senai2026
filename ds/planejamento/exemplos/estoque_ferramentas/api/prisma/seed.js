const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    await prisma.usuario.createMany({
        data: [
            { nome: 'Ana Silva', email: 'ana@email.com', senha: 'senha123' },
            { nome: 'Bruno Souza', email: 'bruno@email.com', senha: 'senha123' },
            { nome: 'Carla Mendes', email: 'carla@email.com', senha: 'senha123' },
        ],
        skipDuplicates: true,
    });
    await prisma.produto.createMany({
        data: [
            { nome: 'Martelo', descricao: 'Descrição do Martelo', dimensoes: '15x3x2cm', peso: 2.0, imagem: 'https://eletrorastro.fbitsstatic.net/img/p/martelo-unha-27mm-vonder-80167/267270.jpg?w=800&h=800&v=no-change&qs=ignore', estoque: 1, estoqueMinimo: 5 },
            { nome: 'Alicate', descricao: 'Descrição do Alicate universal', dimensoes: '10x3x2cm', peso: 0.4, imagem: 'https://palaciodasferramentas.com.br/media/catalog/product/R/R/RRIZEAAVYURDFOCJSQTF.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600', estoque: 15, estoqueMinimo: 10 },
            { nome: 'Chave Phillips', descricao: 'Descrição da chave Phillips', dimensoes: '10x2x1cm', peso: 0.15, imagem: 'https://eletrorastro.fbitsstatic.net/img/p/chave-phillips-3-16x4-vonder-81907/269010.jpg?w=800&h=800&v=no-change&qs=ignore', estoque: 10, estoqueMinimo: 10 },
        ],
        skipDuplicates: true,
    });
    await prisma.estoque.createMany({
        data: [
            { produtoId: 1, quantidade: 10, usuarioId: 1, tipo: 'Entrada' },
            { produtoId: 2, quantidade: 15, usuarioId: 1, tipo: 'Entrada' },
            { produtoId: 3, quantidade: 10, usuarioId: 1, tipo: 'Entrada' },
            { produtoId: 1, quantidade: 9, usuarioId: 1, tipo: 'Saida' },
        ],
        skipDuplicates: true,
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
