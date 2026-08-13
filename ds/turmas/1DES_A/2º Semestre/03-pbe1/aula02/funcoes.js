//char nome[100];
//['f', 'u', 'l', 'a', 'n', 'o']
let nome = "Fulano da Silva";

console.log(nome);
console.log(nome.length);

let senha = "senha123";

if(senha.length < 8) {
    console.log("Senha fora do padrão");
}else {
    console.log("Cadastrado com Sucesso !");
}

let endereco = " Rua Sem Saida, nº 35 ";

console.log(endereco.trim());
console.log(endereco.toUpperCase().trim());
console.log(endereco);

endereco = endereco.trim();

console.log(endereco);

console.log(endereco.toLowerCase());

console.log(nome);

console.log(nome.includes("F"));

let busca = "fo";

if(nome.toLowerCase().includes(busca.toLowerCase())) {
    console.log(nome);
}else {
    console.log("Não encontrado");
}

let usuarios = [
    "Sara de Paula",
    "Sara de Paula",
    "Sara de Paula",
    "Sara de Paula",
    "breno frazão",
    "Mikael Dias",
    "ViCtOr SaNtAnA",
    "PEDRO GUARIZO",
    "Pedro Vitor",
    "Pedro Pedro",
    "Pedro Santana"
];

// for(let i = 0; i < usuarios.length; i++) {
//     console.log(usuarios[i]);
// }

busca = "santana";

usuarios.forEach((usuario, indice) => {
    if(usuario.toLowerCase().includes(busca.toLowerCase())){
        console.log(indice, usuario);
    }
});

endereco = "Rua das Avenidas, nº 15, Jd. Das Ruas";

console.log(endereco.replace("nº", ""));

endereco = endereco.replace("nº", "");

console.log(endereco.split(","));

endereco = endereco.split(",");

console.log(endereco[0]);


let numeros = [1, 2, 3, 4, 5];

console.log(numeros);

numeros.push(2);

console.log(numeros);

numeros.pop();
numeros.pop();//Remove ultimo valor do vetor

console.log(numeros);

numeros.splice(1, 2);

console.log(numeros);

numeros.push(7);
numeros.push(8);
numeros.push(9);

console.log(numeros);

numeros.forEach( (numero, indice) => {
    if(numero == 4) {
        numeros.splice(indice, 1);
    }
} );

console.log(numeros);

let produtos = [
    {
        "marca":"Xiaomi",
        "modelo":"Poco X8",
        "quantidade":30,
        "preco":2300
    },
    {
        "marca":"Xiaomi",
        "modelo":"Redmi Note 9",
        "quantidade":50,
        "preco":1800
    },
    {
        "marca":"Nokia",
        "modelo":"Tijolão",
        "quantidade":5,
        "preco":900
    },
    {
        "marca":"Motorola",
        "modelo":"v8",
        "quantidade":10,
        "preco": 2800
    }
];

console.log(produtos);

produtos.forEach((produto, indice) => {
    if(produto.modelo.toLowerCase().includes("redmi")) {
        console.log(produto.quantidade);
    }
});