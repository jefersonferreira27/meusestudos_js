//Métodos matemáticos/Math

//Sintaxe
Math.propriedade

//Transformar número para inteiro

//Math.round
//Retorna valor arredondado para o inteiro mais próximo
Math.round(10.8) // Retorna 11

//Math.ceil
//Retorna valor arredondado para o número inteiro mais proximo
Math.ceil(4.9) // Retorna 5

//Math.floor
//Retorna valor arredondado para baixo para o inteiro mais próximo
Math.floor(4.9) // Retorna 4

//Math.trunc
//Retorna a parte inteiro do valor
Math.trunc(4.6) // Retorna 4


//Math.sqrt
//Retorna a raiz quadrada do valor
Math.sqrt(64) // Retorna 8

//Math.min
//Retorna o valor mais baixo em uma lista 
Math.min(0,10,100,80,95) // Retorna 0


//Math.max
//Retorna o valor mais alto em uma lista
Math.max(0,10,100,80,95) // Retorna 100

//Math.random
//Retorna um número aleatório entre 0 e 1

//Combinação entre math.random e math.floor
Math.floor(Math.random()*10) // Retorna um número aleatório de 0 a 9
Math.floor(Math.random()*100) // Retorna um número aleatório de 0 a 99

//Um função aleatória ADEQUADA
function numberRandom(min, max){
    return Math.floor(Math.random() * (min - max) + max) //Retorna um número aleatório de (min) a (max)
}

