# Aula01 -  BACK-END 1
- O que é Back-End
    - O intermediário entre as bases de dados e a interface com o usuário.
    - Utiliza um servidor de aplicação
    - API (Application Programming Interface) intermediário entre cliente e servidor

## Capacidades Técnicas
- 5 Preparar o ambiente necessário ao desenvolvimento back-end para a plataforma web
- 6 Definir os elementos de entrada, processamento e saída para a programação da aplicação web

## Conhecimentos
- 1 Ambiente de desenvolvimento web
  - 1.1. Definição
  - 1.2. Histórico
  - 1.3. Características
  - 1.4. Ambiente de desenvolvimento
    - 1.4.1. Instalação e configuração
    - 1.4.2. Recursos e interfaces
    - 1.4.3. Gerenciamento de dependências

- Tipos de Programação
    - Desktop
    - Cliente x Servidor
    - Programação Web
    - Programação Web (Back-End)
    - Programação Web (Front-End)
    - Programação para dispositivos Móveis
    - Programação iOT

## Mercado de trabalho
- Tipos de programadores e profissionais de Desenvolvimento / Programação
    - Engenheiro de Software
    - Analista de Sistemas
    - DBA (Administrador de Bancos de Dados)
    - Analista de suporte InfraEstrutura (Servidores, Rede, Nuvem)
    - Programador DevOps
    - Programador FullStack
    - Programador (Back-End)
    - Programador (Front-End)
    - Programador (Mobile)
    - Programador Ágil Scrum Master

- Servidores de Aplicação mais comuns
    - IIS (ASP)
    - Apache (PHP)
    - Aparche Tom Cat (JSP)
    - v8 (Node JS)
- Principais Verbos HTTP - REST
    - GET
    - POST
    - PUT
    - DELETE

- API que responde corretamente aos verbos do protocolo HTTP é chamada de API REST FULL

## Configurando o ambiente de desenvolvimento
- 1. Instalar o [Node.js](https://nodejs.org/en/download/)
- 2. Instalar o [Visual Studio Code](https://code.visualstudio.com/download)

### Caso já esteja instalado, verificar a versão do Node.js e do NPM (Node Package Manager) com os seguintes comandos no terminal:
```
node --version
npm --version
```
- Caso o node esteja em uma versão inferior a v24, desinstale e instale a versão mais recente.
- Caso o NPM esteja em uma versão inferior a 11, desinstale e instale a versão mais recente.
- Como utilizamos windows, após a instalação do Node.js e do Visual Studio Code, reinicie o computador.

## Testando nossos primeiros códigos com JavaScript no Node.js
- 1. Criar uma pasta chamada `back-aula01` em seu computador
- 2. Abrir o Visual Studio Code e abrir a pasta `back-aula01`
- 3. Criar um arquivo chamado `index.js` dentro da pasta `back-aula01`
- 4. Digitar o seguinte código dentro do arquivo `index.js`:
```javascript
console.log("Olá, mundo!");
```
- 5. Abrir o terminal **CTRL + `** do Visual Studio Code e digitar o seguinte comando:
```
node index.js
```
Saída

```
Olá, mundo!
```

## Programando com JavaScript no Node.js
- 1. Criar um arquivo chamado `matematica.js` dentro da pasta `back-aula01`
- 2. Digitar o seguinte código dentro do arquivo `matematica.js`:
```javascript
//Variáveis não tipadas
x = 10
y = 25
//Processamento
soma = x + y
sub = x - y
mult = x * y
div = x / y
resto = x % y
raiz = Math.sqrt(y)
potencia = Math.pow(x, 2)
//Saídas concatenadas
console.log("A soma de " + x + " + " + y + " = " + soma)
console.log("A subtração de " + x + " - " + y + " = " + sub)
//Saídas concatenadas com aspas simpes 'apóstrofes'
console.log('A multiplicação de ' + x + ' * ' + y + ' = ' + mult)
console.log('A divisão de ' + x + ' / ' + y + ' = ' + div.toFixed(2))
console.log('O resto da divisão de ' + x + ' % ' + y + ' = ' + resto)
//Saídas com template string (crase)
console.log(`A raiz quadrada de ${y} = ${raiz.toFixed(2)}`)
console.log(`A potência de ${x}² = ${potencia}`)
```
- Compile o programa com o comando `node matematica.js` no terminal do Visual Studio Code.
- Saída
```
A soma de 10 + 25 = 35
A subtração de 10 - 25 = -15
A multiplicação de 10 * 25 = 250
A divisão de 10 / 25 = 0.40
O resto da divisão de 10 % 25 = 10
A raiz quadrada de 25 = 5.00
A potência de 10² = 100
```
## Exemplo de lógica de programação com JavaScript no Node.js
- 1. Criar um arquivo chamado `logica.js` dentro da pasta `back-aula01`
- 2. Digitar o seguinte código dentro do arquivo `logica.js`:
```javascript
//Atribuição de variáveis
var nome = "João";
var idade = 25;
var cidade = "São Paulo";
//Comparação de variáveis
if (idade >= 18) console.log(nome + " é maior de idade.");
if (cidade == "São Paulo")
    console.log(`${nome} mora em São Paulo.`);
if (idade == "25")
    console.log(`${nome} tem ${idade} anos.`);
if (idade === 25)
    console.log(`${nome} tem exatamente 25 anos.`);
```
- Compile o programa com o comando `node logica.js` no terminal do Visual Studio Code.
- Saída
```
João é maior de idade.
João mora em São Paulo.
João tem 25 anos.
João tem exatamente 25 anos.
```
## Exemplo de listas (Vetores) com JavaScript no Node.js
- 1. Criar um arquivo chamado `vetores.js` dentro da pasta `back-aula01`
- 2. Digitar o seguinte código dentro do arquivo `vetores.js`:
```javascript
//Atribuição de variáveis
var frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"]
//Acessando elementos do vetor
console.log("O primeiro elemento do vetor é: " + frutas[0])
console.log("O segundo elemento do vetor é: " + frutas[1])
//Acessando com laço de repetição
for (var i = 0; i < frutas.length; i++) {
    console.log(`O elemento ${i} do vetor é: ${frutas[i]}`)
}
//Acessando com forEach (Para cada elemento do vetor)
frutas.forEach((fruta, indice) => {
    console.log(`O elemento ${indice} do vetor é: ${fruta}`)
})
```
