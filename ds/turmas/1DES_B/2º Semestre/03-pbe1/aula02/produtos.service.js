let produtos = require("./mockup.produtos");

const cadastrar = (marca, modelo, fabricacao, preco) => {
    let produto = {
        marca,
        modelo,
        fabricacao,
        preco
    };

    produtos.push(produto);
};

const listar = () => {
    produtos.forEach( (produto, indice) => {
        console.log(produto);
    } );
};

cadastrar("Marca Exemplo", "Modelo Teste", "2026", 15000);

listar();