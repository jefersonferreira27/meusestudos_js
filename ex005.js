// Exercicios de lógica de programação

// Verificar se o ano é bissexto
function anoBissexto(anoEscolhido){
    if(anoEscolhido % 4 === 0 && anoEscolhido % 100 !==0 || anoEscolhido % 400 === 0){
        return (anoEscolhido + " é um ano bissexto!")
    } else {
        return (anoEscolhido + " não é um ano bissexto!")
    }
}

// Chamada da função
console.log(anoBissexto(2023))
console.log(anoBissexto(2024))

