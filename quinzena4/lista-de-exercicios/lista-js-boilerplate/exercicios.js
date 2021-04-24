//Exercício 1

function inverteArray(array) {
   let arrayInvertido = [];

   for (let index = array.length - 1; index >= 0; index--) {
      arrayInvertido.push(array[index]);
   }

   return arrayInvertido;
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let arrayDeParesAoQuadrado = [];

   for (let index = 0; index < array.length; index++) {
      if (array[index] % 2 === 0) {
         arrayDeParesAoQuadrado.push(array[index] * array[index]);
      }
   }

   return arrayDeParesAoQuadrado;
}

//Exercício 3

function retornaNumerosPares(array) {
   let arrayDePares = [];

   for (let index = 0; index < array.length; index++) {
      if (array[index] % 2 === 0) {
         arrayDePares.push(array[index]);
      }
   }

   return arrayDePares;
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = -Infinity;

   for (let numero of array) {
      if (numero > maiorNumero) {
         maiorNumero = numero;
      }
   }

   return maiorNumero;
}

//Exercício 5

function retornaQuantidadeElementos(array) {

   return array.length;

}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true;
   const booleano2 = false;
   const booleano3 = !booleano2;
   const booleano4 = !booleano3;

   const arrayDeRespostas = [];

   if (booleano1 && booleano2 && !booleano4) {
      arrayDeRespostas.push(true);
   } else {
      arrayDeRespostas.push(false);
   };

   if ((booleano1 && booleano2) || !booleano3) {
      arrayDeRespostas.push(true);
   } else {
      arrayDeRespostas.push(false);
   }

   if ((booleano2 || booleano3) && (booleano4 || booleano1)) {
      arrayDeRespostas.push(true);
   } else {
      arrayDeRespostas.push(false);
   }

   if (!(booleano2 && booleano3) || !(booleano1 && booleano3)) {
      arrayDeRespostas.push(true);
   } else {
      arrayDeRespostas.push(false);
   }

   if (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)) {
      arrayDeRespostas.push(true);
   } else {
      arrayDeRespostas.push(false);
   }

   return arrayDeRespostas;

}

//Exercício 7

function retornaNNumerosPares(n) {
   let arrayDePares = [];
   let contador = 0;

   while (arrayDePares.length < n) {
      if (contador % 2 === 0) {
         arrayDePares.push(contador);
         contador++;
      } else {
         contador++;
      }
   }

   return arrayDePares;
}

// Exercício 8

function checaTriangulo(a, b, c) {
   const triangulo = {
      ladoA: a,
      ladoB: b,
      ladoC: c
   }

   if ((triangulo.ladoA === triangulo.ladoB) && (triangulo.ladoB === triangulo.ladoC)) {
      return "Equilátero";
   } else if ((triangulo.ladoA === triangulo.ladoB) || (triangulo.ladoA === triangulo.ladoC) || (triangulo.ladoB === triangulo.ladoC)) {
      return "Isósceles";
   } else {
      return "Escaleno";
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   const objeto = {
      maiorNumero: 0,
      maiorDivisivelporMenor: false,
      diferenca: 0
   }

   if (num1 > num2) {
      objeto.maiorNumero = num1
      objeto.diferenca = num1 - num2

      num1 % num2 === 0 ? (objeto.maiorDivisivelporMenor = true) : (objeto.maiorDivisivelporMenor = false)

   } else if (num2 > num1) {
      objeto.maiorNumero = num2
      objeto.diferenca = (num2 - num1)

      num2 % num1 === 0 ? (objeto.maiorDivisivelporMenor = true) : (objeto.maiorDivisivelporMenor = false)
   }

   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let menorNumero = Infinity
   let segundoMenor = Infinity + 1
   let maiorNumero = -Infinity
   let segundoMaior = -Infinity - 1

   for (numero of array) {
      if (numero < menorNumero) {
         segundoMenor = menorNumero
         menorNumero = numero
      } else if ((numero > menorNumero) && (numero < segundoMenor)) {
         segundoMenor = numero
      }

      if (numero > maiorNumero) {
         segundoMaior = maiorNumero
         maiorNumero = numero
      } else if ((numero < maiorNumero) && (numero > segundoMaior)) {
         segundoMaior = numero
      }

   }

   return [segundoMaior, segundoMenor]
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   // Escreva uma função que recebe um array e retorne um array com eles em ordem crescente.

   // console.log(array)
   // novoArray = []
   // let ehMenor = Infinity
   // let indiceMenor

   // while (array.length !== novoArray.length) {

   //    if (novoArray.length === 0) {
   //       for (let index = 0; index < array.length; index++) {
   //          if (array[index] < ehMenor) {
   //             ehMenor = array[index]
   //             indiceMenor = index
   //          }
   //       }
   //       novoArray.push(ehMenor)
   //       console.log("ehMenor1 " + ehMenor);
   //    } else {

   //       ehMenor = Infinity
   //       for (index = 0; index < array.length; index++) {

   //          if ((array[index] > novoArray[novoArray.length - 1]) && (array[index] < ehMenor)) {
   //             ehMenor = array[index]
   //             indiceMenor = index
   //          } else {
   //             console.log(`else: i: ${index} - num: ${array[index]} - iMenor: ${indiceMenor}`);
   //          }
   //       }
   //       novoArray.push(ehMenor)
   //       console.log(`ehMenor${novoArray.length}  + ${ehMenor}`);

   //    }

   // }

   // console.log("-------\nehMenor" + ehMenor);
   // console.log(novoArray)
   // console.log(novoArray.length - 1)

}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui

   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return filme

}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filmeFavoritoAstrodev = filmeFavorito()

   return `Venha assistir ao filme ${filmeFavoritoAstrodev.nome}, de ${filmeFavoritoAstrodev.ano}, dirigido por ${filmeFavoritoAstrodev.diretor} e estrelado por ${filmeFavoritoAstrodev.atores[0]}, ${filmeFavoritoAstrodev.atores[1]}, ${filmeFavoritoAstrodev.atores[2]}, ${filmeFavoritoAstrodev.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui

   const medidasRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: (lado1 * lado2)
   }

   return medidasRetangulo

}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   
   const novaPessoa = {
      ...pessoa
   }

   novaPessoa.nome = "ANÔNIMO"

   return novaPessoa

}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui

   const maioresDeVinte = arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade >= 20){
         return pessoa
      }
   })
   
   return maioresDeVinte

}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   // b) Faça uma função que retorne um **novo array** só com as crianças/adolescentes (pessoas com idade inferior a 20)

}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta(consultas) {
   // implemente sua lógica aqui
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}