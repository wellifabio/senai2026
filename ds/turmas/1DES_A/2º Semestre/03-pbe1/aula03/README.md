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

## Demonstração -  Projeto: Produtos Quitanda
- Vamos criar uma estrutura de pastas para o projeto full-stack (Pilha completa)
```
produtos_quitanda
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
  "name": "produtos_quitanda",
  "version": "1.0.0",
  "description": "Exemplo de cliente x servidor full-stack",
  "main": "servidor/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["quitanda","produtos"],
  "author": "wellifabio",
  "license": "ISC",
  "type": "commonjs"
}
```

