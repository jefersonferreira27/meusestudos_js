// Métodos númericos em JS

// Método toString()
//Retorna um número como uma string

let numero = 2023;
let numero2 = numero.toString();

console.log(numero2)
console.log(typeof numero2);

// Método toFixed()
// Retorna uma string, com o número escrito com um número especificado de casas decimais

let number = 9.2578655;

//Zero casas decimais
console.log(number.toFixed(0))

//Duas casas decimais
console.log(number.toFixed(2))

//Converter variáveis em números

//Existem 3 métodos para converter
/* number() - Retorna um número convertido
   parseFloat() - Retorna um número de ponto flutuante
   parseInt() - Retorna um número inteiro
*/

