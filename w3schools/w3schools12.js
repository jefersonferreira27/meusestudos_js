// Métodos de Array/Matriz

//toString
//Converte a matriz em uma string separada por virgula
let frutas = ["Uva", "Maça","Jaca"]
console.log(frutas.toString())

//join
//Converte em string e possibilita escolher o tipo de separador
console.log(frutas.join(" - "))
console.log(frutas.join(" * "))
console.log(frutas.join(" | "))

//pop
//Remove o último elemento da matriz
let ultimoElemento = frutas.pop();
console.log(frutas)
console.log(ultimoElemento)

//push
//Adiciona um elemento no final da matriz
console.log(frutas)
frutas.push("Pera")
console.log(frutas)

//shift
//Remove o primeiro elemento da matriz
console.log(frutas)
frutas.shift()
console.log(frutas)

//unshift
//Adiciona um novo elemento no inicio da matriz
console.log(frutas)
frutas.unshift("Goiaba")
console.log(frutas)

//concat
//Concatenar matrizes
console.log(frutas)
let letras = ['A', 'B', 'C']
let arrays = frutas.concat(letras)
console.log(arrays)

//sort
//Classifica uma matriz em ordem alfabetica
console.log(arrays.sort())

//reverse
//Inverte os elementos da matriz
console.log(arrays.reverse())