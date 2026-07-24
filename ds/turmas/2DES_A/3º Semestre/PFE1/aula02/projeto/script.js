const modalCliente = document.getElementById("modalCliente");
var clientes = JSON.parse(localStorage.getItem("clientes")) || [];
renderizarTabela();

function salvarDadosLocalmente(){
    localStorage.setItem("clientes",JSON.stringify(clientes));
}

function abrirModal() {
    modalCliente.style.display = "block";
}

function fecharModal() {
    modalCliente.style.display = "none";
}

const cadCli = document.getElementById("cadCli");
cadCli.addEventListener("submit", f => {
    f.preventDefault();
    const obj = {
        cpf: cadCli.cpf.value,
        nome: cadCli.nome.value,
        sobrenome: cadCli.sobrenome.value,
        nascimento: cadCli.nascimento.value
    }

    clientes.push(obj); //Add o objeto na lista clientes
    renderizarTabela();
    fecharModal();
    cadCli.reset();
    salvarDadosLocalmente();
});

function renderizarTabela() {
    const dados = document.getElementById("dados");
    dados.innerHTML = ""; //limpa todas as linhas da tabela
    //Percorrer a lista preechendo a tabela novamente
    clientes.forEach((c, i) => {
        dados.innerHTML += `
        <tr>
            <td>${c.cpf}</td>
            <td>${c.nome}</td>
            <td>${c.sobrenome}</td>
            <td>${c.nascimento}</td>
            <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    });
}

function excluir(indice) {
    clientes.splice(indice, 1);
    salvarDadosLocalmente();
    window.location.reload();
}