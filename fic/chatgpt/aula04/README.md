# Aula04 - API REST

## API
Uma API REST é um modelo de comunicação entre sistemas de software que utiliza o protocolo HTTP para a troca de dados de forma simples e padronizada

## REST
O termo REST vem de Representational State Transfer (Transferência de Estado Representacional), que é um estilo de arquitetura de software.

## REST Full
REST FUll API do protocolo HTTP trabalha com pelo menos 4 verbos
- GET
- POST
- PUT / PACTH
- DELETE

## Analogia
Pense na API como um garçom em um restaurante: o cliente (aplicação) faz um pedido, o garçom (API) leva o pedido até a cozinha (servidor), e depois traz o prato pronto de volta para o cliente.

## Chave de API
É um código criptografado que obtemos do dono da API que permite-nos usá-la.
### Exemplo API do Google para usar o GEMINI
- Faça login com sua conta gmail em uma janela anonima, 
- Acesse o [Google AI Studio](https://aistudio.google.com/app/api-keys)
- Clique em **Criar chave de API**, dê um nome para ela, mantenha segura, e não se esqueça de excluí-lá após usar.
- Teste no [ChatBot do professor](https://wellifabio.github.io/chatbot_gemini_eu_prof_2026/)

## Exemplos de APIs externas públicas
- [Via CEP](https://viacep.com.br/) - Obter endereços através do CEP
- [Banco Central do Brasil](https://bcb.gov.br/) - Obter dados financeiros
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API educacional
- [DummyJSON](https://dummyjson.com/docs/auth) - API de autenticação, para fazer login com segurança JWT(JSON Web Token)

### Inicialmente vamos explorar estas APIS
## Criar uma página de cadastros de endereços que utiliza a API ViaCEP
- 1 Crie uma pasta na área de trabalho e dentro dela três arquivos padrão web básico
    - index.html
    - script.js
    - style.css
- index.html
```html
<html>

<head>
    <title>Exemplo de Formulário</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>
    <header>
        <h1>Página de cadastro de endereços</h1>
        <button onclick="formulario.classList.remove('oculto')">Novo Endereço</button>
    </header>
    <main>
        <form id="formulario" class="oculto">
            <h2>Dados do Endereço</h2>
            <label>Cep:
                <input name="cep" type="text" id="cep" value="" size="10" maxlength="9"
                    onblur="pesquisacep(this.value);" /></label><br />
            <label>Rua:
                <input name="rua" type="text" id="rua" size="60" disabled /></label><br />
            <label>Bairro:
                <input name="bairro" type="text" id="bairro" size="40" disabled /></label><br />
            <label>Cidade:
                <input name="cidade" type="text" id="cidade" size="40" disabled /></label><br />
            <label>Estado:
                <input name="uf" type="text" id="uf" size="2" disabled /></label><br />
            <label>Número:
                <input name="numero" type="text" id="numero" size="8" /></label><br />
            <label>Complemento:
                <input name="complemento" type="text" id="complemento" size="40" /></label><br />
            <label>
                <input type="reset" value="Limpar" />
                <input type="submit" value="Enviar" />
            </label>
        </form>
        <table>
            <thead>
                <tr>
                    <th>CEP</th>
                    <th>Rua</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>Número</th>
                    <th>Complemento</th>
                </tr>
            </thead>
            <tbody id="enderecos"> </tbody>
        </table>
    </main>
    <footer>
        <button onclick="limpar()">Limpar endereço</button>
        <button onclick="exportarCSV()">Exportar CSV - Excel</button>
    </footer>
</body>

</html>
```
- script.js
```js
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const enderecos = document.getElementById('enderecos');
    const STORAGE_KEY = 'enderecosTabela';

    if (!formulario || !enderecos) {
        return;
    }

    window.formulario = formulario;

    function salvarTabela() {
        const linhas = Array.from(enderecos.querySelectorAll('tr')).map((linha) => ({
            cep: linha.children[0]?.textContent.trim() || '',
            rua: linha.children[1]?.textContent.trim() || '',
            bairro: linha.children[2]?.textContent.trim() || '',
            cidade: linha.children[3]?.textContent.trim() || '',
            uf: linha.children[4]?.textContent.trim() || '',
            numero: linha.children[5]?.textContent.trim() || '',
            complemento: linha.children[6]?.textContent.trim() || ''
        }));

        localStorage.setItem(STORAGE_KEY, JSON.stringify(linhas));
    }

    function renderTabela(dados) {
        enderecos.innerHTML = dados.map((item) => `
            <tr>
                <td>${item.cep}</td>
                <td>${item.rua}</td>
                <td>${item.bairro}</td>
                <td>${item.cidade}</td>
                <td>${item.uf}</td>
                <td>${item.numero}</td>
                <td>${item.complemento}</td>
            </tr>
        `).join('');
    }

    function carregarTabela() {
        const dadosSalvos = localStorage.getItem(STORAGE_KEY);

        if (!dadosSalvos) {
            return;
        }

        try {
            const dados = JSON.parse(dadosSalvos);
            if (Array.isArray(dados) && dados.length > 0) {
                renderTabela(dados);
            }
        } catch (error) {
            console.error('Erro ao carregar tabela do localStorage:', error);
        }
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            document.getElementById('rua').value = conteudo.logradouro;
            document.getElementById('bairro').value = conteudo.bairro;
            document.getElementById('cidade').value = conteudo.localidade;
            document.getElementById('uf').value = conteudo.uf;
        } else {
            formulario.reset();
            alert("CEP não encontrado.");
        }
    }

    function pesquisacep(valor) {
        var cep = valor.replace(/\D/g, '');

        if (cep !== "") {
            var validacep = /^[0-9]{8}$/;

            if (validacep.test(cep)) {
                document.getElementById('rua').value = "...";
                document.getElementById('bairro').value = "...";
                document.getElementById('cidade').value = "...";
                document.getElementById('uf').value = "...";

                var script = document.createElement('script');
                script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
                document.body.appendChild(script);
            } else {
                formulario.reset();
                alert("Formato de CEP inválido.");
            }
        } else {
            formulario.reset();
        }
    }

    window.pesquisacep = pesquisacep;
    window.meu_callback = meu_callback;

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if (formulario.cep.value === '' || formulario.numero.value === '') {
            alert('Preencha os campos obrigatórios');
            return;
        }

        enderecos.innerHTML += `
            <tr>
                <td>${formulario.cep.value}</td>
                <td>${formulario.rua.value}</td>
                <td>${formulario.bairro.value}</td>
                <td>${formulario.cidade.value}</td>
                <td>${formulario.uf.value}</td>
                <td>${formulario.numero.value}</td>
                <td>${formulario.complemento.value}</td>
            </tr>
        `;

        salvarTabela();
        formulario.reset();
        formulario.classList.add('oculto');
    });

    function exportarCSV() {
        const linhas = Array.from(enderecos.querySelectorAll('tr'));

        if (linhas.length === 0) {
            alert('Não há dados para exportar.');
            return;
        }

        const headers = ['CEP', 'Rua', 'Bairro', 'Cidade', 'Estado', 'Número', 'Complemento'];
        const csvRows = [headers.join(';')];

        linhas.forEach((linha) => {
            const cells = Array.from(linha.children).map((celula) => {
                const valor = celula.textContent.trim().replace(/"/g, '""');
                return `"${valor}"`;
            });
            csvRows.push(cells.join(';'));
        });

        const csvContent = csvRows.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', 'enderecos.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    function limpar() {
        enderecos.innerHTML = '';
        localStorage.removeItem(STORAGE_KEY);
    }

    window.limpar = limpar;
    window.exportarCSV = exportarCSV;
    carregarTabela();
});
```
- style.css
```css
* {
    margin: 0;
    padding: 0;
    font-family: cursive;
}

:root {
    --c1: #f5fff5;
    --c2: #92cc92;
    --c3: #277727;
    --c4: #074407;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    gap: 15px;
}

header, footer {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-around;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--c1);
    border-radius: 15px;
    box-shadow: 0px 0px 10px var(--c2);
    padding: 20px;
    label{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    input {
        border-radius: 15px;
        border: 1px solid var(--c2);
        padding: 5px;
    }
}

button, input[type="reset"], input[type="submit"] {
    cursor: pointer;
    background-color: var(--c3);
    color: var(--c1);
    padding: 10px;
    border: none;
    border-radius: 15px;
    box-shadow: 0px 0px 10px var(--c2);
}

button:hover, input[type="reset"]:hover, input[type="submit"]:hover {
    background-color: var(--c4);
}

table {
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
}

/* Tabela zebrada */
tr:nth-child(even) {
    background-color: var(--c1);
}
tr:nth-child(odd) {
    background-color: var(--c2);
}

th{
    padding: 8px;
    text-align: center;
    background-color: var(--c4);
    color: var(--c1);
}

td {
    padding: 8px;
    text-align: left;
}


.oculto {
    display: none;
}
```
