const url = 'http://localhost:3000';

function login(e) {
    e.preventDefault();
    const dados = {
        email: formLogin.email.value,
        password: formLogin.password.value
    }
    enviarDadosAPI(dados);
}

function salvarCredenciaisLocais(dados) {
    window.localStorage.setItem('credenciais', JSON.stringify(dados));
}

function enviarDadosAPI(dados) {
    fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }).then(response => response.json())
        .then(data => {
            if (data.accessToken) {
                salvarCredenciaisLocais(data);
                window.location.href = '../home';
            } else {
                msg.innerHTML = 'Email ou senha incorretos';
            }
        });
}