
const listaDePosts = [];

//Alternativa ao desafio 2
function cadastrarPosts(){
    let cadastro = document.getElementsByTagName('body')
    
    cadastro[0].innerHTML = `<button onclick="cadastrarPosts()">Cadastrar Post</button>
    <button onclick="verPosts()">Ver Posts</button>
    <section id="formulario">
    <label for="titulo-post">Título:</label>
    <input type="text" id="titulo-post" maxlength="100">

    <label for="autor-post">Autor:</label>
    <input type="text" id="autor-post">

    <label for="conteudo-post">Conteúdo:</label>
    <textarea id="conteudo-post" cols="30" rows="10" maxlength="500"></textarea>
    
    <button onclick="incluirPost()">Criar Post</button>
</section>`

console.log(cadastro);
}

function verPosts(){

    if (listaDePosts.length === 0){
        alert("Ainda não existem posts cadastrados.")
    }

    let blog = document.getElementsByTagName('body')
    
    blog[0].innerHTML = `<button onclick="cadastrarPosts()">Cadastrar Post</button>
    <button onclick="verPosts()">Ver Posts</button>
    <section id="container-de-posts">
        
    </section>`

    publicarBlog()
}

function publicarBlog(){
    let containerDePosts = document.getElementById('container-de-posts')

    for (post in listaDePosts){
        containerDePosts.innerHTML += `<div class="card-post"> <h1>${listaDePosts[post].titulo}</h1> <h5>${listaDePosts[post].autor}</h5> <p>${listaDePosts[post].conteudo}</p> </div>`
    }
}

//Resolução original ao exercício
function incluirPost() {
    const tituloDoPost = document.getElementById('titulo-post').value
    const autorDoPost = document.getElementById('autor-post').value
    const conteudoDoPost = document.getElementById('conteudo-post').value

    if (tituloDoPost.length > 0 && autorDoPost.length > 0 && conteudoDoPost.length > 0) {
        postAdicionado = capturarEntradasUsuario(tituloDoPost, autorDoPost, conteudoDoPost) //retorna objeto
        listaDePosts.push(postAdicionado);
        limparInputs()
        // publicarPost()
    } else {
        alert('Por favor, preencha todos os campos');
        return
    }
    console.log(listaDePosts)
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

//Não está sendo utilizada - Resolução original do exercício
function publicarPost(){
    let containerDePosts = document.getElementById('container-de-posts')

    containerDePosts.innerHTML += `<div class="card-post"> <h1>${listaDePosts[listaDePosts.length - 1].titulo}</h1> <h5>${listaDePosts[listaDePosts.length - 1].autor}</h5> <p>${listaDePosts[listaDePosts.length - 1].conteudo}</p> </div>`
}