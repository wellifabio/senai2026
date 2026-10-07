const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const telefone = document.querySelector("#telefone")
const salvar = document.querySelector("#salvar")
const tabela = document.querySelector("#tabela")

salvar.addEventListener("click", function(){
    const linha = document.createElement('tr')
    const colunaNome = document.createElement("td")
    const colunaEmail = document.createElement("td")
    const colunaTelefone = document.createElement("td")

    colunaNome.textContent = nome.value
    colunaEmail.textContent = email.value
    colunaTelefone.textContent = telefone.value

    linha.append(colunaNome)
    linha.append(colunaEmail)
    linha.append(colunaTelefone)
    
    tabela.append(linha)
})