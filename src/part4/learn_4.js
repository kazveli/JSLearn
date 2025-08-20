// CONCEITO ASSINCRONO
/* algumas operações não acontecem instantaneamente,
como por exemplo buscar dados de uma API.
Caso o JS fosse só sincrono, o programa travaria.
*/
// Promise -> Uma operação que ainda não terminou.
//--------------------------------------------------
// TRAVA O SISTEMA
function esperar(ms) {
    const inicio = Date.now();
    while (Date.now() - inicio < ms) {}
    console.log("Terminou de esperar!");
}
console.log("Começando...");
//esperar(3000); // 3 segundos
console.log("Fim.");
//-------------------------------------------------
// SOLUÇÕES - fetch ou async/await

// fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // manipula a promise do fetch
    .then(data => console.log(data)) // manipula a promise do primeiro then
    .catch(err => console.error('Erro:', err)); // captura qualquer erro

// async/await
/* sintaxe moderna, permite escrever async code como se fosse sincrono */
async function pegarTudo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error('Erro:', err);
    }
} // O uso do await faz a pausa necessaria para esperar a Promise do fetch chegar.
pegarTudo();
//------------------------------------------------------
// ENVIANDO DADOS COM POST ASYNC

async function criarPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                title: 'Meu post',
                body: 'Conteudo do post',
                userId: 1
            })
        }); // HEADER passada junto ao fetch()
        const data = await response.json(); // Pegando o retorno json() que é o objeto que criamos la
        console.log(data);
    } catch (err) {
        console.error("Erro:",err);
    }
}
criarPost();
//----------------------------------------------------------
// EXERCICIO
// Lista nomes de usuarios

async function buscarUsuarios() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // coleta a promise do fetch
    const users = await res.json(); // coleta a promise do res em json()
    console.log(users.map(u => u.name)); // Faz um remap para mostrar só os nomes.
}
buscarUsuarios();

/* Funções assincronas não respondem de maneira ordenada, ou seja, 
no console irá aparecer a primeira que terminar de ser executada. */