const credenciais = JSON.parse(window.localStorage.getItem("credenciais"));
if (!credenciais) {
    window.location.href = "../";
}
const url = 'http://localhost:3000';
var animais = [];

msg.innerHTML = `Bem-vindo, ${credenciais.user.nome}!`;
console.log(credenciais);

fetch(`${url}/animais`, {
    headers: {
        'Authorization': `Bearer ${credenciais.accessToken}`
    }
}).then(response => response.json())
    .then(data => {
        console.log(data);
        animais = data;
    });

function sair() {
    window.localStorage.removeItem('credenciais');
    window.location.href = "../";
}