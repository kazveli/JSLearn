// SELECIONANDO ELEMENTOS DOM

let titulo = document.getElementById('titulo'); // Id
let texto = document.querySelector('.texto'); // Class
// Mostra os 2 textos puxados do DOM
console.log(titulo.innerText+'\n'+texto.innerText);
//-------------------------------------------------------
// ALTERAÇÕES NOS ELEMENTOS
// Altera em tempo real a página, a variáveis basicamente se tornam o elemento.

// Conteudo
titulo.innerText = "Novo título!";
texto.innerHTML = '<b>Texto inicial em negrito</b>';

// Estilo
titulo.style.fontSize = '25px';
texto.style.color = 'blue';
//---------------------------------------------------------
// CRIAÇÃO DE ELEMENTOS

let lista = document.createElement('ul'); // Elemento tipo lista
let item = document.createElement('li'); // Primeiro item da lista
item.innerText = 'first Item'; // Texto dentro do primeiro item
lista.appendChild(item); // Adiciona o item ao DOM do elemento lista
document.body.appendChild(lista); // Adiciona a lista ao DOM da página
//---------------------------------------------------------
// EVENTOS

// button
let btn = document.getElementById('btn');
let msg = document.getElementById('mensagem');

btn.addEventListener("click", () => {
    msg.innerText = "Você clicou no botão!";
    console.log('O botão foi clicado!');
});

// input
let input = document.getElementById('nome');
let saida = document.getElementById('saida');

input.addEventListener('input', () => {
    saida.innerText = 'Voce digitou: '+input.value;
});