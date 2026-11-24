const API_URL = "http://localhost:3000"

const btnCadastrar = document.getElementById('btnCadastrar')
const btnCancelar = document.getElementById('btnCancelar')
const modal = document.getElementById('modalCadastro')
const form = document.getElementById('formDisco')
const lista = document.getElementById('listarDiscos')
const mensagemVazia = document.getElementById('mensagemVazia')

let idEditando = null

btnCadastrar.addEventListener("click", () => {
    modal.showModal();
})

btnCancelar.addEventListener("click", () => {
    modal.close();
})
modal.addEventListener("close",()=>{
    idEditando = null
    form.reset()
})
//Carregando as informações do BD (GET)
async function carregarDiscos() {
    try {
        const resposta = await fetch(API_URL + '/listar')
        const discos = await resposta.json()

        lista.innerHTML = ""

        if (discos.length === 0) {
            mensagemVazia.hidden = false
            lista.appendChild(mensagemVazia)
            return
        }
        mensagemVazia.hidden = true
        //Renderizar
        discos.forEach(disco => {
            criarCard(disco.album, disco.artista, disco.genero, disco.imagem_url, disco.preco,disco.id)
        })
    } catch (erro) {
        console.error("Erro ao carregar discos:", erro)
        alert("Não foi possivel conectar ao servidor")
    }
}


//Escolhe o que o submit vai fazer
form.addEventListener("submit", async (evento) => {
    evento.preventDefault()
    if(idEditando){
        await atualizarDisco(idEditando)
    }else{
        await cadastrarDisco()
    }
})

//Cadastrar novo disco (post)
async function cadastrarDisco() {
    const novoDisco = {
        album: document.getElementById("album").value.trim(),
        artista: document.getElementById("artista").value.trim(),
        genero: document.getElementById("genero").value.trim(),
        imagem: document.getElementById("imagem").value.trim(),
        preco: Number(document.getElementById("preco").value)
    }
    try {
        const resposta = await fetch(API_URL + '/cadastrar', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoDisco)
        })
        if (resposta.ok) {
            modal.close()
            carregarDiscos()
        }else{
            alert("Erro ao salvar disco. Verificar database")
        }
    }catch (erro){
        console.error("Erro na requisição:", erro)
        alert("Erro de conexão com o servidor")
    }
  
}

async function atualizarDisco(id) {
    const discoAtualizado = {
        album: document.getElementById("album").value.trim(),
        artista: document.getElementById("artista").value.trim(),
        genero: document.getElementById("genero").value.trim(),
        imagem: document.getElementById("imagem").value.trim(),
        preco: Number(document.getElementById("preco").value)
    }
    try{
        const resposta = await fetch(API_URL + '/atualizar/'+ id,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(discoAtualizado)
        })
        if(resposta.ok){
            modal.close()
            carregarDiscos()
        }else {
            alert("Erro ao atualizar disco. Verificar BD")
        }
    }catch (erro){
        console.error("Erro na requisição:", erro)
        alert("Erro de conexão com o servidor")
    }
}
async function deletarDisco(id) {
    try{
        const resposta = await fetch(API_URL + '/deletar/' + id,{
            method:"DELETE"
        })
        if(resposta.ok){
            carregarDiscos()
        }else{
            alert("Erro ao deletar disco")
        }
    }catch (erro){
        console.error("Erro na requisição:",erro)
        alert("Erro de conexão com o servidor")
    }
    
}



function criarCard(album, artista, genero, imagem, preco, id){
    const card = document.createElement("article")
    card.classList.add("card-disco")

    const capa = document.createElement("div")
    capa.classList.add("capa")

    const imagemCapa = document.createElement("img")
    imagemCapa.src = imagem
    capa.appendChild(imagemCapa)

    const info = document.createElement("div")
    info.classList.add("info-disco")

    const titulo = document.createElement("h3")
    titulo.textContent = album

    const nomeArtista = document.createElement("p")
    nomeArtista.textContent = "Artista: " + artista

    const nomeGenero = document.createElement("p")
    nomeGenero.textContent = "Gênero: " + genero;

    const valor = document.createElement("strong")
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString("pt-BR",{style: "currency",currency:"BRL"})
    //Botões para editar e excluir
    const acoesCard = document.createElement("div")
    acoesCard.classList.add("acoes-card")
    
    //Editar
    const btnEditar = document.createElement("button")
    btnEditar.type = "button"
    btnEditar.classList.add("btn-editar")
    btnEditar.textContent = "Editar"
    //Função ao clicar
    btnEditar.addEventListener("click",() => {
        idEditando = id
        document.getElementById("album").value = album 
        document.getElementById("artista").value = artista
        document.getElementById("genero").value = genero
        document.getElementById("imagem").value = imagem
        document.getElementById("preco").value = preco
        modal.showModal()
    }) 
    const btnExcluir = document.createElement("button")
    btnExcluir.type = "button"
    btnExcluir.classList.add("btn-excluir")
    btnExcluir.textContent = "Excluir"
    btnExcluir.addEventListener("click",()=>deletarDisco(id))   

    acoesCard.append(btnEditar, btnExcluir)
    info.append(titulo, nomeArtista, nomeGenero, valor,acoesCard)
    card.append(capa, info)
    lista.append(card)


}
carregarDiscos()