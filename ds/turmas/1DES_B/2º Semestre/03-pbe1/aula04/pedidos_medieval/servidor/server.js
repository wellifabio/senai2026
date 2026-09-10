const express = require('express')
const pedidos = require('../dados.json')

const calcularSubtotais = (pedido) => {
    pedidos.forEach((p) => {
        p.subtotal = p.quantidade * p.preco
    })
}

const listarPedidos = (req, res) => {
    calcularSubtotais()
    res.send(pedidos)
}

const novoPedido = (req, res) => {
    if (req.body) {
        pedidos.push(req.body)
        res.send("Pedido recebido, em processamento")
    } else {
        res.send("Erro ao receber pedido")
    }
}

const excluirPedido = (req, res) => {
    const id = req.params.id;
    let status = 0;

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            pedidos.splice(indice, 1)
            status = 1;
        }
    });

    if (status == 1) {
        res.send("pedido excluido com sucesso");
    } else {
        res.status(404).send("Pedido não encontrado");
    }
};
const atualizarPedido = (req, res) => {
    const id = req.query.id;
    const dados = req.body;
    let status = 0;

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            pedido.nome = dados.nome;
            pedido.quantidade = dados.quantidade;
            pedido.preco = dados.preco;
            pedido.peso = dados.peso;
            status = 1;
        }
    });
    
    if (status == 1) {
        res.send("pedido atualizado com sucesso");
    } else {
        res.status(404).send("Pedido não encontrado");
    }
};

const porta = 3000
const app = express()
app.use(express.urlencoded({ extended: true }))

app.post("/", novoPedido)//Cadastrar ou login
app.get("/", listarPedidos)//Listar ou buscar
app.delete("/:id", excluirPedido);
app.patch("/", atualizarPedido);
//PUT ou PATCH para atualizar
//DELETE para deletar

/*receber dados no backend */
/*
 BODY -> JSON, FORM,FORM-ENCODED
 PARAMS (PARAMETRO)-> minha loja.com/produtos/sapato
 QUERY -> minha loja.com/produtos&marca=x
 */

app.listen(porta, () => {
    console.log(`Servidor http://127.0.0.1:${porta}`)
    console.log(`Cliente http://127.0.0.1:5500/cliente/`)
})