

function imprimir(){
    const arrayTeste = [];

    const entradasUsuario = {
        titulo: document.getElementById('titulo-post').value,
        autor: document.getElementById('autor-post').value,
        conteudo: document.getElementById('conteudo-post').value
    }

    arrayTeste.push(entradasUsuario);

    document.getElementById('titulo-post').value = ""
    document.getElementById('autor-post').value = ""
    document.getElementById('conteudo-post').value = ""

    let publicarPost = document.getElementById('container-de-posts')
    publicarPost.innerHTML = `<div class="card-post">${arrayTeste[0].titulo}<br>${arrayTeste[0].autor}<br>${arrayTeste[0].conteudo}</div>`


    console.log(entradasUsuario)
    console.log(arrayTeste)
}