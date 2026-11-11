# API Controle de estoque
API para controle de estoque utilizando Node.js, Express e Prisma ORM.

## Passos para testar a API
- 1 Após clonar o repositório, navegue até a pasta `api` e instale as dependências:
```bash
cd api
npm install
```
- 2 Configure o banco de dados **MySQL**, abrindo o **XAMPP** e dando *start* no **MySQL** e **Apache**, crie o arquivo `.env` na raiz da pasta `api` com a seguinte variável de ambiente:
```env
DATABASE_URL="mysql://root@localhost:3306/controle_estoque"
```
- 3 Rode as migrations para criar o banco de dados e popular com dados:
```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```
- 4 Inicie o servidor da API:
```bash
npm run dev
```
- 5 Inicie o Front-end na pasta ./web