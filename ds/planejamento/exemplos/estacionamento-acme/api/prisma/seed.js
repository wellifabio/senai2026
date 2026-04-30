const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const automoveis = require('./seed/automoveis.json');

async function main() {
    for (const automovel of automoveis) {
        await prisma.automovel.create({
            data: automovel,
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log('Seed complete');
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });