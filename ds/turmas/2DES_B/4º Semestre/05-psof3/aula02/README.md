# Aula02 - Recursos avançados

## Criando Full-Stack com a dependência do prof Reenye na API
#### 1 Criar uma pasta para o Projeto e Abrir com VsCode
- Instalar globalmente a dependência backend-aula
```bash
npm i -g backend-aula
```
- 1 iniciar uma nova API backend
```bash
npx backend-aula api
```
#### 2 Alterar o nome do banco de dados no arquivo **.env**
```js
PORT=3000
DATABASE_URL="mysql://root@localhost:3306/mydb"
```
de 
```js
PORT=3000
DATABASE_URL="mysql://root@localhost:3306/pedidos_exemplo"
```
#### 3 Editar o prisma/schema.prisma adicionando os models (tabelas e relacionamentos)
```js
```
#### 4 Se usar o XAMPP, abrir o Control Panel e dar **start** em MySQL, se usa o MariaDB diretamente, apenas instalar as dependências do **prisma**
```bash
npx prisma generate
npx prisma migrate dev --name init
```
   - Caso de algum erro pode ser que seu banco já exista corrija com os comandos
    
        ```bash
            npm i
            npx prisma migrate reset
        ```
    - Se o erro for de versão do prisma, atualize com o comando
        ```bash
            npm i -g prisma
        ```
    ou remova e instale a versão 7
        ```bash
            npm uninstall prisma @prisma/client
            npm install prisma@7 @prisma/client@7
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