# Aula02 - Basic CRUD
## Prisma x Insomia
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
npx prisma generate
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
- 7 Para criar os controllers básicos (CRUD) e rotas, pare a execução do projeto, use o comando abaixo colocando o nome para cada tabela
```bash
npx backend-aula -models
# ou para criar apenas uma tabela por vez
npx backend-aula -r nometabela
```
- 8 Para criar o arquivo de testes do insomnia:
```bash
npx backend-aula -insomnia
```
- Execute o projeto e teste com insomnia
```bash
npm run dev
``` 
- Antes fazer **commit**, não esqueça de criar o arquivo **.gitignore** na raiz contendo o node_module e .env
```
node_module
.env
```