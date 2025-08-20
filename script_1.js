// VARIAVEIS

let nome = "Kaique"; // variavel, pode mudar
const idade = 25; // constante, não muda
var cidade = "SP"; // depreciada, nao use
// console.log('Meu nome é ',nome,' e tenho ',idade,' anos.');
//--------------------------------------------------------------
// FUNÇÕES

function hello(nome) {
    return "Olá, "+nome+"!";
}
// console.log(hello("Kaique"));

const soma = (a, b) => a + b; // Arrow version
// console.log(soma(3,5));
//--------------------------------------------------------------
// ARRAYS (listas)

let frutas = ['maçã', 'banana', 'laranja'];
// console.log(frutas[0]);
frutas.push('uva'); // Adiciona à lista
// console.log(frutas.length);
//---------------------------------------------------------------
// OBJETOS

let pessoa = {
    nome: "Kaique",
    idade: "39",
    ativo: true
};
console.log(pessoa.nome);
console.log(pessoa["idade"]);
//----------------------------------------------------------------
// EXERCICIO

// Função que limpa console mais rapido
function clear() {
    return console.clear();
}
// console.log(clear());