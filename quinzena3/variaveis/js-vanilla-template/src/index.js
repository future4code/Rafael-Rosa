/*
// Interpretação
// 1.   10
//      10 5

// 2.   10 10 10

// Escrita
// 1.

let nome;
let idade;

console.log("Tipo de 'nome': ", typeof nome, "/ Tipo de 'idade': ", typeof idade);
// Foi impresso "undefined" porque não foi atribuído nenhum valor às variáveis.

nome = prompt("Digite seu nome: ");
idade = prompt("Digite sua idade");

console.log("Tipo de 'nome': ", typeof nome, "/ Tipo de 'idade': ", typeof idade);
// O tipo da variável assumiu o tipo do conteúdo dela.

console.log("Olá", nome, ", você tem", idade, "anos");

//2.
let sobrenome = prompt("Qual seu sobrenome?");
let mesAniversario = prompt("Qual o mês do seu aniversário?");
let corFavorita = prompt("Qual sua cor favorita?");
let numeroFavorito = prompt("Qual seu número favorito?");
let comidaFavorita = prompt("Qual sua comida favorita?");

console.log(
    "1. Qual o seu sobrenome?\nResposta:", sobrenome, 
    "\n \n2. Qual o mês do seu aniversário?\n\Resposta:", mesAniversario,
    "\n \n3. Qual sua cor favorita?\n\Resposta:", corFavorita, 
    "\n \n4. Qual seu número favorito?\n\Resposta:", numeroFavorito,
    "\n \n5. Qual sua comida favorita?\n\Resposta:", comidaFavorita
);

//3. 
let comidas = ["Massa", "Lasanha", "Pizza", "Xis", "Pastel"];

console.log(comidas);

console.log("Estas são as minhas comidas preferidas: \n", comidas[0], "\n", comidas[1], "\n", comidas[2], "\n", comidas[3], "\n", comidas[4], "\n");

comidas[1] = prompt("Qual é a sua comida preferida?");

console.log("Estas são as nossas comidas preferidas: \n", comidas[0], "\n", comidas[1], "\n", comidas[2], "\n", comidas[3], "\n", comidas[4], "\n");

*/

//4.

let perguntas = ["Você está usando uma roupa verde hoje?", "Você já jantou hoje?", "Você está usando sapatos agora?"];

let respostas = [false, true, true];

console.log(perguntas[0], respostas[0]);
console.log(perguntas[1], respostas[1]);
console.log(perguntas[2], respostas[2]);

