// Métodos de Pesquisa de String

// Método indexOf()
// Retorna o índice(posição) da primeira ocorrência de uma string em uma string

let frase = "Meu amor";
let posicao = frase.indexOf("amor");

console.log(posicao)

//Método lastIndexOf()
// Retorna o índice da última ocorrência de um texto especificado em uma string

let texto = "Mensagem enviada"
let ultimo = texto.lastIndexOf("enviada")

console.log(ultimo)


// Método search() - SIMILAR AO lastIndexOF
// Retorna uma string por uma string (ou uma expressão regular) e retorna a posição da correspondencia

let texto2 = "A vida é bela"
let texto3 = texto2.search("vida")

console.log(texto3)

// Método includes()
// Retorna true se uma string contiver o valor especificado, caso contrário retorna false.
let jogador = "Messi é o melhor";
let include = jogador.includes("CR7") // Retorna falso

console.log(include)