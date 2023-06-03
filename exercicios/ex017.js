// Visitando novas cidades

// Declaração de variáveis
let nomeDoTurista = "";
let cidade = "";
let cidades = "";
let nomeDaCidade = [];
let contagem = 0;

// Inserção de dados
nomeDoTurista = prompt("Turista, informe seu nome:");
cidade = prompt("Você já visitou alguma cidade? Sim/Não");

// Lógica e exibição
while (cidade === "Sim") {
    nomeDaCidade = prompt("Qual o nome da cidade");
    // Concatena a variável cidades cada cidade visitada
    cidades += " - " + nomeDaCidade + "\n";
    cidade = prompt("Você já visitou outra cidade? Sim/Não");
    // Incrementa a cada vez que o usuário digitar sim
    contagem ++;
    
    if (cidade === "Não") {
        alert(
        "Turista:" + nomeDoTurista +
        "\nQuantidade de cidades visitadas: " + contagem +
        "\nCidades visitadas: \n" + cidades   
        )
    }
}