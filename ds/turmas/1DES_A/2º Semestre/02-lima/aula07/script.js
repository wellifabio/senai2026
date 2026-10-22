const btnCadastrar = document.getElementById("btnCadastrar")
const btnCancelar = document.getElementById("btnCancelar")
const modal = document.getElementById("modalCadastro")
const form = document.getElementById("formDisco")
const lista = document.getElementById("listarDiscos")
const mensagemVazia = document.getElementById("mensagemVazia")

btnCadastrar.addEventListener("click", ()=>{
    modal.showModal()
})
btnCancelar.addEventListener("click", ()=>{
    modal.close()
})