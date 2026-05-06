const url = "http://localhost:3000/estadia";
let estadias = [];

init();
async function init() {
    await fetchEstadias();
    await montarTabela();
}

async function fetchEstadias() {
    try {
        const response = await fetch(url + "/listar");
        estadias = await response.json();
    } catch (error) {
        console.error("Erro ao buscar estadias:", error);
    }
}

async function montarTabela() {
    const tabela = document.getElementById("corpo-estadias");
    tabela.innerHTML = "";
    estadias.forEach(estadia => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td data-label="Id">${estadia.id}</td>    
            <td data-label="Placa">${estadia.placa}</td>
            <td data-label="Entrada" contenteditable="true">${estadia.entrada}</td>
            <td data-label="Saída" contenteditable="true">${estadia.saida}</td>
            <td data-label="Valor hora" contenteditable="true">${estadia.valorHora}</td>
            <td data-label="Valor Total" contenteditable="true">${estadia.valorTotal}</td>
            <td data-label="Vaga" contenteditable="true">${estadia.vaga}</td>
            <td style="display: flex; justify-content: right;">
                <div style="display: flex">
                    <button onclick="editarEstadia('${estadia.id}')">*</button>
                    <button onclick="excluirEstadia('${estadia.id}')">-</button>
                </div>
            </td>
        `;
        tabela.appendChild(row);
    });
}

const form = document.getElementById("form-estadia");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);
    fetch(`${url}/cadastrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (response.ok) {
                alert("Estadia cadastrada com sucesso!");
                init();
                modalAdd.classList.add('oculto');
            } else {
                alert("Erro ao cadastrar estadia!");
            }
        })
        .catch(error => {
            console.error("Erro ao cadastrar estadia:", error);
        });
});

function editarEstadia(id) {
    const estadia = estadias.find(a => a.id === id);
    if (!estadia) {
        alert("Estadia não encontrada!");
        return;
    }
    const row = [...document.querySelectorAll("#corpo-estadias tr")].find(r => r.children[0].textContent === id);
    const [_, placa, entrada, saida, valorHora, valorTotal, vaga] = row.children;
    const dadosAtualizados = {
        placa: placa.textContent,
        entrada: entrada.textContent,
        saida: saida.textContent,
        valorHora: parseFloat(valorHora.textContent),
        valorTotal: parseFloat(valorTotal.textContent),
        vaga: vaga.textContent
    };
    fetch(`${url}/atualizar/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosAtualizados)
    })
        .then(response => {
            if (response.ok) {
                alert("Estadia atualizada com sucesso!");
                init();
            } else {
                alert("Erro ao atualizar estadia!");
            }
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

function excluirEstadia(id) {
    if (!confirm("Tem certeza que deseja excluir esta estadia?")) {
        return;
    }
    fetch(`${url}/excluir/${id}`, {
        method: "DELETE"
    })
        .then(response => {
            if (response.ok) {
                init();
            } else {
                alert("Erro ao excluir estadia!");
            }
        })
        .catch(error => {
            console.error("Erro ao excluir estadia:", error);
        });
}

function filtrar(valor) {
    const tabela = document.getElementById("corpo-estadias");
    const linhas = tabela.getElementsByTagName("tr");
    for (let i = 0; i < linhas.length; i++) {
        const placa = linhas[i].children[1].textContent.toLowerCase();
        const entrada = linhas[i].children[2].textContent.toLowerCase();
        if (placa.includes(valor.toLowerCase()) || entrada.includes(valor.toLowerCase())) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}