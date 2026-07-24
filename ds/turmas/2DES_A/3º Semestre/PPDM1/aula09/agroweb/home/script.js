const url = "http://localhost:3000";

const credenciais = JSON.parse(window.localStorage.getItem("credenciais"));
if (!credenciais) {
    sair();
}

msg.innerHTML = `Bem vindo ${credenciais.user.nome}`;
listarAnimais();

function sair() {
    window.localStorage.removeItem("credenciais");
    window.location.href = "../";
}

function listarAnimais() {
    const main = document.querySelector("main");
    main.innerHTML = "";
    fetch(`${url}/animais`, {
        headers: {
            'Authorization': `Bearer ${credenciais.accessToken}`
        }
    }).then(resp => resp.json())
        .then(resp => {
            resp.forEach(a => {
                const card = document.createElement('div')
                card.innerHTML = `
                    <h2>Tipo: ${a.Tipo}</h2>
                    <p>Nome: ${a.Nome}</p>
                `;
                main.appendChild(card);
            });
        })
}