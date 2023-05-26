// Loops em Arrays

let times = ["Bahia", "Goiás", "Avai"];
for(let i = 0; i <= times.length; i++){
  console.log(times[i]);
}

// Calcular todos os valores do array
let valores = [25, 50, 25];
let soma = 0;
for(let i = 0; i < valores.length; i++){
  soma += valores[i];
}

// Exibindo resultado
console.log(soma);

// Exibir o menor nome em um array
let nomes = ["Jeferson", "Edson", "Simone"];
let menorNome = nomes[0];
for(let i = 0; i < nomes.length; i++){
  if(nomes[i]> menorNome){
    menorNome = array[i];
  }
}

