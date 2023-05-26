// Escreva um programa que receba um número como entrada e exiba se é primo ou não
function numeroPrimo(number){
    if(number % number === 0 && number % 1 === 0 && number>1){
        console.log(`${number} é um número primo!`) 
    } else{
        console.log(`${number} não é um número primo!`)
    }
}

//Chamada da função
numeroPrimo(5);