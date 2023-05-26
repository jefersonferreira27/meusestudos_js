// !! Uma boa prática em JS é declarar TODAS as variaveis no inicio do script
// Cifrão é considerado uma letra em JS e pode ser declarado no inicio de uma variavel
// Variavel let tem escopo de BLOCO e NÂO pode ser redeclarada

//Operadores de comparação em JS
== igual
=== igual no valor e tipo de dado
!= diferente
!== não é igual no valor ou no tipo
> maior que
< menor que
>= maior ou igual que
<= menor ou igual que
? operador ternaário

// Operadores lógicos
&& - E
|| - Ou
! - Não

//Operadores aritméticos JS
+ Adição
- Subtrção
* Multiplicação
** Exponenciação
/ Divisão
% Resto da divisão
++ Icremento
-- Decremento

//Operadores de atribuição
= atribuir
+= somar e atribuir
-= subtrair e atribuir
*= multiplicar e atribuir
/= dividir e atribuir
%= resto da divisão e atribuir
**= exponeciar e atribuir

// Tipos de dados
String
Número
Bigint
Booleano
Indefinido
Nulo
Simbolo
Objeto

// Tipos de dados do objeto
Um objeto
Uma matriz
Uma data

// Objetos em JS
São escritos com chaves {}
As propriedades do objeto são escritas como pares nome: valor, separados por vírgulas.

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Arrays em JS
São escritos com colchetes []
Os itens da matriz são separados por virgulas 

const cars = ["Saab", "Volvo", "BMW"];


// Notação exponecial - Números extragrandes ou extrapequenos podem ser escritos em notação cientifica(exponecial)
let y = 123e5;  //12300000
let z = 123e-5; // 0.00123

// Bigint - numero muito EXTENSO
let x = BigInt("1234567894548847755645546464")

// Operador typeof
typeof "" // Retorna string
Operador retorna o tipo de variável ou expressão


