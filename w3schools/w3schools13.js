//Iteração em JS - forEach
const valores = [5, 10, 15, 20, 25]
valores.forEach(function(valores){ //Com função anonima
    console.log(valores)
})

const jogadores1 = ["Messi", "Pelé", "Maradona"] //Com função de seta
jogadores.forEach( jogadores => console.log(jogadores))



//Map
//Cria uma nova matriz executando uma função em cada elemento da matriz
valores.map(valores => console.log(valores) ) 

//Mapear uma matriz de números para o seu dobro
const numeros = [1,2,3,4,5];
const dobroNumeros = numeros.map(function(numero){
    return numero * 2;  
})

console.log(dobroNumeros);

//Mapear um array de palavras
const palavras = ["CSS", "HTML", "Javascript"];
const tamanho = palavras.map(function(palavra){
    return palavra.length
})

console.log(tamanho);

//Mapear um matriz de objetos para uma matriz com valores de uma determinada propriedade
const jogadores = [{
    time: "PSG",
    nome: "Messi",
    numero: 30,
} ]

const objeto = jogadores.map(function(jogador){
    return jogador.time;
})

console.log(objeto);


//Mapear uma matriz de palavras para converter em maiusculas
const frutas = ["uva", "jaca", "pera"];
const maiuscula = frutas.map(function(minuscula){
    return minuscula.toUpperCase();
})

console.log(maiuscula)