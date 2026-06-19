require('dotenv').config();
const prisma = require("../src/data/prisma");

async function main() {
    try {
        // Limpar dados existentes
        console.log('Limpando dados existentes...');
        await prisma.atividade.deleteMany({});
        await prisma.turma.deleteMany({});
        await prisma.professor.deleteMany({});
        console.log('Dados anteriores removidos.');

        // Inserir professores individualmente para capturar os IDs gerados
        console.log(`Inserindo 3 professores...`);
        const professores = [];
        for (const dados of [
            { nome: "Prof. Wellington", email: "wellington@email.com", senha: "senha123" },
            { nome: "Prof. Robson",     email: "robson@email.com",     senha: "senha456" },
            { nome: "Prof. Reenye",     email: "reenye@email.com",     senha: "senha789" }
        ]) {
            const p = await prisma.professor.create({ data: dados });
            professores.push(p);
        }

        // Inserir turmas usando os IDs reais dos professores criados
        console.log(`Inserindo 3 turmas para cada professor...`);
        const nomesTurmas = [
            ["1º ano A", "1º ano B", "1º ano C"],
            ["2º ano A", "2º ano B", "2º ano C"],
            ["3º ano A", "3º ano B", "3º ano C"]
        ];
        const turmas = [];
        for (let i = 0; i < professores.length; i++) {
            for (const nome of nomesTurmas[i]) {
                const t = await prisma.turma.create({
                    data: { nome, professorId: professores[i].id }
                });
                turmas.push(t);
            }
        }

        // Inserir atividades usando os IDs reais das turmas criadas
        console.log(`Inserindo 1 atividade para cada turma...`);
        await prisma.atividade.createMany({
            data: turmas.map((t, idx) => ({
                nome: `Atividade Lista de exercícios ${idx + 1}`,
                turmaId: t.id
            }))
        });

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