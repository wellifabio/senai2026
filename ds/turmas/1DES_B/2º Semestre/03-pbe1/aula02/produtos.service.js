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

const buscar = (busca) => {
    produtos.forEach( (produto) => {
        let temp = JSON.stringify(produto).toLowerCase();
        if(temp.includes(busca.toLowerCase())) {
            console.log(produto);
        }
    } );
};

const buscarPorMarca = (busca) => {
    produtos.forEach( (produto) => {
        let marca = produto.marca.toLowerCase();

        if(marca == busca.toLowerCase()) {
            console.log(produto);
        }
    } );
};

const excluir = (indice) => {
    produtos.splice(indice, 1);
};

const excluirPorModelo = (modelo) => {
    produtos.forEach((produto, indice) => {
        let modeloTemp = produto.modelo.toLowerCase();

        if(modeloTemp == modelo.toLowerCase()) {
            produtos.splice(indice, 1);
        }
    });
};

cadastrar("Marca Exemplo", "Modelo Teste", "2026", 15000);

//listar();

//buscar("gt");

//buscarPorMarca("mustang");

//excluir(1);

excluirPorModelo("m10");

listar();