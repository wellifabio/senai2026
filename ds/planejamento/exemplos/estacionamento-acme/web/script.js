const url = "http://localhost:3000";
var estadias = [];
var veiculos = [];
const vagas = [
    { nome: "C1", estadia: null },
    { nome: "C2", estadia: null },
    { nome: "C3", estadia: null },
    { nome: "C4", estadia: null },
    { nome: "C5", estadia: null },
    { nome: "C6", estadia: null },
    { nome: "C7", estadia: null },
    { nome: "C8", estadia: null },
    { nome: "C9", estadia: null },
    { nome: "C10", estadia: null },
    { nome: "M1", estadia: null },
    { nome: "M2", estadia: null },
    { nome: "M3", estadia: null },
    { nome: "M4", estadia: null },
    { nome: "M5", estadia: null },
];

init();
async function init() {
    await fetchEstadias();
    await fetchVeiculos();
    await preencherSelectPlacas();
    await cruzarEstadiasVagas();
    await montarVagas();
}

async function fetchVeiculos() {
    try {
        const response = await fetch(url + "/automovel/listar");
        veiculos = await response.json();
    } catch (error) {
        console.error("Erro ao buscar veículos:", error);
    }
}

async function preencherSelectPlacas() {
    const select = document.getElementById("placas");
    select.innerHTML = "";
    veiculos.forEach(veiculo => {
        const option = document.createElement("option");
        option.value = veiculo.placa;
        option.textContent = veiculo.tipo;
        select.appendChild(option);
    });
}

async function fetchEstadias() {
    try {
        const response = await fetch(url + "/estadia/listar/ativos");
        estadias = await response.json();
    } catch (error) {
        console.error("Erro ao buscar estadias:", error);
    }
}

async function cruzarEstadiasVagas() {
    vagas.forEach(vaga => {
        const estadia = estadias.find(e => e.vaga === vaga.nome);
        if (estadia) {
            vaga.estadia = estadia;
        } else {
            vaga.estadia = null;
        }
    });
}

async function montarVagas() {
    const area = document.getElementById("vagas");
    area.innerHTML = "";
    vagas.forEach((vaga, i) => {
        const card = document.createElement("div");
        card.className = "vaga";
        card.innerHTML = `
        <div>
            <button class="${vaga.estadia ? (vaga.estadia.automovel.tipo === 'CARRO' ? 'carroestacionado' : 'motoestacionada') : (vaga.nome.startsWith('C') ? 'carrovazio' : 'motovazio')}" onclick="entradaSaida(${i})">&nbsp;</button>
        </div>
        <div>
            <h3>${vaga.estadia ? vaga.estadia.placa : vaga.nome}</h3>
            <p>${vaga.estadia ? new Date(vaga.estadia.entrada).toLocaleDateString('pt-BR') : ''}</p>
            <p>${vaga.estadia ? new Date(vaga.estadia.entrada).toLocaleTimeString('pt-BR') : ''}</p>
            <p><strong>Valor hora:</strong> ${Number(vaga.estadia ? vaga.estadia.valorHora : 0).toFixed(2).replaceAll('.', ',')}</p>
        </div>
        `;
        area.appendChild(card);
    });
}

function entradaSaida(index) {
    if (vagas[index].estadia) {
        abrirModalSaida(index);
    } else {
        abrirModalEntrada(vagas[index].nome);
    }
}

function abrirModalEntrada(vaga) {
    const modal = document.getElementById("modalEntrada");
    modal.classList.remove("oculto");
    document.getElementById("vaga").value = vaga;
    document.getElementById("entrada").value = new Date(new Date().getTime() - 3 * 60 * 60 * 1000).toISOString().slice(0, 16);
    document.getElementById("valorHora").value = vaga.startsWith('C') ? '10.00' : '5.00';
}

async function salvarEntrada(event) {
    event.preventDefault();
    let form = event.target;
    let placa = form.placa.value;
    let entrada = new Date(form.entrada.value);
    let vaga = form.vaga.value;
    let valorHora = parseFloat(form.valorHora.value);
    let automovel = veiculos.find(v => v.placa === placa);
    if (!automovel) {
        alert("Veículo não encontrado!");
        return;
    }
    const novaEstadia = {
        placa,
        entrada,
        vaga,
        valorHora,
    };
    try {
        const response = await fetch(url + "/estadia/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novaEstadia),
        });
        if (response.ok) {
            form.reset();
            modalEntrada.classList.add("oculto");
            await init();
        } else {
            const errorData = await response.json();
            alert("Erro ao salvar estadia: " + errorData.message);
        }
    } catch (error) {
        console.error("Erro ao salvar estadia:", error);
        alert("Erro ao salvar estadia. Tente novamente.");
    }
}

function abrirModalSaida(index) {
    modalSaida.classList.remove('oculto');
    let form = document.getElementById("form-saida");
    let estadia = vagas[index].estadia;
    let valorTotalEstimado = estadia.valorHora * Math.ceil((new Date() - new Date(estadia.entrada)) / (1000 * 60 * 60));
    form.reset();
    form.id.value = estadia.id;
    form.placas.value = estadia.placa;
    form.entradas.value = new Date(estadia.entrada).toLocaleString('pt-BR');
    form.saidas.value = new Date(new Date().getTime() - 3 * 60 * 60 * 1000).toISOString().slice(0, 16);
    form.valorTotal.value = estadia.valorTotal ? Number(estadia.valorTotal).toFixed(2) : Number(valorTotalEstimado).toFixed(2);
}


function salvarSaida(event) {
    event.preventDefault();
    let form = event.target;
    let id = form.id.value;
    let estadia = estadias.find(e => e.id == id);
    estadia.saida = new Date(form.saidas.value);
    estadia.valorTotal = Number(form.valorTotal.value);
    delete estadia.automovel;
    delete estadia.entrada;
    fetch(`${url}/estadia/atualizar/${estadia.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(estadia)
    })
        .then(response => {
            if (response.ok) {
                init();
                modalSaida.classList.add('oculto');
            } else {
                alert("Erro ao atualizar estadia!");
            }
        })
        .catch(error => {
            console.error("Erro ao atualizar automóvel:", error);
        });
}