const clientes = require("./dados.json");

//PATCH|PUT 
//localhost:3000/clientes/:id
//Dados via BODY

//const id = req.params.id;
const id = 1;

//const dados = req.body;
const dados = {
    "endereco":"Nova Rua, 321",
    "cidade":"Pedreira"
};

const chaves = Object.keys(dados);

const cliente = clientes.find((c) => c.id == id);

chaves.forEach((chave) => {
    cliente[chave] = dados[chave];
});

console.log(clientes);
//node exemplo.js