const modalCli = document.querySelector("#modalCli");

function abrirModal() {
    modalCli.style.display = "block";
}

function fecharModal() {
    modalCli.style.display = "none";
}

var clientes = JSON.parse(localStorage.getItem("clientes")) || [];

renderizarTabela();

function salvarLocal(){
    localStorage.setItem("clientes",JSON.stringify(clientes));
    window.location.reload();
}

const formCli = document.querySelector("#formCli");
formCli.addEventListener("submit", e => {
    e.preventDefault();
    const obj = {
        cpf : formCli.cpf.value,
        nome: formCli.nome.value,
        sobrenome: formCli.sobrenome.value,
        nascimento: formCli.nascimento.value
    }
    clientes.push(obj);
    salvarLocal();
})

function renderizarTabela(){
    const corpo = document.querySelector("#dados");
    corpo.innerHTML = "";
    clientes.forEach((c, i)=>{
        corpo.innerHTML += `
        <tr>
            <td>${c.cpf}</td>
            <td>${c.nome}</td>
            <td>${c.sobrenome}</td>
            <td>${c.nascimento}</td>
            <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    })
}
function excluir(indice){
    clientes.splice(indice,1);
    salvarLocal();
}