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
