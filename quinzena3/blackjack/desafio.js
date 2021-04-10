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

alert(`Bem-vindo(a) ao Blackjack do Rafa! Vamos começar!\n\nA rodada começa com você.\nSeu objetivo é atingir 21 pontos, ou o mais próximo disso.\n\nNas telas seguintes, clique em "OK" para prosseguir ou "Cancelar" para encerrar seu turno.`);

let maoUsuario = [];
let pontuacaoUsuario;

let maoComputador = [];
let pontuacaoComputador;

let verificaAA;
let seguirComprando;
let textoCartas = "";

do {
   maoUsuario = [comprarCarta(), comprarCarta()];
   pontuacaoUsuario = Number(maoUsuario[0].valor + maoUsuario[1].valor);

   maoComputador = [comprarCarta(), comprarCarta()];
   pontuacaoComputador = Number(maoComputador[0].valor + maoComputador[1].valor);

   verificaAA = Boolean((pontuacaoUsuario === 22) || (pontuacaoComputador === 22));
} while (verificaAA);


do {
   turnoUsuario();
} while (seguirComprando && pontuacaoUsuario <= 19); //Carta "A" vale 11 em naoMexer.js (menor valor de carta é 2)



if (pontuacaoUsuario > 21) {
   alert(`Fim de jogo!\n\nSuas cartas são ${mostrarCartaUsuario()}.\nSua pontuação é ${pontuacaoUsuario} e ultrapassou 21.\n\nVocê perdeu.`);
} else {
   turnoComputador(); //pontuacaoUsuario <= 21

   if ((pontuacaoUsuario > pontuacaoComputador) || (pontuacaoComputador > 21)) {
      alert(`Fim de jogo!\n\nSuas cartas são ${mostrarCartaUsuario()}.\nSua pontuação é ${pontuacaoUsuario}.\n\nAs cartas do computador são ${mostrarCartaComputador()}.\nA pontuação do computador é ${pontuacaoComputador}.\n\nVocê ganhou!`);
   } else if ((pontuacaoUsuario < pontuacaoComputador) && (pontuacaoComputador <= 21)) {
      alert(`Fim de jogo!\n\nSuas cartas são ${mostrarCartaUsuario()}.\nSua pontuação é ${pontuacaoUsuario}.\n\nAs cartas do computador são ${mostrarCartaComputador()}.\nA pontuação do computador é ${pontuacaoComputador}.\n\nO computador ganhou!`);
   } else if (pontuacaoUsuario === pontuacaoComputador) {
      alert(`Fim de jogo!\n\nSuas cartas são ${mostrarCartaUsuario()}.\nSua pontuação é ${pontuacaoUsuario}.\n\nAs cartas do computador são ${mostrarCartaComputador()}.\nA pontuação do computador é ${pontuacaoComputador}.\n\nO jogo terminou empatado!`);
   }
}


// FUNÇÕES
function turnoUsuario() {
   seguirComprando = confirm(`Suas cartas são ${mostrarCartaUsuario()} (${pontuacaoUsuario} pontos).\nA carta revelada do computador é ${maoComputador[0].texto}.\n\nDeseja comprar mais uma carta?`);

   if (seguirComprando) {
      novaCarta(maoUsuario);
      pontuacaoUsuario = atualizaPontuacao(maoUsuario, pontuacaoUsuario);
   }
}

function turnoComputador() {
   if (pontuacaoComputador < pontuacaoUsuario) {
      do {
         novaCarta(maoComputador);
         pontuacaoComputador = atualizaPontuacao(maoComputador, pontuacaoComputador);

      } while ((pontuacaoComputador < 20) && (pontuacaoComputador < pontuacaoUsuario));
   }
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
   for (let index = 0; index < maoUsuario.length; index++) {
      textoCartas += String(maoUsuario[index].texto + " ");
   }

   return textoCartas
}

function mostrarCartaComputador() {
   textoCartas = "";
   for (let index = 0; index < maoComputador.length; index++) {
      textoCartas += String(maoComputador[index].texto + " ");
   }

   return textoCartas
}