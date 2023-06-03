// Teste de velocidade

//Declaração de variáveis
let nome = "";
let nome2 = ""
let velocidade;
let velocidade2;

// Dados
nome = prompt("Insira o nome do veiculo 1");
velocidade = parseInt(prompt("Insira a velocidade do veículo 1 "));

nome2 = prompt("Insira o nome do veiculo 2");
velocidade2 = parseInt(prompt("Insira a velocidade do veículo 2"));

if(velocidade>velocidade2){
    alert(`${nome} é mais rápido! Atingiu ${velocidade} km/h`)
} else if (velocidade2>velocidade){
    alert(`${nome2} é mais rápido! Atingiu ${velocidade2} km/h`)
} else {
    alert("A velocidade dos 2 veículos são equivalentes")
}