function sortear(){
    let numerocerto = getRandomIntInclusive(1,10);
    let numero = Number(inputNumero.value);
    
    if (numero > 0 && numero <=10){
        paragrafoResultado.innerHTML = `Seu número da sorte é: ${numero}<br>`;
        
        if (numero == numerocerto){
            paragrafoResultado.innerHTML += '<br>Parabéns! Você ganhou o sorteio!';
        } else{
            paragrafoResultado.innerHTML += `<br>Não foi dessa vez :( <br><br> O número certo era ${numerocerto}. Tente novamente.`;
        }
        botaoSorteio.innerHTML = "Tentar novamente"
    } else{
        paragrafoResultado.innerHTML = 'Por favor, informe seu número da sorte, entre 1 e 10, e tente novamente.';
    }
}

//Gerando um número inteiro aleatório entre dois valores, inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
