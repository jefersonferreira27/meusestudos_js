// Datas em JS
// O obejto DATA é estático. Não é um relógio em funcionamento.
// JS conta meses DE 0 a 11
//Especificar um mês maior que 11 não resultará em erro, mas adicionará o estouro ao próximo ano
//Especificar um dia maior que o máximo não resultará em erro, mas adicionará o estouro ao próximo mês:
const data = new Date();
console.log(data)

//Criando objetos de datas
//São criados com o new date(). Existem 9 MANEIRAS 

new date()

//Cria um objeto de data a partir de uma string de data
new date("2023-05-28")

//Cria um objeto de data com ano e mes
new date (2023, 05)

//Cria um objeto de data com ano, mes e dia
new date (2023, 05, 28)

//Cria um objeto de data com ano, mes, dia e hora
new date (2023, 05, 28, 11)

//Cria um objeto de data com ano, mes, dia, hora e minutos
new date (2023, 05, 28, 11, 39)

//Cria um objeto de data com ano, mes, dia, hora, minutos e segundos
new date (2023, 05, 28, 11, 39, 20)

//Cria um objeto de data com ano, mes, dia, hora, minutos, segundos e miliegundos
new date (2023, 05, 28, 11, 39, 20, 44)

//Se declarar apenas UM parametro, será tratado como milisegundos
new date(milliseconds)



//Método para converter date em string mais legivel
const d = new Date();
console.log(d.toDateString());

