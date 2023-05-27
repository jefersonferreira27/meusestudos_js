// Array/Matriz em JS
// Variável que pode conter vários valores

//Sintaxe
const carros = ["Mercedes", "Ferrari", "Fusca"];

//Acessar os elementos da matriz
carros[0] // Mercedes
carros[1] // Ferrari
carros[2] // Fusca

//Alterando os elementos da matriz
carros[0] = "Ford KA";

//Converter a matriz numa string
console.log(carros.toString());

//Retorna o número de elementos da matriz
console.log(carros.length);

//Acessar o ultimo elemento da matriz
let newCarros = carros[carros.length - 1]
console.log(newCarros)

//Elementos de matriz em LOOP
let cars = carros.length;
for(let i = 0; i < cars; i++ ){
    console.log(carros[i])
}