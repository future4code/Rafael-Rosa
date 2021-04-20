
listaDePosts = [];

function incluirPost() {
    const tituloDoPost = document.getElementById('titulo-post').value
    const autorDoPost = document.getElementById('autor-post').value
    const conteudoDoPost = document.getElementById('conteudo-post').value

    if (tituloDoPost.length > 0 && autorDoPost.length > 0 && conteudoDoPost.length > 0) {
        postAdicionado = capturarEntradasUsuario(tituloDoPost, autorDoPost, conteudoDoPost) //retorna objeto
        listaDePosts.push(postAdicionado);
        limparInputs()
        publicarPost()
    } else {
        alert('Por favor, preencha todos os campos');
        return
    }
    console.log(listaDePosts)
}

function publicarPost(){
    let containerDePosts = document.getElementById('container-de-posts')

    containerDePosts.innerHTML += `<div class="card-post"> <h1>${listaDePosts[listaDePosts.length - 1].titulo}</h1> <h5>${listaDePosts[listaDePosts.length - 1].autor}</h5> <p>${listaDePosts[listaDePosts.length - 1].conteudo}</p> </div>`
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