# Aula02 - GitHub: Fork
Modelo de trabalho colaborativo

## O que é fork
No GitHub, um fork é uma cópia pessoal de um repositório (projeto) de terceiros, criada na sua própria conta. Ele permite que você faça alterações, testes ou melhorias no código sem afetar o projeto original ("upstream"). A principal finalidade é facilitar contribuições via "pull request" ou experimentar modificações de forma independente

## Pull Request
Um Pull Request (PR) no GitHub é uma solicitação formal para mesclar (fazer merge) alterações de código de um branch (ramificação) para outro, geralmente a base principal do projeto. Ele funciona como uma revisão colaborativa, permitindo que a equipe analise, comente e aprove as mudanças antes de integrá-las, garantindo a segurança e qualidade do código.

## Atividade desafiadora
Faça fork [neste repositório](https://github.com/wellifabio/senai-full-stack-estacionamento-2026.git) desenvolva os requisitos, faça commits constantes e ao concluir faça o pull-request.

## Criando Back-end com a dependência do prof Reenye
- Instalar globalmente a dependência
```bash
npm i -g backend-aula
```
- 1 iniciar um novo backend
```bash
npx backend-aula api
```
- 2 Acessar a pasta do back-end e instalar as dependências
```bash
cd api
npm i
```
- 3 Alterar o nome do banco de dados no arquivo **.env**
```
PORT=3000
DATABASE_URL="mysql://root@localhost:3306/mydb"
```
- 4 Editar o prisma/schema.prisma adicionando os models (tabelas e relacionamentos)
- 5 Abrir o XAMPP, dar **start** em MySQL e instalar as dependências do **prisma**
```bash
npx prisma migrate dev --name init
```
   
   - Caso de algum erro pode ser que seu banco já exista corrija com os comandos
    
        ```bash
            npm i
            npx prisma migrate reset
        ```
- 6 Para executar o projeto
```bash
npm run dev
``` 