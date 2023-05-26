// Verificar se uma senha atende aos criterios de segurança, como ter no mínimo 8 caracteres, incluindo letras maisculas e simbolo especial
function verificarSenha(senha){
    let possuiLetra = /[A/Z]/.test(senha) // - Verifica se tem uma letra MAIUSCULA
    let possuiNumero = /[0-9]/.test(senha) // - Verifica se tem um NUMERO
    let possuiSimbolo = /\W|_/.test(senha) // - Verifica se tem simbolo especial
    if(senha.length>= 8 && possuiLetra && possuiNumero && possuiSimbolo){
        console.log("Senha forte")
    } else {
        console.log("Senha fraca")
    }
}

verificarSenha("caixadelapis28A@") 