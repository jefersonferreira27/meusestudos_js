// Escreva um programa que receba um número como entrada e exiba todos os números primos menores ou iguais a ele.
function numeroPrimo(number){
    if(number % number === 0 && number % 1 === 0){
        return `${number} é um número primo!`
    } else{
        return `${number} não é um número primo!`
    }
}

numeroPrimo(2);