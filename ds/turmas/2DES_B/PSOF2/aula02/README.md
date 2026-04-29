# Aula02 - GitHub: Fork
Modelo de trabalho colaborativo

## O que é fork
No GitHub, um fork é uma cópia pessoal de um repositório (projeto) de terceiros, criada na sua própria conta. Ele permite que você faça alterações, testes ou melhorias no código sem afetar o projeto original ("upstream"). A principal finalidade é facilitar contribuições via "pull request" ou experimentar modificações de forma independente

## Pull Request
Um Pull Request (PR) no GitHub é uma solicitação formal para mesclar (fazer merge) alterações de código de um branch (ramificação) para outro, geralmente a base principal do projeto. Ele funciona como uma revisão colaborativa, permitindo que a equipe analise, comente e aprove as mudanças antes de integrá-las, garantindo a segurança e qualidade do código.

## Atividade desafiadora
Faça fork [neste repositório](https://github.com/wellifabio/senai-full-stack-estacionamento-2026.git) desenvolva os requisitos, faça commits constantes e ao concluir faça o pull-request.

## Criando Back-end com a dependência do prof Reenye
- 1 Instalar globalmente a dependência e iniciar um novo backend
```bash
npm i -g backend-aula
(npx) backend-aula api
```
- 2 Alterar o nome do banco de dados no .env
```
PORT=3000
DATABASE_URL="mysql://root@localhost:3306/mydb"
```
