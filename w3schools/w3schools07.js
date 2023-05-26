// Métodos de string em Javascript
//Comprimento da string
let hello = 'hello'
let tamanho = hello.length;
console.log(tamanho) // Tamanho 5//

/* Extraindo partes da string 
- Slice (start, end) 
Extrai um parte de uma string e retorna a PARTE EXTRAIDA em uma NOVA STRING 
O método leva 2 parametros (A POSICAO INICIAL E A POSICAO FINAL) 
Se um um parametro for NEGATIVO, a posição é contada a partir do FINAL DA STRING
*/

// Exemplo SLICE
let futebol = "Messi, Cristiano Ronaldo é um lixo"
let parte = futebol.slice(7,34)
console.log(parte) //Cristiano Ronaldo é um lixo

/*                
- Replace (Método substitui um valor especificado por outro valor em uma nova string) 
O método substitui a PRIMEIRA correspondencia 
*/
let soccer = "Cristiano é o melhor da historia"
let replace = soccer.replace("Cristiano", "Messi")
console.log(replace);


/* Converter para MAIUSCULA E MINUSCULA
toUpperCase(); - Converter para maiuscula
toLowerCase(); - Converter para minuscula
*/

//Maiuscula
let texto = "correr";
let maiuscula = texto.toUpperCase();

console.log(maiuscula)

//Minuscula
let frase = "UMA FRASE MUDA O FIM DO FILME";
let minuscula = frase.toLowerCase();

console.log(minuscula)

// Concatenar strings
let text1 = "hello";
let text2 = "world";

let tex3 = text1.concat("", text2);


// Remover espaços em branco
let frase = "         História das tecnologias                  ";
let fras2 = frase.trim();


// Preenche uma string desde o inicio
let text = "5";
// Preenche a string com "7" até atingir o comprimento 10
let text2 = text.padStart(10,"7")








