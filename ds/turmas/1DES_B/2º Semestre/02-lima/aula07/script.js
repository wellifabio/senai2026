const btnCadastrar = document.getElementById('btnCadastrar')
const btnCancelar = document.getElementById('btnCancelar')
const modal = document.getElementById('modalCadastro')
const form = document.getElementById('formDisco')
const lista = document.getElementById('listarDiscos')
const mensagemVazia = document.getElementById('mensagemVazia')

btnCadastrar.addEventListener("click", () =>{
    modal.showModal();
})

btnCancelar.addEventListener("click", () =>{
    modal.close();
})
form.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    const album = document.getElementById("album").value.trim()
    const artista = document.getElementById("artista").value.trim()
    const genero = document.getElementById("genero").value.trim()
    const imagem = document.getElementById("imagem").value.trim()
    const preco = Number(document.getElementById("preco").value)

    criarCard(album, artista, genero, imagem, preco)
    form.reset()
    modal.close()
})
function criarCard(album, artista, genero, imagem, preco){
    mensagemVazia.hidden = true;
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
    info.append(titulo, nomeArtista, nomeGenero, valor)
    card.append(capa, info)
    lista.append(card)


}