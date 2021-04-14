const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//  a.
function tamanhoArray(array){
    return  array.length;
}

console.log(`a. Tamanho do array: ${tamanhoArray(arrayTeste)} itens.`);


//  b.
function ehPar(numero){
    if (Number(numero) % 2 === 0){
        return true;
    }else {
        return false;
    }
}
console.log(`b. O número é par? ${ehPar(23)}`);

//  c.
function numerosPares(array){
    let contadorDePares = 0;
    for (number of array) {
        if (number % 2 === 0) {
            contadorDePares++;
        }
    }

    return contadorDePares;
}

console.log(`c. Quantidades de pares: ${numerosPares(arrayTeste)}`);

//  d.
function contarNumerosPares(array){
    let contadorDePares = 0;
    for (number of array) {
        if (ehPar(number) === true) {
            contadorDePares++;
        }
    }

    return contadorDePares;
}

console.log(`d. Quantidades de pares: ${contarNumerosPares(arrayTeste)}`);