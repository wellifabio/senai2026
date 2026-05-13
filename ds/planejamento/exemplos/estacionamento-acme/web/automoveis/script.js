const url = "http://localhost:3000/automovel";
let automoveis = [];

init();
async function init() {
    await fetchAutomoveis();
    await montarTabela();
}

async function fetchAutomoveis() {
    try {
        const response = await fetch(url + "/listar");
        automoveis = await response.json();
    } catch (error) {
        console.error("Erro ao buscar automóveis:", error);
    }
}

async function montarTabela() {
    const tabela = document.getElementById("corpo-automoveis");
    tabela.innerHTML = "";
    automoveis.forEach(automovel => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td data-label="Placa"><b><button onclick="mostrarDetalhes('${automovel.placa}')">${automovel.placa}</button></b></td>
            <td data-label="Tipo">${automovel.tipo}</td>
            <td data-label="Proprietário" contenteditable="true">${automovel.proprietario}</td>
            <td data-label="Telefone" contenteditable="true">${automovel.telefone}</td>
            <td data-label="Modelo" contenteditable="true">${automovel.modelo}</td>
            <td data-label="Marca" contenteditable="true">${automovel.marca}</td>
            <td data-label="Cor" contenteditable="true">${automovel.cor}</td>
            <td data-label="Ano" contenteditable="true">${automovel.ano}</td>
            <td style="display: flex; justify-content: right;">
                <div style="display: flex">
                    <button onclick="editarAutomovel('${automovel.placa}')">✏️</button>
                    <button onclick="excluirAutomovel('${automovel.placa}')">🗑️</button>
                </div>
            </td>
        `;
        tabela.appendChild(row);
    });
}

const form = document.getElementById("form-automovel");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);
    dados.ano = parseInt(dados.ano);
    fetch(`${url}/cadastrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (response.ok) {
                alert("Automóvel cadastrado com sucesso!");
                init();
                modalAdd.classList.add('oculto');
            } else {
                alert("Erro ao cadastrar automóvel!");
            }
        })
        .catch(error => {
            console.error("Erro ao cadastrar automóvel:", error);
        });
});

async function mostrarDetalhes(placa) {
    const automovel = automoveis.find(a => a.placa === placa);
    if (!automovel) {
        alert("Automóvel não encontrado!");
        return;
    }
    document.getElementById("estadias-titulo").innerHTML = `Estadias - ${automovel.placa}`;
    const cards = document.getElementById("cards-estadias");
    cards.innerHTML = ""; // Limpar cards existentes
    const busca = await fetch(`${url}/buscar/${placa}`).then(res => res.json());
    busca.estadias.forEach(estadia => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>Data: ${new Date(estadia.entrada).toLocaleDateString('pt-BR')}</h3>
            <p><strong>Entrada:</strong>  ${new Date(estadia.entrada).toLocaleTimeString('pt-BR')} - <strong>Saída:</strong> ${estadia.saida ? new Date(estadia.saida).toLocaleTimeString('pt-BR') : 'Estacionado'}</p>
            <p><strong>Valor total:</strong> R$ ${estadia.valorTotal ? estadia.valorTotal.toFixed(2) : 'N/A'}</p>
        `;
        cards.appendChild(card);
    });
    document.getElementById("modalDealhes").classList.remove("oculto");
}

function editarAutomovel(placa) {
    const automovel = automoveis.find(a => a.placa === placa);
    if (!automovel) {
        alert("Automóvel não encontrado!");
        return;
    }
    const row = [...document.querySelectorAll("#corpo-automoveis tr")].find(r => r.children[0].textContent === placa);
    const [_, tipo, proprietario, telefone, modelo, marca, cor, ano] = row.children;
    const dadosAtualizados = {
        tipo: tipo.textContent,
        proprietario: proprietario.textContent,
        telefone: telefone.textContent,
        modelo: modelo.textContent,
        marca: marca.textContent,
        cor: cor.textContent,
        ano: parseInt(ano.textContent)
    };
    fetch(`${url}/atualizar/${placa}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosAtualizados)
    })
        .then(response => {
            if (response.ok) {
                alert("Automóvel atualizado com sucesso!");
                init();
            } else {
                alert("Erro ao atualizar automóvel!");
            }
        })
        .catch(error => {
            console.error("Erro ao atualizar automóvel:", error);
        });
}

function excluirAutomovel(placa) {
    if (!confirm("Tem certeza que deseja excluir este automóvel?")) {
        return;
    }
    fetch(`${url}/excluir/${placa}`, {
        method: "DELETE"
    })
        .then(response => {
            if (response.ok) {
                init();
            } else {
                alert("Erro ao excluir automóvel!");
            }
        })
        .catch(error => {
            console.error("Erro ao excluir automóvel:", error);
        });
}

function filtrar(valor) {
    const tabela = document.getElementById("corpo-automoveis");
    const linhas = tabela.getElementsByTagName("tr");
    for (let i = 0; i < linhas.length; i++) {
        const placa = linhas[i].children[0].textContent.toLowerCase();
        const tipo = linhas[i].children[1].textContent.toLowerCase();
        const modelo = linhas[i].children[4].textContent.toLowerCase();
        const proprietario = linhas[i].children[2].textContent.toLowerCase();
        if (placa.includes(valor.toLowerCase()) || tipo.includes(valor.toLowerCase()) || modelo.includes(valor.toLowerCase()) || proprietario.includes(valor.toLowerCase())) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}