const url = "http://localhost:3000";

function entrar(e) {
    e.preventDefault();
    const dados = {
        email: formLogin.email.value,
        password: formLogin.password.value
    }
    login(dados);
}

function login(dados) {
    fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }).then(resp => resp.json())
        .then(dados => {
            if (dados.accessToken) {
                salvarLocal(dados);
            } else {
                msg.innerHTML = "E-mail ou senha inválidos"
            }
        })
}

function salvarLocal(dados) {
    window.localStorage.setItem("credenciais", JSON.stringify(dados));
    window.location.href = '../home';
}