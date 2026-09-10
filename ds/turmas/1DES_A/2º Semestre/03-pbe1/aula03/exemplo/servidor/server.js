const express = require("express")
const pedidos = require("../dados.json")

const mostrarPedidos = (req, res) => {
    calcularSubtotais()
    res.send(pedidos)
}

const novoPedido = (req, res) => {
    if (req.body) {
        res.send("Pedido recebido, em análise")
        pedidos.push(req.body)
    } else {
        res.send("Erro ao receber pedido")
    }
}

const calcularSubtotais = () => {
    pedidos.forEach(p => {
        p.subtotal = p.precoUnitario * p.quantidade
    })
}

const excluirPedido = (req, res) => {
    const id = req.query.id;

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            pedidos.splice(indice, 1);
        }
    });

    res.send("Pedido excluido com sucesso.");
};

const alterarPedido = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    pedidos.forEach((pedido) => {
        if(pedido.id == id) {
            pedido.nome = dados.nome;
            pedido.precoUnitario = dados.precoUnitario;
            pedido.quantidade = dados.quantidade;
            pedido.unidade = dados.unidade;
        }
    });

    res.send("Pedido atualizado com sucesso !");
};

const app = express()
app.use(express.urlencoded({ extended: true }))
const porta = 3000

app.post("/", novoPedido)
app.get("/", mostrarPedidos)
app.delete("/", excluirPedido);
app.put("/:id", alterarPedido);

app.listen(porta, () => {
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
    console.log(`Servidor: http://127.0.0.1:${porta}`)
})