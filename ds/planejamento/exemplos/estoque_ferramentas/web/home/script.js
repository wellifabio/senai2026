const api = 'http://localhost:3000';
const usuario = JSON.parse(localStorage.getItem('usuario'));
const modalAlterarProduto = document.getElementById('modalAlterarProduto');
const formAdd = document.querySelector('#modalAdicionarProduto form');
const formEdit = document.querySelector('#modalAlterarProduto form');

if (!usuario) {
    window.location.href = '../';
} else {
    document.querySelector('header nav h2').innerText = usuario.usuario.nome;
    carregarProdutos();
}

function sair() {
    localStorage.removeItem("usuario");
    window.location.href = "../";
}

async function carregarProdutos() {
    const corpo = document.querySelector('main table tbody');
    const resposta = await fetch(`${api}/produtos`);
    const produtos = await resposta.json();
    corpo.innerHTML = '';
    produtos.forEach(produto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td data-label="Id:">${produto.id}</td>
            <td><img src="${produto.imagem}" alt="${produto.nome}"></td>
            <td data-label="Nome:">${produto.nome}</td>
            <td data-label="Descrição:">${produto.descricao}</td>
            <td data-label="Dimensões:">${produto.dimensoes}</td>
            <td data-label="Peso:">${produto.peso}</td>
            <td data-label="Estoque:">${produto.estoque}</td>
            <td data-label="Estoque mínimo:">${produto.estoqueMinimo}</td>
            <td>
                <button onclick="editarProduto(${produto.id})">Editar</button>
                <button onclick="deletarProduto(${produto.id})">Deletar</button>
            </td>
        `;
        if (produto.estoque <= produto.estoqueMinimo) {
            linha.classList.add('alerta');
        }
        corpo.appendChild(linha);
    });
}

async function editarProduto(id) {
    const produto = await buscarProdutoPorId(id);
    if (produto) {
        preencherFormulario(produto);
        modalAlterarProduto.classList.remove('oculto');
    }
}
async function buscarProdutoPorId(id) {
    const resposta = await fetch(`${api}/produtos/${id}`);
    if (resposta.ok) {
        return await resposta.json();
    }
    return null;
}
function preencherFormulario(produto) {
    document.getElementById('img').src = produto.imagem;
    formEdit.id.value = produto.id;
    formEdit.nome.value = produto.nome;
    formEdit.descricao.value = produto.descricao;
    formEdit.dimensoes.value = produto.dimensoes;
    formEdit.peso.value = produto.peso;
    formEdit.estoque.value = produto.estoque;
    formEdit.estoqueMinimo.value = produto.estoqueMinimo;
    formEdit.imagem.value = produto.imagem;
}

async function deletarProduto(id) {
    if (confirm(`Tem certeza que deseja deletar o produto id ${id}?`)) {
        const resposta = await fetch(`${api}/produtos/${id}`, {
            method: 'DELETE'
        });
        if (resposta.ok) {
            carregarProdutos();
        } else {
            alert('Não foi possível excluir o produto, verifique se possui movimentação de estoque.');
        }
    }
}

formAdd.addEventListener('submit', async (e) => {
    e.preventDefault();
    const produto = {
        nome: formAdd.nome.value,
        descricao: formAdd.descricao.value,
        dimensoes: formAdd.dimensoes.value,
        peso: Number(formAdd.peso.value),
        estoqueMinimo: Number(formAdd.estoqueMinimo.value),
        imagem: formAdd.imagem.value
    };
    const resposta = await fetch(`${api}/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    });
    if (resposta.ok) {
        modalAdicionarProduto.classList.add('oculto');
        carregarProdutos();
    } else {
        alert('Erro ao adicionar o produto.');
    }
});

formEdit.addEventListener('submit', async (e) => {
    e.preventDefault();
    const produto = {
        nome: formEdit.nome.value,
        descricao: formEdit.descricao.value,
        dimensoes: formEdit.dimensoes.value,
        peso: Number(formEdit.peso.value),
        estoque: Number(formEdit.estoque.value),
        estoqueMinimo: Number(formEdit.estoqueMinimo.value),
        imagem: formEdit.imagem.value
    };
    const resposta = await fetch(`${api}/produtos/${formEdit.id.value}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    });
    if (resposta.ok) {
        modalAlterarProduto.classList.add('oculto');
        carregarProdutos();
    } else {
        alert('Erro ao alterar o produto.');
    }
});

function filtrarProdutos() {
    const filtro = document.getElementById('filtro').value.toLowerCase();
    const linhas = document.querySelectorAll('main table tbody tr');
    linhas.forEach(linha => {
        const nome = linha.querySelector('td:nth-child(3)').textContent.toLowerCase();
        linha.style.display = nome.includes(filtro) ? '' : 'none';
    });
}
