require('dotenv').config();
const prisma = require("../src/data/prisma");

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
        console.log(`Gerando estadias a partir da data de ontem...`);
        for (const automovel of automoveis) {
            let entrada = Math.floor(Math.random() * 10)
            let horas = Math.floor(Math.random() * 5) + 1; // Entre 1 e 5 horas
            let minutos = Math.floor(Math.random() * 20) + 40; // Entre 40 e 60 minutos
            await prisma.estadia.create({
                data: {
                    placa: automovel.placa,
                    entrada: new Date(Date.now() - (72 + entrada) * 60 * 60 * 1000), // Data de ontem
                    saida: new Date(Date.now() - (72 + entrada - horas) * 60 * 60 * 1000 - (minutos * 60 * 1000)), // Data de ontem
                    valorHora: automovel.tipo === "CARRO" ? 10.0 : 5.0,
                    valorTotal: automovel.tipo === "CARRO" ? 10.0 * horas : 5.0 * horas,
                }
            });
        }
        for (const automovel of automoveis) {
            let entrada = Math.floor(Math.random() * 10)
            let horas = Math.floor(Math.random() * 5) + 1; // Entre 1 e 5 horas
            let minutos = Math.floor(Math.random() * 20) + 40; // Entre 40 e 60 minutos            
            await prisma.estadia.create({
                data: {
                    placa: automovel.placa,
                    entrada: new Date(Date.now() - (48 + entrada) * 60 * 60 * 1000), // Data de ontem
                    saida: new Date(Date.now() - (48 + entrada - horas) * 60 * 60 * 1000 - (minutos * 60 * 1000)), // Data de ontem
                    valorHora: automovel.tipo === "CARRO" ? 10.0 : 5.0,
                    valorTotal: automovel.tipo === "CARRO" ? 10.0 * horas : 5.0 * horas,
                }
            });
        }
        for (const automovel of automoveis) {
            let entrada = Math.floor(Math.random() * 10)
            let horas = Math.floor(Math.random() * 5) + 1; // Entre 1 e 5 horas
            let minutos = Math.floor(Math.random() * 20) + 40; // Entre 40 e 60 minutos            
            await prisma.estadia.create({
                data: {
                    placa: automovel.placa,
                    entrada: new Date(Date.now() - (24 + entrada) * 60 * 60 * 1000), // Data de ontem
                    saida: new Date(Date.now() - (24 + entrada - horas) * 60 * 60 * 1000 - (minutos * 60 * 1000)), // Data de ontem
                    valorHora: automovel.tipo === "CARRO" ? 10.0 : 5.0,
                    valorTotal: automovel.tipo === "CARRO" ? 10.0 * horas : 5.0 * horas,
                }
            });
        }
        console.log('✓ Estadia de ontem gerada para cada automóvel!');
        await prisma.estadia.createMany({
            data: [{
                placa: automoveis[0].placa,
                entrada: new Date(Date.now()), // Data de hoje
                valorHora: automoveis[0].tipo === "CARRO" ? 10.0 : 5.0,
                vaga: 'C1'
            },
            {
                placa: automoveis[1].placa,
                entrada: new Date(Date.now()), // Data de hoje
                valorHora: automoveis[1].tipo === "CARRO" ? 10.0 : 5.0,
                vaga: 'M1'
            },
            {
                placa: automoveis[2].placa,
                entrada: new Date(Date.now()), // Data de hoje
                valorHora: automoveis[2].tipo === "CARRO" ? 10.0 : 5.0,
                vaga: 'C3'
            }]
        });
        console.log('✓ Estadia de hoje gerada para 3 automóveis!');
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