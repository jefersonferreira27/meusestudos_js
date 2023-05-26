// Função recebe string e retorna o tamaho
function string (tamanho){
    return tamanho.length;
}

//Chamada da função
console.log(string("Hoje preciso de voce. Preciso da sua companhia, nem que seja só por um segundo"))
// Tamanho 78

// Função recebe duas strings e concatena
function strings (a,b){
    return a+ " " + b
}

// Chamada da função
console.log(strings("Messi é o primeiro", "e Cristiano o segundo"))

//Função que recebe uma string, um indice inicial e final com parametros
function texto(string,a,b){
    return string.slice(a,b)
}

//Chamada da função
console.log(texto("Cristiano Messi é o melhor da historia", 10,39 ))

//Função para transformar tudo em maiusculo
function maiuscula(texto){
    return texto.toUpperCase()
}

//Chamada da função
console.log(maiuscula("jefinho"))


// Função para transformar tudo em minuscula
function minuscula(texto){
    return texto.toLowerCase()
}

//Chamada da função
console.log(minuscula("FUTEBOL É BOM DEMAIS"))


// Função para remover os espaços em branco de uma string
function espaco (texto){
    return texto.trim()
}

//Chamada da funcao
console.log(espaco("             Copa do Mundo                     "))
