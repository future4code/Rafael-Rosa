function tabuada(){
    let num = document.getElementById('txtnum');
    let lista = document.getElementById('tabuada');

    if (num.value.length == 0) {
        alert(`Por favor, digite um número.`);
    } else {
        num = Number(num.value);
        lista.innerHTML = '';
        
        let resultado = document.createElement('option');
        resultado.text = "Confira o resultado aqui.";
        resultado.selected = "selected";
        lista.appendChild(resultado);
        
        for(let c=1; c<=100; c++){
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num*c}`;
            item.value = `tab${c}`;
            if(c%2==0){
                item.className = 'tabpar'
            }else{
                item.className = 'tabimpar'
            }
            lista.appendChild(item);
        }
    }
    


}