// JSON PARSE & JSON STRINGIFY

// parse
let json_text = `{
    "nome": "Kaique",
    "idade": 39
}`;
let obj = JSON.parse(json_text); // Conteúdo JSON para Objeto
console.log(obj.nome);

// stringify
let pessoa = { nome: "Kaique", idade: 36};
let texto = JSON.stringify(pessoa);
console.log(texto);
//-------------------------------------------------------------
// ARRAYS METHODS

// map() - manipula um mapa do array com alguma expressao
let numeros = [1,2,3]
let multiplica = numeros.map(n => n * 2);
console.log(multiplica);

// filter() - filtra a saida com uma expressao
let idades = [15,22,18,30];
let maiores = idades.filter(jotinha => jotinha >= 18);
console.log(maiores);

// reduce() - reduz á 1 item
let valores = [10,20,30];
let soma = valores.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);

/* example
array.reduce((acumulador, valorAtual, indice, arrayOriginal) => {
  // lógica que transforma o acumulador
  return novoAcumulador;
}, valorInicial);
*/
//-----------------------------------------------------------------
// EXERCICIO

let users = [
    {nome: "Ana", idade: 22},
    {nome: "Kennedy", idade: 17},
    {nome: "Ronaldo", idade: 58}
];
/* sesh
Filtre apenas os adultos
Pegue apenas os nomes
Calcule a média de idade
*/
console.log(users.filter(u => u.idade >= 18));
console.log(users.map(u => u.nome));
console.log(users.reduce((soma, u) => soma + u.idade, 0)/users.length);