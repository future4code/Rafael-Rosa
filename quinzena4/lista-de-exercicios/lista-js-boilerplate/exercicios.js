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
   // Insertion Sort - Pesquisado e adaptado para o exercício
   let indice
   let indice2
   let indiceMenorNumero
   let menorNumero

   for (indice = 0; indice < array.length; indice++) {

      indiceMenorNumero = indice;

      for (indice2 = indice + 1; indice2 < array.length; indice2++) {

         if (array[indice2] < array[indiceMenorNumero]) {
            indiceMenorNumero = indice2;
         }
      }

      menorNumero = array[indiceMenorNumero];
      array[indiceMenorNumero] = array[indice];
      array[indice] = menorNumero;
   }

   return array


// Outra lógica tentada - Não funciona com o número duplicado no array.

   // let ehMenor = Infinity
   // let indiceMenor
   // let contarVolta = 0

   // while (array.length !== novoArray.length) {
   //    contarVolta++
   //    console.log(`volta ${contarVolta}`);

   // if (novoArray.length === 0) {
   //    for (let index = 0; index < array.length; index++) {
   //       if (array[index] < ehMenor) {
   //          ehMenor = array[index]
   //          indiceMenor = index
   //       }
   //    }
   //    novoArray.push(ehMenor)
   //    // console.log("ehMenor1 " + ehMenor);
   // } else {
   //    ehMenor = Infinity
   //    for (index = 0; index < array.length; index++) {

   //       if ((array[index] > novoArray[novoArray.length - 1]) && (array[index] <= ehMenor)) {
   //          ehMenor = array[index]
   //          indiceMenor = index
   //          // console.log(`if: ehMenor: ${ehMenor} i: ${index} - num: ${array[index]} - iMenor: ${indiceMenor}`);
   //       } 
   //       // else {
   //       //    console.log(`else: i: ${index} - num: ${array[index]} - iMenor: ${indiceMenor}`);
   //       // }
   //    }
   //    novoArray.push(ehMenor)
   //    // console.log(`ehMenor${novoArray.length}  + ${ehMenor}`);
   // }
   // }

   // console.log("-------\nehMenor" + ehMenor);
   // console.log(novoArray)
   // console.log(novoArray.length - 1)

}

// Exercício 12

function filmeFavorito() {
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
   const filmeFavoritoAstrodev = filmeFavorito()

   return `Venha assistir ao filme ${filmeFavoritoAstrodev.nome}, de ${filmeFavoritoAstrodev.ano}, dirigido por ${filmeFavoritoAstrodev.diretor} e estrelado por ${filmeFavoritoAstrodev.atores[0]}, ${filmeFavoritoAstrodev.atores[1]}, ${filmeFavoritoAstrodev.atores[2]}, ${filmeFavoritoAstrodev.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
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
   const maioresDeVinte = arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade >= 20) {
         return pessoa
      }
   })

   return maioresDeVinte

}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const menoresDeVinte = arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade < 20) {
         return pessoa
      }
   })

   return menoresDeVinte

}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const valoresDuplicados = array.map((item) => {
      return item * 2
   })

   return valoresDuplicados

}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const valoresDuplicadosString = array.map((item) => {
      return String(item * 2)
   })

   return valoresDuplicadosString

}

// Exercício 17, letra C

function verificaParidade(array) {
   const paresEImpares = array.map((item) => {
      if (item % 2 === 0) {
         return String(`${item} é par`)
      }
      return String(`${item} é ímpar`)
   })

   return paresEImpares

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

function retornaPessoasAutorizadas() {
   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]

   const pessoasAutorizadas = pessoas.filter((pessoa) => {
      if ((pessoa.idade > 14) && (pessoa.idade < 60) && (pessoa.altura > 1.5)) {
         return pessoa
      }
   })

   return pessoasAutorizadas

}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]

   const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
      if ((pessoa.idade <= 14) || (pessoa.idade >= 60) || (pessoa.altura <= 1.5)) {
         return pessoa
      }
   })

   return pessoasNaoAutorizadas

}

//Exercício 19

const consultas = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorNome() { //Estava dando erro por causa do nome da função
   agendaConsultas = consultas.sort((pessoaA, pessoaB) => {
      if (pessoaA.nome > pessoaB.nome) {
         return 1
      }
      if (pessoaA.nome < pessoaB.nome) {
         return -1
      }
      return 0
   })

   return agendaConsultas


}

function formatarDataMMDDYYYY(data) {
   
   arrayDiaMesAno = data.split('/')
   arrayMesDiaAno = [arrayDiaMesAno[1], arrayDiaMesAno[0], arrayDiaMesAno[2],]

   return arrayMesDiaAno
}

function ordenaPorData() { //Estava dando erro porque dizia que a função não existia. Adicionei essa função
   ordenaConsultas = consultas.sort((dataA, dataB) => {

      const arrayData1 = formatarDataMMDDYYYY(dataA.dataDaConsulta)
      const arrayData2 = formatarDataMMDDYYYY(dataB.dataDaConsulta)

      const dataFormatada1 = new Date(arrayData1)
      const dataFormatada2 = new Date(arrayData2)

      if (dataFormatada1 > dataFormatada2) {
         return 1
      }
      if (dataFormatada1 < dataFormatada2) {
         return -1
      }
      return 0
   })

   return ordenaConsultas

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
   let debitos = 0

   contas.forEach((usuario) => {
      if (usuario.compras.length > 0) {
         for (despesaIndividual of usuario.compras) {
            debitos += despesaIndividual
         }
         usuario.saldoTotal -= debitos
         debitos = 0
      }
   })

   return contas

}