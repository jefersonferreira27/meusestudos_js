//Verificar se um número é positivo e par
function numeroPositivo(number){
    if(number>0 && number % 2 === 0){
        console.log (`${number} é positivo e par!`)
    } else if (number===0 || number % 2 === 1){
        console.log (`${number} não é positivo ou par!`)
    }
}

//Chamada da função
numeroPositivo(54);