//char nome[100]
//['F', 'u', 'l', 'a', 'n', 'o']

//"Fulano" -> String

//let const

//let valor = "10.5";

//console.log(typeof(valor));

function somar(n1, n2) {
    let res = n1 + n2;
    console.log("Resultado - " + res);
}

somar(5,10);

function calculaIRPF(salario) {
    let novoSalario = salario - (salario * 0.1);
    return novoSalario;
}

function calculaINSS(salario) {
    let novoSalario = salario - (salario * 0.05);
    return novoSalario;
}

let salario = 2500;

salario = calculaIRPF(salario);
salario = calculaINSS(salario);

console.log("Salario Atualizado - R$" + salario);

//Arrow Function
const multiplica = (n1, n2) => {
    let res = n1 * n2;
    console.log("Multiplicacao = " + res);
};

multiplica(5, 20);

let senha = "senha123";

console.log(senha.length);

if(senha.length < 8) {
    console.log("Senha fora do padrao");
}else {
    console.log("Cadastrado com Sucesso !");
}

let numeros = [1, 2, 3, 4, 5];

console.log(numeros.length);

console.log("-----------------------");

let nomes = [
    "SAMUEL GOMES ",
    "samuel cardeal ",
    "ANA GODOY",
    " AnA GoMeS",
    "DAVI CARDEAL",
    "davI samUeL",
    "Juliano Morais ",
    " juliano davi"
];

let busca = "juliano m";

nomes.forEach( (nome, indice) => {
    // let novoNome = nome.toUpperCase();
    // novoNome = novoNome.trim();
    // if(novoNome.includes(busca.toUpperCase())) {
    //     console.log(indice, nome);
    // }

    if(nome.trim().toUpperCase().includes(busca.toUpperCase())) {
        console.log(indice, nome);
    }
} );

console.log("-----------------");

console.log(numeros);

numeros.push(6);
numeros.push(7);

console.log(numeros);

numeros.pop();
numeros.pop();
numeros.pop();

console.log(numeros);

numeros.splice(2, 2);

console.log(numeros);

console.log("-------------");

let exemplo = {
    "nome":"Fulano da Silva",
    "nascimento":"01/01/1830",
    "endereco":"Rua Sem Saida, nº 30",
    "numeros":["19912345678", "1931321213"]
};

console.log(exemplo.numeros[1]);

exemplo.numeros.push("19974185236");

console.log(exemplo.numeros);