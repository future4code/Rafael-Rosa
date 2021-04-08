// EXERCÍCIOS DE ESCRITA
// 1. O código está passando rodando o loop por 5 voltas (de 0 a 4) e incrementando o valor do índice à variável valor. No final imprime 10

// 2.   a) 19 21 23 25 27 30
//      b) Acredito que não. 

// 3. 
let arrayOriginal = [10, 17, 15, 4, 25, 60, 18, 95, 7]
let index

// a.
for (let index = 0; index < arrayOriginal.length; index++) {
    console.log(arrayOriginal[index]);
}

//b.
for (numero of arrayOriginal) {
    console.log(numero / 10);
}

// c.
let novoArray = [];

for (index = 0; index < arrayOriginal.length; index++) {
    if ((arrayOriginal[index] % 2) === 0) {
        novoArray.push(arrayOriginal[index]);
    }
}

console.log(novoArray);

// d.
let arrayStrings = [];
for (index = 0; index < arrayOriginal.length; index++) {
    arrayStrings.push(`O elemento do índex ${index} é: ${arrayOriginal[index]}`);
}

console.log(arrayStrings);

// e.
let valorMinimo = Infinity;
let valorMaximo = -Infinity;

for (numero of arrayOriginal) {
    if (numero < valorMinimo) {
        valorMinimo = numero;
    }

    if (numero > valorMaximo){
        valorMaximo = numero;
    }
}

console.log(`Valor mínimo: ${valorMinimo}\nValor máximo: ${valorMaximo}`)

