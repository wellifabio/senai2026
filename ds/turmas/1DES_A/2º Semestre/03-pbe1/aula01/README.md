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
- Como utilizamos windows, **após a instalação do Node.js** e do Visual Studio Code, **reinicie o computador**.
- Após reiniciar abra o terminal e digite novamente:
```
node --version
npm --version
```

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
//Variáveis
x = 10
y = 2
//Operações
soma = x + y
sub = x - y
mult = x * y
div = x / y
resto = x % y
raiz = Math.sqrt(x)
potencia = Math.pow(x, y)
//Saídas com concatenação
console.log("A soma de " + x + " + " + y + " = " + soma)
console.log("A subtração de " + x + " - " + y + " = " + sub)
//Saídas com aspas simples (apóstrofe)
console.log('A multiplicação de ' + x + ' * ' + y + ' = ' + mult)
console.log('A divisão de ' + x + ' / ' + y + ' = ' + div.toFixed(2))
console.log('O resto da divisão de ' + x + ' % ' + y + ' = ' + resto)
//Saídas com template string (crase)
console.log(`A raiz quadrada de ${x} = ${raiz.toFixed(2)}`)
console.log(`A potência de ${x} elevado a ${y} = ${potencia}`)
```
- Compile o programa com o comando `node matematica.js` no terminal do Visual Studio Code.
- Saída
```
A soma de 10 + 2 = 12
A subtração de 10 - 2 = 8
A multiplicação de 10 * 2 = 20
A divisão de 10 / 2 = 5.00
O resto da divisão de 10 % 2 = 0
A raiz quadrada de 10 = 3.16
A potência de 10 elevado a 2 = 100
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
- Compile o programa com o comando `node vetores.js` no terminal do Visual Studio Code.
- Saída
```
O primeiro elemento do vetor é: maçã
O segundo elemento do vetor é: banana
O elemento 0 do vetor é: maçã
O elemento 1 do vetor é: banana
O elemento 2 do vetor é: laranja
O elemento 3 do vetor é: uva
O elemento 4 do vetor é: abacaxi
O elemento 0 do vetor é: maçã
O elemento 1 do vetor é: banana
O elemento 2 do vetor é: laranja
O elemento 3 do vetor é: uva
O elemento 4 do vetor é: abacaxi
```
- 3. Criar um arquivo chamado `duas_listas.js` dentro da pasta `back-aula01`
- 4. Digitar o seguinte código dentro do arquivo `duas_listas.js`:
```javascript
//Atribuição de variáveis
var frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"]
var precos = [2.5, 3.0, 1.5, 4.0, 5.0]
//Acessando com laço de repetição
for (var i = 0; i < frutas.length; i++) {
    console.log(`${i}: ${frutas[i]}\t R$ ${precos[i].toFixed(2)}`)
}
//Acessando com forEach (Para cada elemento do vetor)
frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta} \t R$ ${precos[indice].toFixed(2)}`)
})
```
- Compile o programa com o comando `node duas_listas.js` no terminal do Visual Studio Code.
- Saída
```
0: maçã	 R$ 2.50
1: banana	 R$ 3.00
2: laranja	 R$ 1.50
3: uva	 R$ 4.00
4: abacaxi	 R$ 5.00
0: maçã 	 R$ 2.50
1: banana 	 R$ 3.00
2: laranja 	 R$ 1.50
3: uva 	 R$ 4.00
4: abacaxi 	 R$ 5.00
```
## Exemplo de objetos com JavaScript no Node.js
- 1. Criar um arquivo chamado `objeto.js` dentro da pasta `back-aula01`
- 2. Digitar o seguinte código dentro do arquivo `objeto.js`:
```javascript
//Definição de variáveis tipo objeto
const fruta = {
    nome: "Maçã",
    preco: 2.5,
    tipo: "Macã Fuji",
    cor: "Vermelha"
}
//Acessando propriedades do objeto
console.log(`O nome da fruta é: ${fruta.nome}`)
console.log(`O preço da fruta é: R$ ${fruta.preco.toFixed(2)}`)
console.log(`O tipo da fruta é: ${fruta.tipo}`)
console.log(`A cor da fruta é: ${fruta.cor}`)
```
- Compile o programa com o comando `node objeto.js` no terminal do Visual Studio Code.
- Saída
```
O nome da fruta é: Maçã
O preço da fruta é: R$ 2.50
O tipo da fruta é: Macã Fuji
A cor da fruta é: Vermelha
```
- 3. Criar um arquivo chamado `objetos.js` dentro da pasta `back-aula01`
- 4. Digitar o seguinte código dentro do arquivo `objetos.js`:
```javascript
//Definição de variáveis tipo lista de objetos
const frutas = [
    { nome: "Maçã", preco: 2.5, tipo: "Macã Fuji", cor: "Vermelha" },
    { nome: "Banana", preco: 3.0, tipo: "Banana Prata", cor: "Amarela" },
    { nome: "Laranja", preco: 1.5, tipo: "Laranja Pera", cor: "Laranja" },
    { nome: "Uva", preco: 4.0, tipo: "Uva Itália", cor: "Roxa" },
    { nome: "Abacaxi", preco: 5.0, tipo: "Pérola", cor: "Amarela" }
]
//Exibindo informações do objeto
frutas.forEach(fruta => {
    console.log(`Nome: ${fruta.nome}, Preço: R$ ${fruta.preco.toFixed(2)}, Tipo: ${fruta.tipo}, Cor: ${fruta.cor}`)
})
```
- Compile o programa com o comando `node objetos.js` no terminal do Visual Studio Code.
- Saída
```
Nome: Maçã, Preço: R$ 2.50, Tipo: Macã Fuji, Cor: Vermelha
Nome: Banana, Preço: R$ 3.00, Tipo: Banana Prata, Cor: Amarela
Nome: Laranja, Preço: R$ 1.50, Tipo: Laranja Pera, Cor: Laranja
Nome: Uva, Preço: R$ 4.00, Tipo: Uva Itália, Cor: Roxa
Nome: Abacaxi, Preço: R$ 5.00, Tipo: Pérola, Cor: Amarela
```

## Lista de Exercícios
- 1 Crie um programa que chamado `alunos.js` que contenha uma lista de alunos com as seguintes informações: nome, idade, cidade e nota final. O programa deve exibir a lista de alunos e suas informações no console.
- 2 Crie um programa chamado `produtos.js` que contenha uma lista de produtos com as seguintes informações: nome, preço e quantidade. O programa deve exibir a lista de produtos e suas informações no console.
- 3 Altere o programa `produtos.js` para calcular o valor total de cada produto (preço * quantidade) e exibir no console.
- 4 Crie um programa chamado `funcionarios.js` que contenha uma lista de funcionários com as seguintes informações: nome, cargo, salário e tempo de serviço. O programa deve exibir a lista de funcionários e suas informações no console.