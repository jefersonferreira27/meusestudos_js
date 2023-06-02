// Estrutura de repetição

// // for - sintaxe
  for(inicializador; condicao; incremento;){
//     // Bloco de código a ser executado em loop
 }


// for in
// Percorre as propriedades de um objeto e um array

//objeto
  const pessoa = {
    nome:"Jeferson",
    sobrenome: "Ferreira",
 }

// // O loop for in itera sobre um objeto PESSOA
// // Cada iteração retorna uma chave(x)
// // A chave é usada para acessar o valor da chave
// // O valor da chave é pessoa[x]

for (let x in pessoa){
  console.log(pessoa[x])
}

// //array
let number = [10, 15, 20];
for(let x in number){
//     console.log(number[x])
}


// for of
// Percorre os valores de um objeto iterável

for (variavel do iteravel) {
  // Bloco de código
}

// Para cada iteração o valor da próxima propriedade é atribuido à variável

// array
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars){
  text += x;
}

// Fazendo um loop em uma string
let language = "Javascript";

let text = "";
for (let x of language) {
  text += x;
}

// while
// Percorre um bloco de código desde que uma condição especificada seja verdadeira

// Sintaxe
while (condição){
  // Bloco de código para ser executado
}

// Examplo
while (i < 10) {
  text += "O número é " + i;
  i++;
}

// do while
// Esse loop executará o bloco de código pelo menos uma vez (mesmo que a condição seja falsa)

// Sintaxe
do {
  // Bloco de código a ser executado
} while (condição);


