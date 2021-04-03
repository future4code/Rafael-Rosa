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

let verificaAA = Boolean(cartasUsuario[0].texto.slice(0, 1) == "A" && cartasUsuario[1].texto.slice(0, 1) == "A") || Boolean(cartasComputador[0].texto.slice(0, 1) == "A" && cartasComputador[1].texto.slice(0, 1) == "A");

console.log(verificaAA)

if (verificaAA){
   cartasUsuario = [comprarCarta(), comprarCarta()];
   cartasComputador = [comprarCarta(), comprarCarta()];
}

let comprarOutra = confirm(`Suas cartas são ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}. A carta revelada do computador é ${cartasComputador[0].texto}.` + "\n" + "Deseja comprar mais uma carta?");

if (comprarOutra) {
   cartasUsuario.push(comprarCarta());
   pontuacaoUsuario = Number(pontuacaoUsuario + cartasUsuario[2].valor)
   if (pontuacaoUsuario <= 21) {
      comprarOutra = confirm(`Suas cartas são ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto} e  ${cartasUsuario[2].texto}. A carta revelada do computador é ${cartasComputador[0].texto}.` + "\n" + "Deseja comprar mais uma carta?");
   } else {
      alert(`Você perdeu! sua pontuação de ${pontuacaoUsuario} extrapolou 21.`)  
   }

} 

console.log(cartasUsuario)
