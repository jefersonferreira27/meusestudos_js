//Cálculo de dano

//Declaração das varíáveis
let nomeDoPersonagem = "";
let poderDeAtaque;
let nomeDoPersonagem2 = "";
let pontosDeVida;
let poderDeDefesa;
let escudo = "";

//Personagem de ataque
nomeDoPersonagem = prompt("Insira o nome do personagem 1:");
poderDeAtaque = parseInt(prompt("Insira o poder de ataque do personagem 1"));

//Personagem de defesa
nomeDoPersonagem2 = prompt("Insira o nome do personagem 2:");
pontosDeVida = parseInt(prompt("Insira os pontos de vida do personagem 2"));
poderDeDefesa = parseInt(prompt("Insira o poder de defesa do personagem 2"));
escudo = prompt("Possui escudo? S/N");

//Lógica do cálculo
if(poderDeAtaque > poderDeDefesa && escudo === "N"){
    pontosDeVida -= poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && escudo === "S"){
    pontosDeVida -= (poderDeAtaque - poderDeDefesa)/2
} else if (poderDeAtaque <= poderDeDefesa){
    pontosDeVida -=0;
}

//Exibir informações
alert(`Nome do personagem 1: ${nomeDoPersonagem}
       Poder de ataque: ${poderDeAtaque}

       Nome do personagem 2: ${nomeDoPersonagem2}
       Poder de defesa: ${poderDeDefesa}
       Pontos de vida: ${pontosDeVida}
       Escudo: ${escudo}  
`
)

