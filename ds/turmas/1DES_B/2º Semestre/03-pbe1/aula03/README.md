# Aula03
Objetos JSON Servidor (NodeJS) x Cliente (HTML)

## REST Verbos HTTP - GET x POST
Os verbos do protocolo HTTP é maneira como o Back-end(Servidor) se comunica com o Front-End(Cliente)
- Web Services
    - HTTP (Protocolo)
    - REST (Representational State Transfer, ou Transferência de Estado Representacional)
        - GET (Verbo para obter dados do servidor)
        - POST (Verbo para enviar dados para o servidor)
    - JSON (Padrão de dados)


### Capacidades Técnicas
- 1 Utilizar o paradigma da programação orientada a objetos
- 3 Aplicar técnicas de código limpo (clean code)
- 4 Identificar as características de programação back-end em ambiente web

### Capacidades Socioemocionais
- 1 Demonstrar autogestão
- 2 Demonstrar pensamento analítico

## Conhecimentos
- 2 Web Services
  - 2.1. Definição
  - 2.2. REST
    - 2.2.1. Recursos
    - 2.2.2. Semântica da URL REST
  - 2.3. Padrão JSON
    - 2.3.1. Sintaxe básica
    - 2.3.2. Tipos de dados
    - 2.3.3. Formatação
    - 2.3.4. Coleção de objetos JSON

## Demonstração -  Projeto: Pedidos Medieval
- Vamos criar uma estrutura de pastas para o projeto full-stack (Pilha completa)
```
pedidos_medieval
|-- dados.json
|-- servidor
    |-- server.js
|-- cliente
    |-- index.html
```
- Abra sua pasta com VsCode, e em um terminal **CMD**
- Vamos usar o **npm** (Node Package Manager) para criar um novo projeto
```cmd
npm init -y
```
- Será criado o arquivo de configuração **package.json** semelhanta ao abaixo
```json
{
  "name": "pedidos_medieval",
  "version": "1.0.0",
  "main": "servidor/server.js",
  "scripts": {
    "dev": "node servidor/server.js"
  },
  "keywords": ["Medieval","Pedidos"],
  "author": "wellifabio",
  "license": "ISC",
  "description": "Projeto de exemplo para aprendizado"
}
```
- Vamos preencher alguns dados no formato JSON no arquivo **dados.json**
```json
[
    {
        "id": 1,
        "nome": "Espada flamejante",
        "peso": 5.5,
        "quantidade": 1,
        "preco": 3250.9
    },
    {
        "id": 2,
        "nome": "Escudo Viking",
        "peso": 12,
        "quantidade": 3,
        "preco": 750
    },
    {
        "id": 3,
        "nome": "Arco Arcano",
        "peso": 1.2,
        "quantidade": 1,
        "preco": 1890.5
    }
]
```
- Vamos importar o pacote express para o nosso projeto ele controla o protocolo REST HTTP e os vermos GET e POST
```cmd
npm install express
```
- Será criada uma pasta no seu projeto chamada: node_modules
- Vamos ignorar esta pasta no github criando o arquivo **.gitignore** e escrevendo o nome dela
```
node_modules
```
- Agora editar o servidor/server.js para responder as requisições REST
```js
const express = require("express")
const pedidos = require("../dados.json")

const mostrarPedidos = (req, res) => {
    res.send(pedidos)
}

const app = express()
const porta = 3000

app.get("/", mostrarPedidos)

app.listen(porta, () => { console.log(`Servidor: http://127.0.0.1:${porta}`) })
```
- Execute o back-end com o comando
```cmd
nom run dev
```
- O resultado aparece no terminal semelhanta ao abaixo:
```cmd
> produtos_quitanda@1.0.0 dev
> node servidor/server.js

Servidor: http://127.0.0.1:3000
```
- Segure o **CTRL** e clique sobre o link do servidor http://127.0.0.1:3000
- Ira abrir uma página web com os dados dos pedidos:
```
[
    {"id":1,"nome":"Espada flamejante","peso":5.5,"quantidade":1,"preco":3250.9},
    {"id":2,"nome":"Escudo Viking","peso":12,"quantidade":3,"preco":750},
    {"id":3,"nome":"Arco Arcano","peso":1.2,"quantidade":1,"preco":1890.5}
]
```
Pronto o verbo GET foi respondido na primeira rota do back end "/" com os dados de pedidos

## Front-End - Formulário para novo pedido
Agora vamos criar uma UI(User Interface) HTML com um formulário para cadastrar novo pedido e enviar para o servidor, edite o arquivo **cliente/index.html**
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedido Medieval</title>
</head>

<body>
    <center>
        <h1>Novo Pedido</h1>
        <form action="http://127.0.0.1:3000" method="post">
            <input type="number" placeholder="Identidade" name="id" required><br><br>
            <input type="text" placeholder="Nome do produto" name="nome" required><br><br>
            <input type="number" placeholder="Peso em Kg" name="peso" step="0.01" required><br><br>
            <input type="number" placeholder="Quantidade" name="quantidade" required><br><br>
            <input type="number" placeholder="Preço" name="preco" step="0.01" required><br><br>
            <button type="reset">Limpar</button>
            <button type="submit">Enviar</button>
        </form>
    </center>
</body>

</html>
```
- Vamos ajustar o servidor para receber o novo pedido
- Altere o arquivo servidor/server.js com o código a seguir
```js

```
- Para testar, vá até o terminal, pare o servidor `CTRL + C` e execute novamente `npm run dev`
- Repare que agora aparece os dois endereços agora, cliente e servidor. Teste também o index.html via live server.
- Abra os dois endereçõs clicando neles com o CTRL pressionado e faça testes.
