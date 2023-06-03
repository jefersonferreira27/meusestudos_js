// Robo da tabuada

// Declaração de variáveis
let valor = parseInt(prompt("Digite um número para a tabuada:"))
let resultado = ""; 

// Lógica
for(let i = 1; i <= 20; i++){
   resultado += valor + " x " + i + " = " + (valor * i) + "\n"
}

// Exibir os dados da tabuada
alert("Resultado da tabuada: \n" +  resultado)