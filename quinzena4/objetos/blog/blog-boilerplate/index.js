
arrayTeste = [];

function incluirPost() {

    const tituloDoPost = document.getElementById('titulo-post').value
    const autorDoPost = document.getElementById('autor-post').value
    const conteudoDoPost = document.getElementById('conteudo-post').value

    if (tituloDoPost.length > 0 && autorDoPost.length > 0 && conteudoDoPost.length > 0) {
        postAdicionado = capturarEntradasUsuario(tituloDoPost, autorDoPost, conteudoDoPost) //retorna objeto
        arrayTeste.push(postAdicionado);
        limparInputs()
        publicarPost()
    } else {
        alert('Por favor, preencha todos os campos');
        return
    }
    console.log(arrayTeste)
}

function publicarPost(){
    let publicarPost = document.getElementById('container-de-posts')
    publicarPost.innerHTML += `<div class="card-post">${arrayTeste[arrayTeste.length - 1].titulo}<br>${arrayTeste[arrayTeste.length - 1].autor}<br>${arrayTeste[arrayTeste.length - 1].conteudo}</div>`
}

function capturarEntradasUsuario(titulo, autor, conteudo) {
    const post = {
        titulo: titulo,
        autor: autor,
        conteudo: conteudo
    }
    return post
}

function limparInputs() {
    document.getElementById('titulo-post').value = ""
    document.getElementById('autor-post').value = ""
    document.getElementById('conteudo-post').value = ""
}