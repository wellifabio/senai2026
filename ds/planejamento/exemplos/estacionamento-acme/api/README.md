# API - Estacionamento
Back-end do projeto estacionamento
## DER - DC (Diagrama de classes)
![DER](../docs/der-dc.png)
## Tecnologias
- XAMPP
    - MariaDB
- NodeJS
    - Prisma
    - backend-aula

## Como testar
- 1 Clone este repositório
- 2 Abra com o **VsCode** e em um terminal (CMD ou bash), navegue até a pasta /api, instale as dependências.
```bash
cd api
npm install
```
- 3 Crie o arquivo .env contendo as variáveis de ambiente
```env
PORT=3000
DATABASE_URL="mysql://root@localhost:3306/est_acme"
```
- 4 Abra o XAMPP, de **Start** no MySQL, faça a migração do banco de dados e execute a API
```bash
npx prisma migrate dev --name init
npx prisma generate
npx prisma db seed
npm run dev
```