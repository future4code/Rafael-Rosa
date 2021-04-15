function adicionarTarefa(){
    inputTarefa = document.querySelector('#tarefa').value
    selectDia = document.querySelector('#dias-semana').value
    diaEscolhido = document.querySelector(`#${selectDia}`)

    diaEscolhido.innerHTML += inputTarefa + "<br>"
    
    document.querySelector("#tarefa").value = ""
}
