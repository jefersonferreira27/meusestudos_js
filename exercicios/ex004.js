// Exercicios de lógica de programação

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


