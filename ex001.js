// Exercicios de lógica de programação

// Exibir os números de 1 a 10 na tela 
let i = 1
for(i; i<= 10; ){
    console.log(i)
    i++
}

// Calcular a média de três notas e exibir a nota
let nota1 = 6.5
let nota2 = 8
let nota3 = 9.25

let media = (nota1 + nota2 + nota3)/ 3
console.log(media);

// Verificar se um número é par ou ímpar
let num = 51; // Escolha um número
if(num % 2 == 1){
    console.log("Número ímpar: " + num)
} else if(num % 2 == 0){
    console.log("Número par: " + num)
}

// Programa que recebe 3 números e retorna o maior
function maiorNumero(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return (num1 + " é o maior número!")
    } else if(num2>num1 && num2>num3){
        return (num2 + " é o maior número!")
    } else if(num3>num1 && num3>num2){
        return (num3 + " é o maior número!")
    }
}
// Chamada da função
console.log(maiorNumero(10,15,30));


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

