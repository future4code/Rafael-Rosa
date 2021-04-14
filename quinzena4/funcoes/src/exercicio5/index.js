//  a.
function somarNumeros(num1, num2) {
    soma = Number(num1) + Number(num2)

    return soma
}

resultado = somarNumeros(2, 5)
console.log(`A soma dos números é ${soma}`);

//  b.
function primeiroMaiorOuIgual(num1, num2) {
    if (num1 >= num2) {
        return true
    } else {
        return false
    }
}

verificaSeEhMaior = primeiroMaiorOuIgual(2, 5)

if (verificaSeEhMaior) {
    console.log(`Primeiro número é maior ou igual que o segundo.`);
} else {
    console.log(`Primeiro número é menor que o segundo.`);
}


//  c.
function imprimirParametro(parametro){
    for (let i = 0; i < 10; i++){
        console.log(`${parametro}`);
    }
}

imprimirParametro("Imprimir este texto 10 vezes.")
