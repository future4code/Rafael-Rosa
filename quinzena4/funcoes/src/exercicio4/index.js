// a.
function sobreUsuario() {
    let nome = 'Rafael'
    let idade = '30'
    let cidade = 'Porto Alegre'
    let estudante = 'sou estudante'

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}.`)
}

sobreUsuario()

// b.
function sobreUsuarioComParametros(nome, idade, cidade, estudante) {
    if (estudante) {
        estudante = 'sou estudante'
    }else {
        estudante = 'não sou estudante'
    }

    return String(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}.`)
}

sobreUsuarioComParametros("Rafael", 30, "Porto Alegre", true)

