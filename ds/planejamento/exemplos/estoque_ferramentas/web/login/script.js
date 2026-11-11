const api = 'http://localhost:3000';
const usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario) {
    window.location.href = '../home/index.html';
}

const login = document.querySelector('form');
login.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dados = {
        email: login.email.value,
        senha: login.senha.value
    };

    const resposta = await fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    if (resposta.ok) {
        const usuario = await resposta.json();
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.href = '../home/index.html';
    } else {
        alert('Login ou senha inválidos!');
    }
});
