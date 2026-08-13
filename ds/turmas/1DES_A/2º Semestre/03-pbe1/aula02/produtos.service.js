let produtos = require("./mockup.produtos");

const cadastrar = (marca, modelo, quantidade, preco) => {
    let produto = {
        marca,
        modelo,
        quantidade,
        preco
    };

    console.log(produto);
};

cadastrar("Samsung", "a36", 20, 1800);