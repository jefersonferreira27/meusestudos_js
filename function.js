// Função e os seus tipos
function multiplicarTresNumeros(a,b,c){
  return a*b*c;
}

// Chamada através do console.log
console.log(multiplicarTresNumeros(5,10,15));

// Enviar o return para uma variável e depois exibir no console.log
const mult = multiplicarTresNumeros(5,10,15);
console.log("O valor de mult é " + mult);

// Verificar se pode dirigir 
function podeDirigir(idade, cnh){
  if(idade>=18 && cnh === true){
    console.log("Pode dirigir!");
  } else {
    console.log("Não pode dirigir!");
  }
}

//Chamada da função

//Não pode dirigir
console.log(podeDirigir(19, true));
// Pode dirigir
console.log(podeDirigir(25, true));


// A FUNÇÂO MAIS USADA NA ATUALIDADE
// ARROW FUNCTIONS(Padrao)

let time = () => {
  // Trecho do codigo
};

// Se for só um parametro e a expressao for pequena pode ser feita em uma só linha
let time = n => n * n;

