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

        // Inserir novos dados
        console.log(`Inserindo 3 professores...`);
        await prisma.professor.createMany({
            data: [
                {
                    nome: "Prof. Wellington",
                    email: "wellington@email.com",
                    senha: "senha123"
                },
                {
                    nome: "Prof. Robson",
                    email: "robson@email.com",
                    senha: "senha456"
                },
                {
                    nome: "Prof. Reenye",
                    email: "reenye@email.com",
                    senha: "senha789"
                }
            ]
        });

        console.log(`Inserindo 3 turmas para cada professor...`);
        await prisma.turma.createMany({
            data: [
                {
                    nome: "1º ano A",
                    professorId: 1
                },
                {
                    nome: "1º ano B",
                    professorId: 1
                },
                {
                    nome: "1º ano C",
                    professorId: 1
                },
                                {
                    nome: "2º ano A",
                    professorId: 2
                },
                {
                    nome: "2º ano B",
                    professorId: 2
                },
                {
                    nome: "2º ano C",
                    professorId: 2
                },
                                {
                    nome: "3º ano A",
                    professorId: 3
                },
                {
                    nome: "3º ano B",
                    professorId: 3
                },
                {
                    nome: "3º ano C",
                    professorId: 3
                }
            ]
        });

        console.log(`Inserindo 1 Atividade para cada turma...`);
        await prisma.atividade.createMany({
            data: [
                {
                    nome: "Atividade Lista de exercícios1",
                    turmaId: 1
                },
                {
                    nome: "Atividade Lista de exercícios2",
                    turmaId: 2
                },
                {
                    nome: "Atividade Lista de exercícios3",
                    turmaId: 3
                },
                {
                    nome: "Atividade Lista de exercícios4",
                    turmaId: 4
                },
                {
                    nome: "Atividade Lista de exercícios5",
                    turmaId: 5
                },
                {
                    nome: "Atividade Lista de exercícios6",
                    turmaId: 6
                },
                {
                    nome: "Atividade Lista de exercícios7",
                    turmaId: 7
                },
                {
                    nome: "Atividade Lista de exercícios8",
                    turmaId: 8
                },
                {
                    nome: "Atividade Lista de exercícios9",
                    turmaId: 9
                }
            ]
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