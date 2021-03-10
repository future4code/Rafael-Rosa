//Função para padronizar moeda com vírgula
function padronizaMoeda(valor){
    return valor.toFixed(2).replace('.',',')
}

//Função para calcular valor da corrida
function calculoTarifa(km, tempo){
    let tarifa = 2+(km*1.4)+(tempo*0.26);
    return tarifa;
}

//Função para adicionar/editar a div do resultado
function adcElemento (valor) { 
    if (document.getElementById('divResultado')){
        let divNova = document.getElementById('divResultado')
        divNova.innerHTML = 'Total: R$ ' + padronizaMoeda(valor); 
    } else{ 
        // cria um novo elemento div e dá à ele conteúdo
        let divNova = document.createElement('div'); 
        divNova.setAttribute('id','divResultado');
        divNova.innerHTML = 'Total: R$ ' + padronizaMoeda(valor); 
        // adiciona o novo elemento criado antes do botão 
        let button = document.getElementById("botaoCalcular");
        let conteudo = document.querySelector('.conteudo')
        conteudo.insertBefore(divNova, button);
    }
}



//Função "onclick" para calcular valor p/usuário
function calcular(){
    let distancia = document.getElementById('inputDistancia').value;
    let tempo = document.getElementById('inputTempo').value;

    if (distancia > 0 && tempo > 0){
        
        km = document.querySelector('#inputDistancia').value;
        tempo = document.querySelector('#inputTempo').value;

        //calcular a tarifa final
        valorCorrida = calculoTarifa(km, tempo);

        //Criar a div pra apresentar o valor final
        adcElemento(valorCorrida);

        botaoCalcular.innerHTML = 'Calcular novamente';
    }else{
        alert('Por favor, preencha os campos corretamente e tente novamente.');
    }
}