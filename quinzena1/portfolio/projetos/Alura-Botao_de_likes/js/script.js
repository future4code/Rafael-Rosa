//Define números aleatórios de curtidas para demonstração
var contadorFB = Math.floor(Math.random() * 10);
var contadorIG = Math.floor(Math.random() * 10);

//Seleciona os botões no HTML
var botaoFB = document.getElementById('botaofb');
var botaoIG = document.getElementById('botaoig');

//Inicia com o texto na tela
escreveFB(contadorFB);
escreveIG(contadorIG);

//inicializa os controles
var controleFB = 0;
var controleIG = 0;

//Funções para escrever em tela os resultados
function escreveFB(contadorFB){
    botaoFB.innerHTML = contadorFB + ` Like${texto(contadorFB)}`;
}
function escreveIG(contadorIG){
    botaoIG.innerHTML = contadorIG + ` Curtida${texto(contadorIG)}`;
}

//Função condicional para singular ou plural
function texto(contador){
    if (contador > 1 || contador == 0){
        return 's';
    }else{
        return '';
    }
}

//Funções principais dos botões
function likeFB(){
    //se for o primeiro clique, vai curtir (add 1 ao total)
    if (controleFB == 0){
        contadorFB += 1;
        escreveFB(contadorFB);
        controleFB++;
    }else{
    //se for o segundo clique, vai descurtir (diminuir 1 ao total)
        contadorFB -= 1;
        escreveFB(contadorFB);
        controleFB--;
    }    
}

function likeIG(){
    //se for o primeiro clique, vai curtir (add 1 ao total)
    if (controleIG == 0){
        contadorIG += 1;
        escreveIG(contadorIG);
        controleIG++;
    }else{
    //se for o segundo clique, vai descurtir (diminuir 1 ao total)
        contadorIG -= 1;
        escreveIG(contadorIG);
        controleIG--;
    }    
}