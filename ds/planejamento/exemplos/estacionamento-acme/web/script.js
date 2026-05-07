const url = "http://localhost:3000/estadia";
var estadias = [];

init();
async function init() {
    await fetchEstadias();
    await montarVagas();
}

async function fetchEstadias() {
    try {
        const response = await fetch(url + "/listar");
        estadias = await response.json();
    } catch (error) {
        console.error("Erro ao buscar estadias:", error);
    }
}

async function montarVagas() {
    const area = document.getElementById("vagas");
    area.innerHTML = "";
    estadias.forEach((estadia, i) => {
        const card = document.createElement("div");
        card.className = "vaga";
        card.innerHTML = `
            <p><strong>Id:</strong> ${estadia.id}</p>
            <p><strong>Placa:</strong> ${estadia.placa}</p>
            <p><strong>Entrada:</strong> ${new Date(estadia.entrada).toLocaleDateString('pt-BR')} - ${new Date(estadia.entrada).toLocaleTimeString('pt-BR')}</p>
            <p><strong>Saída:</strong> ${estadia.saida != null ? new Date(estadia.saida).toLocaleDateString('pt-BR') : 'N/A'} - ${estadia.saida !== null ? new Date(estadia.saida).toLocaleTimeString('pt-BR') : 'N/A'}</p>
            <p><strong>Valor hora:</strong> ${Number(estadia.valorHora).toFixed(2).replaceAll('.', ',')}</p>
            <p><strong>Valor Total:</strong> ${Number(estadia.valorTotal).toFixed(2).replaceAll('.', ',')}</p>
            <p><strong>Vaga:</strong> ${estadia.vaga}</p>
            <td style="display: flex; justify-content: right;">
                <div style="display: flex">
                    <button onclick="editar('${i}')">🚗</button>
                    <button onclick="editarEstadia('${estadia.id}')">✏️</button>
                    <button onclick="excluirEstadia('${estadia.id}')">🗑️</button>
                </div>
            </td>
        `;
        area.appendChild(card);
    });
}

