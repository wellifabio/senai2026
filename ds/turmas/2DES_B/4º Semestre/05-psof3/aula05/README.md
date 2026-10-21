# Aula05 - Recursos Avançados - Prisma Seed
## Prisma Seed
Criar e preencher um banco de dados relacional com dados de teste.

## Projeto: Eventos Climáticos
Sistema para registro de eventos climáticos extremos.

## Documentação
![MER DER](./mer_der_conceitual.png)
![UML DC](./uml_dc.png)

## Vamos desenvolver
#### Passo 01 - Iniciar o projeto
- Criar uma pasta `c:/App/eventos` e abrir com o VsCode
- Abrir o Terminal `CTRL + '` e digitar os comandos para criar o back-end com a extenção do prof Reenye.
```bash
npx backend-aula api
cd api
npm uninstall prisma @prisma/client
npm install prisma@7 @prisma/client@7
```
#### Passo 02 - Alterar o nome do banco de dados no arquivo **.env**
```js
PORT=3000
DATABASE_URL="mysql://root@localhost:3306/mydb"
```
de 
```js
PORT=3000
DATABASE_URL="mysql://root@localhost:3306/eventos"
```
#### Passo 03 - Editar o prisma/schema.prisma
Adicionando os models (tabelas e relacionamentos) conforme o DER e Diagrama de classes
```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
}

model Usuario{
  id Int @id @default(autoincrement())
  nome String @db.VarChar(100)
  email String @db.VarChar(100)
  senha String @db.VarChar(100)
  eventos Evento[]
}

model Evento{
  id Int @id @default(autoincrement())
  usuarioId Int
  cidade String @db.VarChar(50)
  tipoEvento String @db.VarChar(50)
  temperaturaMaxima Float?
  data DateTime @default(now())
  nivelImpacto String @db.VarChar(50)
  usuario Usuario  @relation(fields: [usuarioId], references: [id])
}
```
#### Passo 04 - Implantar o Modelo no SGBD
- Se usar o XAMPP, abrir o Control Panel e dar **start** em MySQL, se usa o MariaDB diretamente, apenas instalar as dependências do **prisma**
- Ainda no terminal na pasta `/api` rode os comandos abaixo:
```bash
npx prisma generate
npx prisma migrate dev --name init
```