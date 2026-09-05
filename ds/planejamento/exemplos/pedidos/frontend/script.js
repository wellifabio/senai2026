const API_URL = 'http://localhost:3000';
const API_CEP = 'https://viacep.com.br/ws';
const produtos = [];
const pedidos = [];

async function montarPedidos() {
    await obterProdutos();
    await obterPedidos();
    todosPedidos = document.getElementById("conteudo");
    todosPedidos.innerHTML = "";
    pedidos.forEach(async (p) => {
        let e = await obterEndereco(p.cep);
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
            </p>
        </div>
        <div>
            ${await montarItens(p.itens)}
        </div>
        `;
        todosPedidos.appendChild(pedido);
    });
}

async function montarItens(itens) {
    let lista = "";
    itens.forEach(i => {
        const produto = produtos.find(p => p.id == i.produtoId)
        lista += `
        <div class="item">
            <img src="./assets/${produto.imagem}" width=50>
            <div>${produto.nome}</div>
            <div>${i.quantidade}un</div>
            <div>R$ ${Number(i.preco).toFixed(2).replace('.', ',')}</div>
        </div>`;
    });
    return lista;
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