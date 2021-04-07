/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartasUsuario = [comprarCarta(), comprarCarta()];
let pontuacaoUsuario = Number(cartasUsuario[0].valor + cartasUsuario[1].valor);

let cartasComputador = [comprarCarta(), comprarCarta()];
let pontuacaoComputador = Number(cartasComputador[0].valor + cartasComputador[1].valor);

let verificaAA = Boolean((pontuacaoUsuario === 22) || (pontuacaoComputador === 22));

if (verificaAA) {
   do {
      cartasUsuario = [comprarCarta(), comprarCarta()];
      pontuacaoUsuario = Number(cartasUsuario[0].valor + cartasUsuario[1].valor);

      cartasComputador = [comprarCarta(), comprarCarta()];
      pontuacaoComputador = Number(cartasComputador[0].valor + cartasComputador[1].valor);

      verificaAA = Boolean((pontuacaoUsuario === 22) || (pontuacaoComputador === 22));
   } while (verificaAA);
}

console.log(cartasUsuario);
console.log(pontuacaoUsuario);
console.log("teste");


let textoCartas 
let comprarNovaCarta = confirm("Deseja comprar mais uma carta?");

   if (comprarNovaCarta) {
      NovaCarta(cartasUsuario);
   }


console.log(cartasUsuario);
console.log(pontuacaoUsuario);


// do {
//    let indice = 0
//    let comprarNovaCarta = usuarioNovaCarta();

//    let comprarOutra = confirm(`Suas cartas são ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}. A carta revelada do computador é ${cartasComputador[0].texto}.` + "\n" + "Deseja comprar mais uma carta?");

// } while ();

function NovaCarta(jogador) {
   jogador.push(comprarCarta())
   atualizaPontuacao()
   
   return jogador;
}

function atualizaPontuacao(){
   let ultimaPosicao = Number(cartasUsuario.length) - 1;
   pontuacaoUsuario += cartasUsuario[ultimaPosicao].valor;
}




// let comprarOutra = confirm(`Suas cartas são ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}. A carta revelada do computador é ${cartasComputador[0].texto}.` + "\n" + "Deseja comprar mais uma carta?");

//  if (comprarOutra) {
//     cartasUsuario.push(comprarCarta());
//     pontuacaoUsuario = Number(pontuacaoUsuario + cartasUsuario[2].valor)
//     if (pontuacaoUsuario <= 21) {
//        comprarOutra = confirm(`Suas cartas são ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto} e  ${cartasUsuario[2].texto}. A carta revelada do computador é ${cartasComputador[0].texto}.` + "\n" + "Deseja comprar mais uma carta?");
//     } else {
//        alert(`Você perdeu! sua pontuação de ${pontuacaoUsuario} extrapolou 21.`)
//     }

//  }

//  console.log(cartasUsuario)





//  function computadorNovaCarta() {
//    cartasComputador.push(comprarCarta())
// }