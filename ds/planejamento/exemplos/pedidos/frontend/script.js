const API_URL = 'http://localhost:3000';
const API_CEP = 'https://viacep.com.br/ws';
const produtos = [];
const pedidos = [];
var nItens = 0, dinheiro = 0;
const itensPedido = [];
const formPedido = document.getElementById("formPedido");

async function iniciar() {
    nItens = 0;
    dinheiro = 0;
    await montarPedidos();
    preencherSelect();
    exibirTotais();
}

async function montarPedidos() {
    produtos.length = 0;
    pedidos.length = 0;

    await obterProdutos();
    await obterPedidos();

    const todosPedidos = document.getElementById("conteudo");
    todosPedidos.innerHTML = "";

    for (const p of pedidos) {
        const e = await obterEndereco(p.cep);
        const pedido = document.createElement("div");
        pedido.classList.add("pedido");
        pedido.innerHTML = `
        <div>
            <h3>
                Id: ${p.id}
                - ${new Date(p.data).toLocaleDateString('pt-BR')}
                - ${new Date(p.data).toLocaleTimeString('pt-BR')}
            </h3>
            <p>Cliente: ${p.cliente}</p>
            <p>
                Endereço: ${e != "" ? e.logradouro : "CEP não encontrado"},
                ${p.numero != null ? p.numero : "sem numero"},
                ${p.complemento != null ? p.complemento + "," : ""}
                ${e != "" ? e.localidade : "CEP não encontrado"},
                ${e != "" ? e.uf : "CEP não encontrado"}
                ${e != "" ? e.cep : "CEP não encontrado"}
            </p>
            
        </div>
        <div>
            ${await montarItens(p.itens)}
            <h3 style="text-align:right">Total ${(await totalPedido(p.itens)).toFixed(2).replace('.', ',')}</h3>
        </div>
        `;
        todosPedidos.appendChild(pedido);
    }
}

async function montarItens(itens) {
    let lista = "";
    for (const item of itens) {
        const produto = produtos.find(p => p.id == item.produtoId)
        lista += `
        <div class="item">
            <img src="./assets/${produto.imagem}" width=50>
            <div>${produto.nome}</div>
            <div>${item.quantidade}un</div>
            <div>R$ ${Number(item.preco).toFixed(2).replace('.', ',')}</div>
        </div>`;
        nItens++;
        dinheiro += Number(item.quantidade) * Number(item.preco);
    }
    return lista;
}

async function totalPedido(itens) {
    let total = 0;
    for (const item of itens) {
        total += Number(item.quantidade) * Number(item.preco);
    }
    return total;
}

async function obterProdutos() {
    await fetch(`${API_URL}/produto/listar`)
        .then(resp => resp.json())
        .then(resp => {
            resp.forEach(p => {
                produtos.push(p);
            });
        })
}

async function obterPedidos() {
    await fetch(`${API_URL}/pedido/listar`)
        .then(resp => resp.json())
        .then(resp => {
            resp.forEach(p => {
                pedidos.push(p);
            });
        })
}

async function obterEndereco(cep) {
    let endereco = "";
    await fetch(`${API_CEP}/${cep}/json`)
        .then(resp => resp.json())
        .then(resp => {
            endereco = resp;
        });
    return endereco;
}

function exibirTotais() {
    document.getElementById("totPedidos").innerHTML = `
        <h2>${pedidos.length} Pedidos ativos</h2>
    `;
    document.getElementById("totItens").innerHTML = `
        <h2>${nItens} Ítens para postar</h2>
    `;
    document.getElementById("totDinheiro").innerHTML = `
        <h2>Totalizando R$ ${dinheiro.toFixed(2).replace('.', ',')}</h2>
    `;
}

function preencherSelect() {
    const select = document.getElementById("itens")
    produtos.forEach(p => {
        const op = document.createElement("option");
        op.innerHTML = p.nome;
        op.value = p.id;
        select.appendChild(op)
    });
}

function addCarrinho(id) {
    const produto = produtos.find(p => p.id == id);
    const jaListado = itensPedido.find(p => p.produtoId == id);
    if (jaListado == undefined) {
        const listItens = document.getElementById("listItens");
        const nItem = {
            produtoId: Number(produto.id),
            quantidade: 1,
            preco: 0.0
        }
        const linha = document.createElement("div");
        linha.innerHTML = `
        <label>${produto.nome} R$</label>
        <input type="number" step="0.01" id="preco${produto.id}" placeholder="Preço" onchange="calcSub('${produto.id}')">
        <label>un</label>
        <input type="number" id="quantidade${produto.id}" value="${nItem.quantidade}" onchange="calcSub('${produto.id}')">
        <label id="subtotal${produto.id}"}>R$ 0,00</label>
    `;
        listItens.appendChild(linha);
        itensPedido.push(nItem);
    } else {
        document.getElementById("msg").innerHTML = "Produto já adicionado";
    }
}

function calcSub(id) {
    const preco = Number(document.getElementById(`preco${id}`).value);
    const quantidade = Number(document.getElementById(`quantidade${id}`).value);
    document.getElementById(`subtotal${id}`).innerHTML = `R$ ${(preco * quantidade).toFixed(2).replace('.', ',')}`;
    const indice = itensPedido.findIndex(p => p.produtoId == id);
    itensPedido[indice].preco = preco;
    itensPedido[indice].quantidade = quantidade;
    let soma = 0;
    itensPedido.forEach(item => {
        soma += item.preco * item.quantidade;
    });
    document.getElementById("total").innerHTML = `R$ ${soma.toFixed(2).replace('.', ',')}`;
}

function limpar() {
    document.getElementById("novoPedido").classList.add('oculto');
    document.getElementById("listItens").innerHTML = '';
    itensPedido.length = 0;
}

if (formPedido) {
    formPedido.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (itensPedido.length == 0) {
            document.getElementById("msg").innerHTML = "Adicione algum ítem no pedido";
            return;
        }
        for (const item of itensPedido) {
            if (item.preco == 0 || item.quantidade == 0) {
                document.getElementById("msg").innerHTML = "Existe item zerado";
                return;
            }
        }
        const dados = {
            cliente: formPedido.cliente.value,
            cep: formPedido.cep.value
        }
        if (formPedido.numero.value.length > 0) dados.numero = formPedido.numero.value;
        if (formPedido.complemento.value.length > 0) dados.complemento = formPedido.complemento.value;
        const resp = await fetch(`${API_URL}/pedido/cadastrar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        const data = await resp.json();
        if (data) {
            for (const item of itensPedido) {
                item.pedidoId = Number(data.id);
                const respo = await fetch(`${API_URL}/item/cadastrar`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(item)
                });
                const dat = await respo.json();
                if (!dat) {
                    document.getElementById("msg").innerHTML = `Erro ao processar o item: ${item.produtoId}`;
                    return;
                }
            }
            window.location.reload();
        } else {
            document.getElementById("msg").innerHTML = "Erro ao enviar pedido";
        }
    });
}