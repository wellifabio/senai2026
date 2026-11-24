const API_URL = "http://localhost:3000"

const btnCadastrar = document.getElementById('btnCadastrar')
const btnCancelar = document.getElementById('btnCancelar')
const modal = document.getElementById('modalCadastro')
const form = document.getElementById('formDisco')
const lista = document.getElementById('listarDiscos')
const mensagemVazia = document.getElementById('mensagemVazia')

// Controle do Modal
btnCadastrar.addEventListener("click", () => {
    modal.showModal()
})

btnCancelar.addEventListener("click", () => {
    modal.close()
})

// 1. CARREGAR DISCOS DO BANCO DE DADOS (GET)
async function carregarDiscos() {
    try {
        const resposta = await fetch(API_URL)
        const discos = await resposta.json()

        // Limpa os cards existentes para não duplicar
        lista.innerHTML = ""

        if (discos.length === 0) {
            mensagemVazia.hidden = false
            lista.appendChild(mensagemVazia)
            return
        }

        mensagemVazia.hidden = true
        
        // Renderiza cada disco retornado do banco
        discos.forEach(disco => {
            criarCard(disco.album, disco.artista, disco.genero, disco.imagem, disco.preco)
        })

    } catch (erro) {
        console.error("Erro ao carregar discos:", erro)
        alert("Não foi possível conectar ao servidor.")
    }
}

// 2. CADASTRAR NOVO DISCO NO BANCO DE DADOS (POST)
form.addEventListener("submit", async (evento) => {
    evento.preventDefault()

    const novoDisco = {
        album: document.getElementById("album").value.trim(),
        artista: document.getElementById("artista").value.trim(),
        genero: document.getElementById("genero").value.trim(),
        imagem: document.getElementById("imagem").value.trim(),
        preco: Number(document.getElementById("preco").value)
    }

    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoDisco)
        })

        if (resposta.ok) {
            form.reset()
            modal.close()
            // Recarrega a lista atualizada do banco
            carregarDiscos()
        } else {
            alert("Erro ao salvar disco. Verifique os dados.")
        }
    } catch (erro) {
        console.error("Erro na requisição:", erro)
        alert("Erro de conexão com o servidor.")
    }
})

// 3. FUNÇÃO AUXILIAR PARA CRIAR O CARD NO DOM
function criarCard(album, artista, genero, imagem, preco) {
    const card = document.createElement("article")
    card.classList.add("card-disco")

    const capa = document.createElement("div")
    capa.classList.add("capa")

    const imagemCapa = document.createElement("img")
    imagemCapa.src = imagem
    imagemCapa.alt = album
    capa.appendChild(imagemCapa)

    const info = document.createElement("div")
    info.classList.add("info-disco")

    const titulo = document.createElement("h3")
    titulo.textContent = album

    const nomeArtista = document.createElement("p")
    nomeArtista.textContent = "Artista: " + artista

    const nomeGenero = document.createElement("p")
    nomeGenero.textContent = "Gênero: " + genero

    const valor = document.createElement("strong")
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

    info.append(titulo, nomeArtista, nomeGenero, valor)
    card.append(capa, info)
    lista.append(card)
}

// Executa a busca assim que o script carrega
carregarDiscos()