const api = 'http://localhost:3000';
const usuario = JSON.parse(localStorage.getItem('usuario'));
const modalAlterarProduto = document.getElementById('modalAlterarProduto');

if (!usuario) {
    window.location.href = '../';
} else {
    document.querySelector('header nav h2').innerText = usuario.usuario.nome;
    carregarProdutos();
    carregarEstoque();
}

function sair() {
    localStorage.removeItem("usuario");
    window.location.href = "../";
}

async function ordenarProdutosNome(vetorProdutos) {
    vetorProdutos.sort((a, b) => a.nome.localeCompare(b.nome));
    return vetorProdutos;
}

async function carregarProdutos() {
    const corpo = document.querySelector('main table tbody');
    const resposta = await fetch(`${api}/produtos`);
    const produtos = await resposta.json();
    const produtosOrdenados = await ordenarProdutosNome(produtos);
    corpo.innerHTML = '';
    produtosOrdenados.forEach(produto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${produto.id}</td>
            <td><img src="${produto.imagem}" alt="${produto.nome}"></td>
            <td>${produto.nome}</td>
            <td>${produto.descricao}</td>
            <td><button onclick="movimento(${produto.id}, data${produto.id}.value, quantidade${produto.id}.value,'Entrada')">Entrada</button></td>
            <td><input type="date" id="data${produto.id}" name="data" value="${new Date().toISOString().split('T')[0]}"></td>
            <td><input type="number" name="quantidade" id="quantidade${produto.id}" value="0"></td>
            <td><button onclick="movimento(${produto.id}, data${produto.id}.value, quantidade${produto.id}.value,'Saida')">Saída</button></td>
            <td>${produto.estoque}</td>
            <td>${produto.estoqueMinimo}</td>
        `;
        if (produto.estoque <= produto.estoqueMinimo) {
            linha.classList.add('alerta');
        }
        corpo.appendChild(linha);
    });
}

async function carregarEstoque() {
    const tbody = document.querySelector('#movimentacoes table tbody');
    const resp = await fetch(`${api}/estoque`);
    const lancamentos = await resp.json();
    tbody.innerHTML = '';
    lancamentos.forEach(lancamento => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${lancamento.id}</td>
            <td>${lancamento.produto.nome}</td>
            <td>${lancamento.usuario.nome}</td>
            <td>${new Date(lancamento.data).toLocaleDateString()}</td>
            <td>${lancamento.tipo}</td>
            <td>${lancamento.quantidade}</td>
        `;
        tbody.appendChild(linha);
    });
}

async function movimento(produtoId, data, quantidade, tipo) {
    if (quantidade <= 0) {
        alert('Digite uma quantidade');
        return;
    } else {
        const dados = {
            produtoId: Number(produtoId),
            usuarioId: Number(usuario.usuario.id),
            quantidade: Number(quantidade),
            data: new Date(data),
            tipo: tipo
        }
        const resp = await fetch(`${api}/estoque`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        if (resp.ok) {
            carregarProdutos();
            carregarEstoque();
        } else {
            const resposta = await resp.json();
            alert(resposta.error);
        }
    }
}