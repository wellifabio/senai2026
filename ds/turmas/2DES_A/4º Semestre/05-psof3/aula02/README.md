# Aula02 - Recursos avançados

## Criando Full-Stack com a dependência do prof Reenye na API
#### 1 Criar uma pasta para o Projeto e Abrir com VsCode
- Instalar globalmente a dependência backend-aula
```bash
npm i -g backend-aula
```
- 1 iniciar um novo backend
```bash
npx backend-aula backend
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
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
}

model produto {
  id        Int     @id @default(autoincrement())
  nome      String  @db.VarChar(40)
  descricao String  @db.VarChar(200)
  imagem    String? @db.VarChar(200)
  itens     item[]
}

model pedido {
  id          Int      @id @default(autoincrement())
  cliente     String   @db.VarChar(200)
  cep         String   @db.VarChar(10)
  numero      String?  @db.VarChar(10)
  complemento String?  @db.VarChar(20)
  data        DateTime @default(now())
  itens       item[]
}

model item {
  id         Int     @id @default(autoincrement())
  pedidoId   Int
  produtoId  Int
  quantidade Int
  preco      Decimal @db.Decimal(10, 2)
  pedido     pedido  @relation(fields: [pedidoId], references: [id])
  produto    produto @relation(fields: [produtoId], references: [id])
}
```
- Esquema criado com base no MER abaixo:
![MER](./mer.png)
#### 4 Se usar o XAMPP, abrir o Control Panel e dar **start** em MySQL, se usa o MariaDB diretamente, apenas instalar as dependências do **prisma**
- Acesse a pasta API e rode os comandos abaixo:
```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```
##### Casos de erro comuns
- Pode ser que seu já exista um banco de dados com este nome no seu computador.
```bash
npm i
npx prisma migrate reset
```
- Se o erro for de versão do prisma, atualize com o comando
```bash
npm i -g prisma
```
- ou remova e instale a versão 7
 ```bash
npm uninstall prisma @prisma/client
npm install prisma@7 @prisma/client@7
```
#### 5 Semear dados de teste no banco de dados
- Crie um arquivo chamado **seed.js** na pasta **api/prisma** com o conteúdo abaixo:
```js
const prisma = require('../src/data/prisma')

async function main() {
    await prisma.$transaction(async (transaction) => {
        await transaction.item.deleteMany()
        await transaction.pedido.deleteMany()
        await transaction.produto.deleteMany()

        const produtos = await Promise.all([
            transaction.produto.create({ data: { nome: "Caneta Azul", descricao: "Caneta esferográfica azul", imagem:"caneta.png" } }),
            transaction.produto.create({ data: { nome: "Caderno 100 folhas", descricao: "Caderno brochura 100 folhas", imagem:"caderno.png" } }),
            transaction.produto.create({ data: { nome: "Lápis Preto", descricao: "Lápis preto nº 2", imagem:"lapis.png" } }),
            transaction.produto.create({ data: { nome: "Borracha Branca", descricao: "Borracha branca macia", imagem:"borracha.png" } }),
            transaction.produto.create({ data: { nome: "Mochila Escolar", descricao: "Mochila escolar com compartimentos", imagem:"mochila.png" } }),
            transaction.produto.create({ data: { nome: "Estojo de Lápis", descricao: "Estojo de lápis com zíper", imagem:"estojo.png" } })
        ])
        console.log('Produtos inseridos com sucesso!');

        const pedidos = await Promise.all([
            transaction.pedido.create({ data: { cliente: "Ana Silva", cep: "13914552", numero: "100", complemento: "Apto 101" } }),
            transaction.pedido.create({ data: { cliente: "Carlos Oliveira", cep: "13905522", numero: "200", complemento: "Casa 2" } }),
            transaction.pedido.create({ data: { cliente: "Maria Santos", cep: "13476622", numero: "300", complemento: "Fundos" } })
        ])
        console.log('Pedidos inseridos com sucesso!');

        await transaction.item.createMany({
            data: [
                { pedidoId: pedidos[0].id, produtoId: produtos[0].id, quantidade: 50, preco: 1.5 },
                { pedidoId: pedidos[0].id, produtoId: produtos[1].id, quantidade: 15, preco: 15.0 },
                { pedidoId: pedidos[1].id, produtoId: produtos[2].id, quantidade: 25, preco: 1.3 },
                { pedidoId: pedidos[1].id, produtoId: produtos[3].id, quantidade: 10, preco: 1.8 },
                { pedidoId: pedidos[1].id, produtoId: produtos[4].id, quantidade: 10, preco: 2.5 },
                { pedidoId: pedidos[2].id, produtoId: produtos[0].id, quantidade: 5, preco: 1.5 }
            ]
        })
        console.log('Itens inseridos com sucesso!');
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
```
- Acrescente a referencia ao arquivo **seed: 'node prisma/seed.js'** no arquivo **prisma.config.ts**
```js
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: 'node prisma/seed.js',
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
```
- Acrescente o script de seed no package.json abaixo da sessão de scripts, ficando assim:
```json
  "prisma": {
    "seed": "node prisma/seed.js"
  }
```
- Execute o comando para semear os dados no banco de dados
```bash
npm install
npx prisma db seed
```
#### 6 Criar os controllers básicos (CRUD) e rotas, pare a execução do projeto, use o comando abaixo colocando o nome para cada tabela
```bash
npx backend-aula -models
# ou para criar apenas uma tabela por vez
npx backend-aula -r nometabela
```
#### 7 Criar o arquivo de testes do insomnia:
```bash
npx backend-aula -insomnia
```
#### 8 Execute o projeto e teste com insomnia
```bash
npm run dev
``` 
#### 9 Criar o arquivo **.gitignore** na raiz contendo o node_module e .env
```
node_module
.env
```

#### 10 Agora altere os controles conforme a necessidade do seu projeto, alterando os arquivos dentro da pasta **src/controllers**

Neste projeto foram alterados os arquivos:
- src/controllers/pedido.controller.js
```js
const listar = async (req, res) => {
    const lista = await prisma.pedido.findMany({
        include: {
            itens: true,
        }
    });

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.pedido.findUnique({
        where: { id: Number(id) },
        include: {
            itens: true,
        }
    });

    res.json(item).status(200).end();
};
```
- src/controllers/item.controller.js
```js
const listar = async (req, res) => {
    const lista = await prisma.item.findMany({
        include: {
            produto: true,
        }
    });

    res.json(lista).status(200).end();
};
```
- Ao **listar** os pedidos via **Insomnia** nesta rota `http://localhost:3000/pedido/listar` retorna:
```json
[
	{
		"id": 1,
		"cliente": "Ana Silva",
		"cep": "13914552",
		"numero": "100",
		"complemento": "Apto 101",
		"data": "2026-09-02T19:05:08.548Z",
		"itens": [
			{
				"id": 1,
				"pedidoId": 1,
				"produtoId": 1,
				"quantidade": 50,
				"preco": "1"
			},
			{
				"id": 2,
				"pedidoId": 1,
				"produtoId": 2,
				"quantidade": 15,
				"preco": "1"
			}
		]
	},
	{
		"id": 2,
		"cliente": "Carlos Oliveira",
		"cep": "13905522",
		"numero": "200",
		"complemento": "Casa 2",
		"data": "2026-09-02T19:05:08.555Z",
		"itens": [
			{
				"id": 3,
				"pedidoId": 2,
				"produtoId": 3,
				"quantidade": 25,
				"preco": "1"
			},
			{
				"id": 4,
				"pedidoId": 2,
				"produtoId": 4,
				"quantidade": 10,
				"preco": "1"
			},
			{
				"id": 5,
				"pedidoId": 2,
				"produtoId": 5,
				"quantidade": 10,
				"preco": "1"
			}
		]
	},
	{
		"id": 3,
		"cliente": "Maria Santos",
		"cep": "13476622",
		"numero": "300",
		"complemento": "Fundos",
		"data": "2026-09-02T19:05:08.557Z",
		"itens": [
			{
				"id": 6,
				"pedidoId": 3,
				"produtoId": 1,
				"quantidade": 5,
				"preco": "1"
			}
		]
	}
]
```

# FrontEnd
Dentro do seu projeto crie uma pasta chamada **frontend** e dentro dela crie um arquivo chamado **index.html** com o conteúdo abaixo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Acompanhamento de pedidos e itens">
    <title>Pedidos | Painel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="page-shell">
        <header class="topbar">
            <a class="brand" href="./" aria-label="Painel de pedidos">
                <span class="brand-mark">P</span>
                <span>pedidos<span class="brand-dot">.</span></span>
            </a>
            <div class="topbar-meta">
                <span class="live-dot" aria-hidden="true"></span>
                <span>Visão geral</span>
            </div>
        </header>

        <section class="hero" aria-labelledby="page-title">
            <div>
                <p class="eyebrow">Operação diária</p>
                <h1 id="page-title">Pedidos em foco<span class="title-accent">.</span></h1>
                <p class="hero-copy">Acompanhe pedidos, itens e valores em um só lugar.</p>
            </div>
            <button class="refresh-button" id="refresh-button" type="button">
                <span class="refresh-icon" aria-hidden="true">↻</span>
                Atualizar
            </button>
        </section>

        <section class="summary-grid" aria-label="Resumo dos pedidos">
            <article class="summary-card summary-card--primary">
                <span class="summary-label">Pedidos ativos</span>
                <strong class="summary-value" id="orders-count">—</strong>
                <span class="summary-note">na sua operação</span>
            </article>
            <article class="summary-card">
                <span class="summary-label">Itens separados</span>
                <strong class="summary-value" id="items-count">—</strong>
                <span class="summary-note">unidades no total</span>
            </article>
            <article class="summary-card">
                <span class="summary-label">Última atualização</span>
                <strong class="summary-value summary-value--time" id="last-update">—</strong>
                <span class="summary-note" id="connection-status">conectando à API</span>
            </article>
        </section>

        <section class="orders-section" aria-labelledby="orders-title">
            <div class="section-heading">
                <div>
                    <p class="eyebrow">Lista completa</p>
                    <h2 id="orders-title">Todos os pedidos</h2>
                </div>
                <span class="order-count" id="orders-caption">carregando...</span>
            </div>
            <div class="feedback" id="feedback" role="status" aria-live="polite">
                <span class="spinner" aria-hidden="true"></span>
                Buscando pedidos...
            </div>
            <div class="orders-list" id="orders-list"></div>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>
```
- Crie um arquivo chamado **style.css** com o conteúdo abaixo:
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

:root {
    --ink: #17212b;
    --muted: #73808c;
    --line: #dfe5e8;
    --paper: #f6f8f7;
    --white: #ffffff;
    --mint: #bce8d5;
    --mint-deep: #287b5a;
    --orange: #f28b62;
    --navy: #1e3545;
    --shadow: 0 18px 45px rgba(28, 49, 59, 0.08);
}

* { box-sizing: border-box; }

body {
    margin: 0;
    color: var(--ink);
    background: var(--paper);
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
}

body::before {
    content: '';
    position: fixed;
    inset: 0 0 auto;
    height: 420px;
    z-index: -1;
    background: linear-gradient(125deg, #e5f4ed 0%, #f6f8f7 56%, #fff3e7 100%);
}

.page-shell { width: min(1120px, calc(100% - 48px)); margin: 0 auto; padding: 28px 0 80px; }
.topbar { display: flex; align-items: center; justify-content: space-between; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: var(--ink); font: 700 21px 'Space Grotesk', sans-serif; text-decoration: none; letter-spacing: -.4px; }
.brand-mark { display: grid; width: 34px; height: 34px; place-items: center; color: var(--white); border-radius: 10px 10px 10px 3px; background: var(--navy); }
.brand-dot, .title-accent { color: var(--orange); }
.topbar-meta { display: flex; align-items: center; gap: 8px; color: var(--muted); font-size: 13px; font-weight: 600; }
.live-dot { width: 8px; height: 8px; border-radius: 50%; background: #46bd82; box-shadow: 0 0 0 4px rgba(70, 189, 130, .16); }
.hero { display: flex; align-items: end; justify-content: space-between; gap: 24px; padding: 82px 0 43px; }
.eyebrow { margin: 0 0 11px; color: var(--mint-deep); font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }
h1, h2 { margin: 0; font-family: 'Space Grotesk', sans-serif; letter-spacing: -1.6px; }
h1 { font-size: clamp(38px, 5vw, 60px); line-height: 1.02; }
h2 { font-size: 30px; }
.hero-copy { margin: 17px 0 0; color: var(--muted); font-size: 16px; }
.refresh-button { display: inline-flex; align-items: center; gap: 9px; padding: 12px 17px; border: 1px solid var(--line); border-radius: 9px; color: var(--ink); background: rgba(255,255,255,.72); cursor: pointer; font: 600 14px 'DM Sans', sans-serif; transition: transform .2s, box-shadow .2s, background .2s; }
.refresh-button:hover { background: var(--white); box-shadow: var(--shadow); transform: translateY(-2px); }
.refresh-button:disabled { opacity: .6; cursor: wait; }
.refresh-icon { display: inline-block; font-size: 20px; line-height: 12px; }
.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.summary-card { min-height: 148px; padding: 24px; border: 1px solid var(--line); border-radius: 12px; background: rgba(255,255,255,.72); }
.summary-card--primary { border-color: transparent; background: var(--navy); color: var(--white); box-shadow: var(--shadow); }
.summary-label, .summary-note { display: block; font-size: 13px; }
.summary-label { font-weight: 600; }
.summary-note { margin-top: 8px; color: var(--muted); }
.summary-card--primary .summary-note { color: #a9c4c4; }
.summary-value { display: block; margin-top: 18px; font: 600 37px 'Space Grotesk', sans-serif; letter-spacing: -1px; }
.summary-value--time { font-size: 28px; }
.orders-section { margin-top: 70px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 20px; padding-bottom: 19px; border-bottom: 1px solid var(--line); }
.order-count { color: var(--muted); font-size: 13px; }
.feedback { display: flex; align-items: center; gap: 10px; padding: 28px 0; color: var(--muted); font-size: 14px; }
.feedback[hidden] { display: none; }
.feedback--error { color: #b85437; }
.spinner { width: 15px; height: 15px; border: 2px solid #c9d8d3; border-top-color: var(--mint-deep); border-radius: 50%; animation: spin .8s linear infinite; }
.orders-list { display: grid; gap: 15px; }
.order-card { display: grid; grid-template-columns: minmax(190px, .9fr) 1.5fr; gap: 28px; padding: 25px 27px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); box-shadow: 0 8px 24px rgba(28,49,59,.035); animation: rise .45s both; }
.order-main { display: flex; flex-direction: column; justify-content: space-between; gap: 26px; }
.order-number { color: var(--muted); font-size: 12px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; }
.customer { margin: 7px 0 0; font: 600 23px 'Space Grotesk', sans-serif; letter-spacing: -.6px; }
.order-details { display: flex; flex-wrap: wrap; gap: 8px 17px; color: var(--muted); font-size: 13px; }
.order-detail { display: inline-flex; align-items: center; gap: 6px; }
.detail-icon { color: var(--orange); font-size: 15px; }
.items-box { padding-left: 27px; border-left: 1px solid var(--line); }
.items-heading { display: flex; align-items: center; justify-content: space-between; margin-bottom: 13px; color: var(--muted); font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.items-total { color: var(--mint-deep); letter-spacing: 0; text-transform: none; }
.item-row { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: 16px; padding: 13px 0; border-top: 1px solid #edf0f0; font-size: 14px; }
.item-name { overflow: hidden; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
.item-quantity { color: var(--muted); font-size: 13px; }
.item-price { font-weight: 700; }
.empty-state { padding: 50px; color: var(--muted); text-align: center; }

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 700px) {
    .page-shell { width: min(100% - 32px, 540px); padding-top: 20px; }
    .hero { align-items: start; flex-direction: column; padding: 64px 0 34px; }
    .summary-grid { grid-template-columns: 1fr; }
    .summary-card { min-height: auto; }
    .summary-value { margin-top: 12px; }
    .orders-section { margin-top: 52px; }
    .section-heading { align-items: start; flex-direction: column; gap: 10px; }
    .order-card { grid-template-columns: 1fr; gap: 22px; padding: 22px 19px; }
    .items-box { padding: 20px 0 0; border-top: 1px solid var(--line); border-left: 0; }
    .item-row { gap: 9px; }
}
```
- Crie um arquivo chamado **script.js** com o conteúdo abaixo:
```js
const API_URL = 'http://localhost:3000';

const ordersList = document.querySelector('#orders-list');
const feedback = document.querySelector('#feedback');
const refreshButton = document.querySelector('#refresh-button');
const ordersCount = document.querySelector('#orders-count');
const itemsCount = document.querySelector('#items-count');
const lastUpdate = document.querySelector('#last-update');
const connectionStatus = document.querySelector('#connection-status');
const ordersCaption = document.querySelector('#orders-caption');

const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(Number(value) || 0);

const formatDate = (value) => new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
}).format(new Date(value));

const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const renderOrders = (orders, products) => {
    const productMap = new Map(products.map((product) => [product.id, product]));
    const totalItems = orders.reduce((total, order) => total + order.itens.reduce((sum, item) => sum + item.quantidade, 0), 0);

    ordersCount.textContent = orders.length;
    itemsCount.textContent = totalItems;
    ordersCaption.textContent = `${orders.length} ${orders.length === 1 ? 'pedido encontrado' : 'pedidos encontrados'}`;
    lastUpdate.textContent = new Intl.DateTimeFormat('pt-BR', { timeStyle: 'short' }).format(new Date());
    connectionStatus.textContent = 'dados atualizados agora';

    if (!orders.length) {
        ordersList.innerHTML = '<div class="empty-state">Nenhum pedido encontrado.</div>';
        return;
    }

    ordersList.innerHTML = orders.map((order, orderIndex) => {
        const itemCount = order.itens.reduce((sum, item) => sum + item.quantidade, 0);
        const items = order.itens.map((item) => {
            const product = productMap.get(item.produtoId);
            const productName = product ? product.nome : `Produto #${item.produtoId}`;
            return `
                <div class="item-row">
                    <span class="item-name" title="${escapeHtml(productName)}">${escapeHtml(productName)}</span>
                    <span class="item-quantity">${item.quantidade} un.</span>
                    <strong class="item-price">${formatCurrency(item.preco)}</strong>
                </div>`;
        }).join('');

        return `
            <article class="order-card" style="animation-delay: ${orderIndex * 70}ms">
                <div class="order-main">
                    <div>
                        <span class="order-number">Pedido #${order.id}</span>
                        <h3 class="customer">${escapeHtml(order.cliente)}</h3>
                    </div>
                    <div class="order-details">
                        <span class="order-detail"><span class="detail-icon">⌖</span>${escapeHtml(order.cep)}</span>
                        <span class="order-detail"><span class="detail-icon">□</span>${escapeHtml(order.numero || 'Sem número')}</span>
                        <span class="order-detail"><span class="detail-icon">◷</span>${formatDate(order.data)}</span>
                    </div>
                </div>
                <div class="items-box">
                    <div class="items-heading">
                        <span>Itens do pedido</span>
                        <span class="items-total">${itemCount} un.</span>
                    </div>
                    ${items || '<div class="empty-state">Este pedido não possui itens.</div>'}
                </div>
            </article>`;
    }).join('');
};

const loadOrders = async () => {
    refreshButton.disabled = true;
    feedback.hidden = false;
    feedback.classList.remove('feedback--error');
    feedback.innerHTML = '<span class="spinner" aria-hidden="true"></span>Buscando pedidos...';

    try {
        const [ordersResponse, productsResponse] = await Promise.all([
            fetch(`${API_URL}/pedido/listar`),
            fetch(`${API_URL}/produto/listar`)
        ]);

        if (!ordersResponse.ok || !productsResponse.ok) {
            throw new Error('A API retornou um erro.');
        }

        const [orders, products] = await Promise.all([
            ordersResponse.json(),
            productsResponse.json()
        ]);

        renderOrders(orders, products);
        feedback.hidden = true;
    } catch (error) {
        ordersCount.textContent = '—';
        itemsCount.textContent = '—';
        ordersCaption.textContent = 'não foi possível carregar';
        connectionStatus.textContent = 'verifique se a API está rodando';
        feedback.classList.add('feedback--error');
        feedback.innerHTML = 'Não foi possível carregar os pedidos. Inicie o backend em <strong>http://localhost:3000</strong> e tente novamente.';
        ordersList.innerHTML = '';
    } finally {
        refreshButton.disabled = false;
    }
};

refreshButton.addEventListener('click', loadOrders);
loadOrders();
```
- Após isso, abra o arquivo **index.html** no navegador e veja o resultado.
  - Utilize o Live server do VsCode para abrir o arquivo, ou abra diretamente no navegador.
#### Resultado
![Resultado](./web.png)

#### Estrutura de pastas do projeto
```
pedidos
-- backend
  -- src
    -- controllers
    -- data
    -- routes
-- frontend
   -- index.html
   -- script.js
   -- style.css
```
