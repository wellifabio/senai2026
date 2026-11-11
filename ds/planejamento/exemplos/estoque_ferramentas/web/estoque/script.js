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
            <td data-label="Id:">${produto.id}</td>
            <td><img src="${produto.imagem}" alt="${produto.nome}"></td>
            <td data-label="Produto:">${produto.nome}</td>
            <td data-label="Descrição:">${produto.descricao}</td>
            <td><button onclick="movimento(${produto.id}, data${produto.id}.value, quantidade${produto.id}.value,'Entrada')">Entrada</button></td>
            <td data-label="Data:"><input type="date" id="data${produto.id}" name="data" value="${new Date().toISOString().split('T')[0]}"></td>
            <td data-label="Quantidade:"><input type="number" name="quantidade" id="quantidade${produto.id}" value="0"></td>
            <td><button onclick="movimento(${produto.id}, data${produto.id}.value, quantidade${produto.id}.value,'Saida')">Saída</button></td>
            <td data-label="Estoque:">${produto.estoque}</td>
            <td data-label="Estoque mínimo:">${produto.estoqueMinimo}</td>
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
            <td data-label="Id:">${lancamento.id}</td>
            <td data-label="Produto:">${lancamento.produto.nome}</td>
            <td data-label="Usuário:">${lancamento.usuario.nome}</td>
            <td data-label="Data:">${new Date(lancamento.data).toLocaleDateString()}</td>
            <td data-label="Tipo:">${lancamento.tipo}</td>
            <td data-label="Quantidade:">${lancamento.quantidade}</td>
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