const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const automoveis = require('./seed/automoveis.json');

async function main() {
    try {
        // Limpar dados existentes
        console.log('Limpando dados existentes...');
        await prisma.estadia.deleteMany({});
        await prisma.automovel.deleteMany({});
        console.log('Dados anteriores removidos.');

        // Inserir novos dados
        console.log(`Inserindo ${automoveis.length} automóveis...`);
        let count = 0;
        for (const automovel of automoveis) {
            await prisma.automovel.create({
                data: automovel,
            });
            count++;
        }
        console.log(`✓ ${count} automóveis inseridos com sucesso!`);
    } catch (error) {
        console.error('❌ Erro ao semear dados:', error.message);
        throw error;
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
        console.log('Seed concluído!');
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });