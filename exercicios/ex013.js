// Calculadora de 4 operações


//Get dos valores
let x = parseInt(prompt("Insira o primeiro valor:"));
let y  = parseInt(prompt("Insira o segundo valor:"));

//Declarar variáveis
let soma = x + y;
let menos = x - y;
let multiplicar = x * y;
let dividir = x / y;


//Operações
alert(`Resultado das operações: \n
    Soma: ${soma}
    Subtração: ${menos}
    Multiplicar: ${multiplicar}
    Dividir: ${dividir}
`
)