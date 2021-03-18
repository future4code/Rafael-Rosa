//Cálculo da fómula IMC= P/A*A
function calcular(p, a){
    a = a/100; //Transformar altura em cm para metro
    let result = (p/(a*a)).toFixed(2); 
    return result;
}

//Verificação na tabela padrão
function tabelaIMC(r){
    if (r < 17) { //Abaixo de 17 
        return '0';
    }else if (r < 18.5){ //Entre 17 e 18,49
        return '1'
    }else if (r < 25){ //Entre 18,5 e 24,99
        return '2'
    }else if (r < 30){ //Entre 25 e 29,99
        return '3'
    }else if (r < 35){ //Entre 30 e 34,99
        return '4'
    }else if (r < 40){ //Entre 35 e 39,99 
        return '5'
    }else{
        return '6'
    }
}

//Função para validar o preenchimento dos dados
function preencher(p, a){
    if (Number(p) > 0 && Number(a > 0)){
        return true;
    } else {
        return false;
    }
}

//Função principal IMC
function imc(){
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    let result =  document.querySelector('#resultado');

    if (preencher(peso, altura)){
        for (let i = 0; i <=6; i++){
            document.getElementById(`result_${i}`).className = '';
        }

        let valor_IMC = calcular(peso, altura);
        let consulta_tabela = tabelaIMC(valor_IMC);
        let destacar_linha = document.getElementById(`result_${consulta_tabela}`);
        
        result.innerHTML = `Resultado IMC: <strong>${valor_IMC}</strong>`;
        destacar_linha.className += 'result_calc';
    } else{
        alert('Por favor, preencha todos os campos.')
    }
}
