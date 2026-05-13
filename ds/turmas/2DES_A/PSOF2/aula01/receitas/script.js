const url = 'https://receitasapi-b-2025.vercel.app';

const receitas = [];
let receitaAtual = null;

carregarReceitas();



function carregarReceitas(){

fetch(url + '/receitas')

.then(res => res.json())

.then(data => {

receitas.length = 0;

receitas.push(...data);

listarCards();

})

.catch(()=>alert("Erro ao carregar receitas"));

}



function listarCards(){

const container = document.querySelector('main');

container.innerHTML = '';

receitas.forEach(receita =>{

const card = document.createElement('div');

card.classList.add('card');

card.innerHTML = `
<h3>${receita.nome}</h3>
<img src="${receita.img}">
<p>Tipo: ${receita.tipo}</p>
<p>Custo: ${receita.custoAproximado ?? "Não informado"}</p>
`;

card.onclick = () => abrirReceita(receita);

container.appendChild(card);

});

}



function abrirReceita(receita){

receitaAtual = receita;

tituloReceita.innerText = receita.nome;

nomeEdit.value = receita.nome;

imgReceita.src = receita.img;

imgEdit.value = receita.img;

tipoEdit.value = receita.tipo;

ingredientesEdit.value = receita.ingredientes;

modoEdit.value = receita.modoFazer;

custoEdit.value = receita.custoAproximado ?? '';

detalhes.classList.remove('oculto');

}



/* preview da imagem */

imgEdit.addEventListener("input", ()=>{

imgReceita.src = imgEdit.value;

});



/* adicionar receita */

document.querySelector('#formCad').addEventListener('submit', function(e){

e.preventDefault();

const novaReceita = {

nome: nome.value,
tipo: tipo.value,
ingredientes: ingredientes.value,
modoFazer: modoFazer.value,
img: urlImagem.value,
custoAproximado: custoAproximado.value ? Number(custoAproximado.value) : null

};

fetch(url + '/receitas',{

method:'POST',

headers:{
'Content-Type':'application/json'
},

body: JSON.stringify(novaReceita)

})
.then(()=>{

alert("Receita adicionada com sucesso!");

cadastro.classList.add('oculto');

carregarReceitas();

})

.catch(()=>alert("Erro ao salvar receita"));

});



/* editar receita */

function salvarEdicao(){

const receitaEditada = {

nome: nomeEdit.value,
tipo: tipoEdit.value,
ingredientes: ingredientesEdit.value,
modoFazer: modoEdit.value,
img: imgEdit.value,
custoAproximado: custoEdit.value ? Number(custoEdit.value) : null

};

fetch(url + '/receitas/' + receitaAtual.id,{

method:'PUT',

headers:{
'Content-Type':'application/json'
},

body: JSON.stringify(receitaEditada)

})
.then(res => {

if(!res.ok) throw new Error();

return res.json();

})

.then(()=>{

alert("Receita atualizada com sucesso!");

detalhes.classList.add('oculto');

carregarReceitas();

})

.catch(()=>alert("Erro ao editar receita"));

}



/* excluir receita */

function excluirReceitaAtual(){

if(!confirm("Deseja excluir essa receita?")) return;

fetch(url + '/receitas/' + receitaAtual.id,{

method:'DELETE'

})
.then(()=>{

alert("Receita excluída com sucesso!");

detalhes.classList.add('oculto');

carregarReceitas();

})

.catch(()=>alert("Erro ao excluir receita"));

}