let produtos = require("./mockup.produtos");

const cadastrar = (marca, modelo, quantidade, preco) => {
    let produto = {
        marca,
        modelo,
        quantidade,
        preco
    };

    produtos.push(produto);
};

const listar = () => {
    produtos.forEach((produto, indice) => {
        console.log(indice, produto);
    });
};

const buscar = (busca) => {
    let resultado = [];

    produtos.forEach((produto) => {
        if(JSON.stringify(produto).toLowerCase().includes(busca.toLowerCase())) {
            resultado.push(produto);
        }
    });

    //return resultado;
    console.log(resultado);
};

const excluir = (indice) => {
    produtos.splice(indice, 1);
};

cadastrar("Samsung", "a36", 20, 1800);
listar();
buscar("1800");
excluir(0);
listar();