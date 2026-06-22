const url = "http://localhost:3000";
const professor = JSON.parse(window.localStorage.getItem('professor'));

if (professor) {
    atualizarProfessor();
}

function atualizarProfessor() {
    fetch(`${url}/professor/buscar/${professor.id}`)
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                localStorage.setItem('professor', JSON.stringify(data));
                professor.turmas = data.turmas;
                preencherTurmas();
            } else {
                alert(data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function preencherTurmas() {
    modalLogin.classList.add('oculto');
    titulo.textContent = `${professor.nome}`;
    corpoTurmas.innerHTML = '';
    professor.turmas.forEach(turma => {
        const linhaTurma = document.createElement('tr');
        linhaTurma.innerHTML = `
            <td>${turma.id}</td>
            <td>${turma.nome}</td>
            <td>
                <button class="bt-excluir" onclick="excluirTurma('${turma.id}')">Excluir</button>
                <button class="bt-visualizar" onclick="visualizarTurma('${turma.id}')">Visualizar</button>
            </td>
        `;
        corpoTurmas.appendChild(linhaTurma);
    });
}

formLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = {
        "email": formLogin.email.value,
        "senha": formLogin.senha.value
    }
    fetch(`${url}/professor/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                localStorage.setItem('professor', JSON.stringify(data));
                window.location.reload();
            } else {
                alert(data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function logout() {
    localStorage.removeItem('professor');
    window.location.reload();
}

formTurma.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = {
        "nome": formTurma.nome.value,
        "professorId": professor.id
    }
    fetch(`${url}/turma/cadastrar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                window.location.reload();
            } else {
                alert(data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function excluirTurma(id) {
    if (confirm('Deseja realmente excluir esta turma?')) {
        fetch(`${url}/turma/excluir/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    window.location.reload();
                } else {
                    alert(data.error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

function visualizarTurma(id) {
    window.location.href = `atividades.html?turmaId=${id}`;
}