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
let cartasComputador = [comprarCarta(), comprarCarta()];

console.log(cartasUsuario[0].texto.slice(0, 1))
console.log(cartasUsuario[1].texto.slice(0, 1))
console.log(cartasComputador[0].texto.slice(0, 1))
console.log(cartasComputador[1].texto.slice(0, 1))

verificaAA = Boolean(cartasUsuario[0].texto.slice(0, 1) == "A" && cartasUsuario[1].texto.slice(0, 1) == "A") || Boolean(cartasComputador[0].texto.slice(0, 1) == "A" && cartasComputador[1].texto.slice(0, 1) == "A");

console.log(verificaAA);

if (verificaAA){
   cartasUsuario = [comprarCarta(), comprarCarta()];
   cartasComputador = [comprarCarta(), comprarCarta()];
}