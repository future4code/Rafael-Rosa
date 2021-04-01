// INTERPRETAÇÃO DE CÓDIGO
// 1. 
// a.  false
// b.  false
// c.  true
// e.  boolean

// 2.
// a.  undefined
// b.  null
// c.  11
// d.  3
// e.  [3, 4, 5, 19, 7, 8, 9, 10, 11, 12, 13]
// f.  8

// Exercícios de escrita de código
// 1.

let idadeUsuario = Number(prompt("Olá! Qual a sua idade?"));
let idadeAmigx = Number(prompt("Qual a idade do seu melhor amigo ou melhor amiga?"));

alert("Sua idade é maior do que a do seu melhor amigo ou amiga? " + String(idadeUsuario > idadeAmigx));
alert("A diferença de idade entre vocês é: " + String(idadeUsuario - idadeAmigx));

// 2. 
let numeroPar = Number(prompt("Digite um número par"));
alert("Resto da divisão de " + numeroPar + " por 2 é: " + numeroPar % 2);
// todo número par dividido por 2 terá resto zero.
// todo número ímpar dividido por 2 terá resto 1

// 3.
const listaDeTarefas = [];

listaDeTarefas.push(prompt("Informe 3 tarefas que você precisa realizar hoje. \nDigite a primeira: "));
listaDeTarefas.push(prompt("Digite a segunda tarefa: "));
listaDeTarefas.push(prompt("Digite a terceira tarefa: "));

alert("Tarefas do dia: " + listaDeTarefas);

let tarefaRealizada = prompt("Digite o número da tarefa que você já realizou.\n1. " + listaDeTarefas[0] + "\n2. " + listaDeTarefas[1] + "\n3. " + listaDeTarefas[2]) - 1;

listaDeTarefas.splice(tarefaRealizada, 1);

alert("Tarefas a realizar: " + listaDeTarefas);

// 4.
let nomeUsuario = prompt("Digite seu nome: ");
let emailUsuario = prompt("Digite seu e-mail: ");

alert("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeUsuario + "!");


