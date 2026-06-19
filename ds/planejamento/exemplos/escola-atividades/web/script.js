const url = "http://localhost:3000";
const professor = JSON.parse(window.localStorage.getItem('professor'));

if (professor) {
    preencherTurmas();
}
function preencherTurmas() { }

formLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = {
        "nome": formLogin.nome.value,
        "senha": formLogin.senha.value
    }
    fetch(`${url}/professor/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => { response.status === 200 ? response.json() : Promise.reject(new Error('Login failed')) })
        .then(data => {
            if (data) {
                localStorage.setItem('professor', JSON.stringify(data));
                window.location.reload();
            } else {
                alert('Login failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});