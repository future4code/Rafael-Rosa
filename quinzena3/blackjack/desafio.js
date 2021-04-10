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

let maoUsuario = [];
let pontuacaoUsuario;

let maoComputador = [];
let pontuacaoComputador;

let verificaAA;

do {
   maoUsuario = [comprarCarta(), comprarCarta()];
   pontuacaoUsuario = Number(maoUsuario[0].valor + maoUsuario[1].valor);

   maoComputador = [comprarCarta(), comprarCarta()];
   pontuacaoComputador = Number(maoComputador[0].valor + maoComputador[1].valor);

   verificaAA = Boolean((pontuacaoUsuario === 22) || (pontuacaoComputador === 22));
} while (verificaAA);

// console.log(maoUsuario);
// console.log("pontuacaoUsuario: " + pontuacaoUsuario);
// console.log("teste");

let seguirComprando;
let textoCartas = "";

do {
   turnoUsuario();
} while (seguirComprando && pontuacaoUsuario < 20); //Carta "A" vale 11 em naoMexer.js (menor valor de carta é 2)
// SAIR AO !seguirComprando ou pontuacaoUsuario 20 ou +

console.log(maoUsuario);
console.log("pontuacaoUsuario: " + pontuacaoUsuario);
console.log("pontuacaoComputador: " + pontuacaoComputador);

if (pontuacaoUsuario > 21) {
   alert(`Suas cartas são ${mostrarCartaUsuario()}.\nSua pontuação é ${pontuacaoUsuario} e ultrapassou 21.\nVocê perdeu.`);
} else {
   turnoComputador(); //pontuacaoUsuario <= 21

   if ((pontuacaoUsuario > pontuacaoComputador) || (pontuacaoComputador > 21)) {
      alert(`Suas cartas são ${mostrarCartaUsuario()}.\nSua pontuação é ${pontuacaoUsuario}.\nAs cartas do computador são ${mostrarCartaComputador()}.\nA pontuação do computador é ${pontuacaoComputador}.\nVocê ganhou!`);
   } else if ((pontuacaoUsuario < pontuacaoComputador) && (pontuacaoComputador <= 21)) {
      alert(`Suas cartas são ${mostrarCartaUsuario()}.\nSua pontuação é ${pontuacaoUsuario}.\nAs cartas do computador são ${mostrarCartaComputador()}.\nA pontuação do computador é ${pontuacaoComputador}.\nO computador ganhou!`);
   } else if (pontuacaoUsuario === pontuacaoComputador) {
      alert(`Suas cartas são ${mostrarCartaUsuario()}.\nSua pontuação é ${pontuacaoUsuario}.\nAs cartas do computador são ${mostrarCartaComputador()}.\nA pontuação do computador é ${pontuacaoComputador}.\nO jogo terminou empatado!`);
   }
}

console.log(maoComputador);
console.log("pontuacaoComputador: " + pontuacaoComputador);


// TURNO USUÁRIO
function turnoUsuario() {
   console.log("turnoUsuario");
   seguirComprando = confirm(`Suas cartas são ${mostrarCartaUsuario()} (${pontuacaoUsuario} pontos).\nA carta revelada do computador é ${maoComputador[0].texto}.\n\nDeseja comprar mais uma carta?`);

   if (seguirComprando) {
      novaCarta(maoUsuario);
      pontuacaoUsuario = atualizaPontuacao(maoUsuario, pontuacaoUsuario);
   }
}

// TURNO COMPUTADOR
function turnoComputador() {
   console.log("turnoComputador");
   //pontuacaoUsuario <= 21
   //!seguirComprando
   if (pontuacaoComputador < pontuacaoUsuario) {
      do {
         novaCarta(maoComputador);
         pontuacaoComputador = atualizaPontuacao(maoComputador, pontuacaoComputador);

         console.log("maoComputador: ");
         console.log(maoComputador);
         console.log("pontuacaoUsuario: " + pontuacaoUsuario);
         console.log("pontuacaoComputador: " + pontuacaoComputador);
      } while ((pontuacaoComputador < 20) && (pontuacaoComputador < pontuacaoUsuario));
   }
   //pontuacaoComputador >= 20
   //pontuacaoComputador >= pontuacaoUsuario

}

function novaCarta(maoJogador) {
   maoJogador.push(comprarCarta())

   return maoJogador;
}

function atualizaPontuacao(maoJogador, pontuacao) {
   let ultimaPosicao = Number(maoJogador.length) - 1;
   pontuacao += maoJogador[ultimaPosicao].valor;

   return pontuacao;
}

function mostrarCartaUsuario() {
   textoCartas = "";
   // console.log(textoCartas)
   for (let index = 0; index < maoUsuario.length; index++) {
      textoCartas += String(maoUsuario[index].texto + " ");
   }
   // console.log(textoCartas);
   return textoCartas
}

function mostrarCartaComputador() {
   textoCartas = "";
   // console.log(textoCartas)
   for (let index = 0; index < maoComputador.length; index++) {
      textoCartas += String(maoComputador[index].texto + " ");
   }
   // console.log(textoCartas);
   return textoCartas
}