// EXERCÍCIOS DE INTERPRETAÇÃO
// 1. 
// O teste recebe uma entrada do usuário e armazena na variável "respostaUsuário", então converte o tipo da resposta de string para número. Após isso, verifica se o número é par ou ímpar através do resto da divisão. Se par, imprime que passou e, se ímpar, imprime que não passou.

// 2.
// a. O código verifica qual fruta o usuário forneceu de entrada e apresenta o valor dela.
// b. O preço da fruta Maçã é R$ 2.25
// c. O preço da fruta Pêra é R$ 5

// 3.
// a. Faz o cast para número no valor inserido pelo usuário através do prompt
// b. Esse número passou no teste / Erro de variável não declarada. Se o número fosse -10, seria só a mensagem de erro de variável não declarada.
// c. Sim, erro de variável não declarada, pois a variável está sendo declarada dentro do bloco if e sendo chamada fora do escopo do bloco.

// EXERCÍCIOS DE ESCRITA
// 4.
let idadeUsuario = Number(prompt("Digite a sua idade: "));

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir");
} else {
    console.log("Você não pode dirigir");
}

// 5.
let turnoDoDia = prompt("Digite a letra que representa o turno que você estuda: \nM -> Matutino \nV -> Vespertino \nN -> Noturno");

if (turnoDoDia === "M" || turnoDoDia === "m") {
    console.log("Bom dia!");
} else if (turnoDoDia === "V" || turnoDoDia === "v") {
    console.log("Boa tarde!");
} else if (turnoDoDia === "N" || turnoDoDia === "n") {
    console.log("Boa noite!");
} else {
    console.log("Resposta inválida. Por favor, atualize a página e responda novamente.");
}

// 6. 
let turnoEstudos = prompt("Digite a letra que representa o turno que você estuda: \nM -> Matutino \nV -> Vespertino \nN -> Noturno");

switch (turnoEstudos) {
    case "M":
    case "m":
        console.log("Bom dia!");
        break;
    case "V":
    case "v":
        console.log("Boa tarde!");
        break;
    case "N":
    case "n":
        console.log("Boa noite!");
        break;
    default:
        console.log("Resposta inválida. Por favor, atualize a página e responda novamente.");
}

// 7.
let generoFilme = prompt("Qual o gênero do filme que irá assistir?");
let precoIngresso = Number(prompt("Qual o valor do ingresso? (digite somente números)"));

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}