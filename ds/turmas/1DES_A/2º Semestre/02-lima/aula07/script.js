<<<<<<< HEAD
const modalCadastro = document.getElementById('modalCadastro')
const btnCadastrar = document.getElementById('btnCadastrar')

btnCadastrar.addEventListener('click',() =>{
    modalCadastro.showModal();
});
=======
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
>>>>>>> 9beaf33514956c4507904ed085a49719c886f2ca
