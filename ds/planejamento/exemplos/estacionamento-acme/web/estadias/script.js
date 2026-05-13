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
    estadias.forEach((estadia, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td data-label="Id">${estadia.id}</td>    
            <td data-label="Placa" contenteditable="true">${estadia.placa}</td>
            <td data-label="Entrada">${new Date(estadia.entrada).toLocaleDateString('pt-BR')} - ${new Date(estadia.entrada).toLocaleTimeString('pt-BR')}</td>
            <td data-label="Saída">${estadia.saida != null ? new Date(estadia.saida).toLocaleDateString('pt-BR') : 'N/A'} - ${estadia.saida !== null ? new Date(estadia.saida).toLocaleTimeString('pt-BR') : 'N/A'}</td>
            <td data-label="Valor hora" contenteditable="true">${Number(estadia.valorHora).toFixed(2).replaceAll('.', ',')}</td>
            <td data-label="Valor Total" contenteditable="true">${Number(estadia.valorTotal).toFixed(2).replaceAll('.', ',')}</td>
            <td data-label="Vaga" contenteditable="true">${estadia.vaga}</td>
            <td style="display: flex; justify-content: right;">
                <div style="display: flex">
                    <button onclick="editar('${i}')">→🚪</button>
                    <button onclick="editarEstadia('${estadia.id}')">✏️</button>
                    <button onclick="excluirEstadia('${estadia.id}')">🗑️</button>
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
    dados.entrada = new Date(dados.entrada);
    if (dados.saida) {
        dados.saida = new Date(dados.saida);
    } else {
        delete dados.saida;
    }
    dados.valorHora = parseFloat(dados.valorHora.replace(',', '.'));
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
    const estadia = estadias.find(a => a.id == id);
    if (!estadia) {
        alert("Estadia não encontrada!");
        return;
    }
    const row = [...document.querySelectorAll("#corpo-estadias tr")].find(r => r.children[0].textContent === id);
    const [_, placa, entrada, saida, valorHora, valorTotal, vaga] = row.children;
    const dadosAtualizados = {
        placa: placa.textContent,
        valorHora: parseFloat(valorHora.textContent),
        valorTotal: parseFloat(valorTotal.textContent),
        vaga: vaga.textContent != 'null' ? vaga.textContent : null,
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
                init();
            } else {
                alert("Erro ao atualizar estadia!");
            }
        })
        .catch(error => {
            console.error("Erro ao atualizar automóvel:", error);
        });
}

function editar(index) {
    modalEdit.classList.remove('oculto');
    const form = document.getElementById("form-estadia-edit");
    const estadia = estadias[index];
    const valorTotalEstimado = estadia.valorHora * Math.ceil((new Date() - new Date(estadia.entrada)) / (1000 * 60 * 60));
    form.id.value = estadia.id;
    form.placae.value = estadia.placa;
    form.entradae.value = estadia.entrada.split('T')[0] + ' ' + (Number(estadia.entrada.split('T')[1].split(':')[0])-3) + ':' + estadia.entrada.split('T')[1].split(':')[1];
    form.saidae.value = estadia.saida ? estadia.saida.split('T')[0] + ' ' + (Number(estadia.saida.split('T')[1].split(':')[0])-3) + ':' + estadia.saida.split('T')[1].split(':')[1] : new Date().toISOString().slice(0, 16);
    form.valorTotal.value = estadia.valorTotal ? Number(estadia.valorTotal).toFixed(2) : Number(valorTotalEstimado).toFixed(2);
}

const form2 = document.getElementById("form-estadia-edit");
form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form2);
    const dadose = Object.fromEntries(formData);
    dadose.entradae = new Date(dadose.entradae);
    if (dadose.saidae) {
        dadose.saidae = new Date(dadose.saidae);
    } else {
        delete dadose.saidae;
    }
    dadose.valorTotal = parseFloat(dadose.valorTotal.replace(',', '.'));
    const dados = {
        placa: dadose.placae,
        entrada: dadose.entradae,
        saida: dadose.saidae != null ? dadose.saidae : null,
        valorTotal: dadose.valorTotal
    }
    fetch(`${url}/atualizar/${dadose.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (response.ok) {
                alert("Estadia atualizada com sucesso!");
                init();
                modalEdit.classList.add('oculto');
            } else {
                alert("Erro ao atualizar estadia!");
            }
        })
        .catch(error => {
            console.error("Erro ao atualizar automóvel:", error);
        });
});

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