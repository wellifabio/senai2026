let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

document.addEventListener("DOMContentLoaded",renderizarTabela);

function abrirModal(){
    document.getElementById("modal").style.display = "block";
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
    limparCampos();
}

function salvarCliente() {
    const cpf = document.getElementById("cpf").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const nascimento = document.getElementById("nascimento").value;

    if(!cpf || !nome) {
        alert("CPF e Nome são obrigatórios!");
        return;
    }
    const existe = clientes.find
    (cliente =>cliente.cpf === cpf);

    if (existe) {
        alert("CPF já cadastrado!");
        return;
    }

    const novoCliente = {
        id: Date.now(),
        cpf,
        nome,
        sobrenome,
        nascimento
    };
    clientes.push(novoCliente);
    atualizarLocalStorage();
    renderizarTabela();
    fecharModal();
}

function renderizarTabela() {
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    clientes.forEach(cliente =>{
        tabela.innerHTML += `
        <tr>
            <td>${cliente.cpf}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.sobrenome}</td>
            <td>${cliente.nascimento}</td>
            <td>
            <button onclick="excluirCliente(${cliente.id})">Excluir</button>
            </td>
            </tr>
            `;
    });
}
function excluirCliente(id){
    if(!confirm("Deseja realmente excluir?")) return;

    clientes = clientes.filter(cliente => cliente.id !== id)
    atualizarLocalStorage();
    renderizarTabela();
}
function atualizarLocalStorage(){
    localStorage.setItem("clientes",JSON.stringify(clientes));
}
function limparCampos(){
    document.getElementById("cpf").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("nascimento").value = "";
}