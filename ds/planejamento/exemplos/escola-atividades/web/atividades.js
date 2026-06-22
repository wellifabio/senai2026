const url = "http://localhost:3000";
const professor = JSON.parse(window.localStorage.getItem('professor'));

if (professor) {
    preencherAtividades();
} else {
    logout();
}

function preencherAtividades() {
    titulo.textContent = `${professor.nome}`;
    const urlParams = new URLSearchParams(window.location.search);
    const turmaId = urlParams.get('turmaId');
    if (turmaId) {
        fetch(`${url}/turma/buscar/${turmaId}`)
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    nomeTurma.textContent = `Turma: ${data.nome}`;
                    corpoAtividades.innerHTML = '';
                    data.atividades.forEach(atividade => {
                        const linhaAtividade = document.createElement('tr');
                        linhaAtividade.innerHTML = `
                        <td>${atividade.id}</td>
                        <td>${atividade.nome}</td>
                    `;
                        corpoAtividades.appendChild(linhaAtividade);
                    });
                } else {
                    alert(data.error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert('Turma não encontrada');
    }
}

formAtividade.addEventListener('submit', function (event) {
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const turmaId = urlParams.get('turmaId');
    if (turmaId) {
        const data = {
            "nome": formAtividade.nome.value,
            "turmaId": Number(turmaId)
        }
        fetch(`${url}/atividade/cadastrar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    modalAtividade.classList.add('oculto');
                    formAtividade.reset();
                    window.location.reload();
                } else {
                    alert(data.error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    else {
        alert('Turma não encontrada');
    }
});

function logout() {
    window.location.href = 'index.html';
}