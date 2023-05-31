// Métodos de dada

//setFullYear
//Método define o ano de um objeto de data
const d = new Date();
d.setFullYear(2023);

//Método pode, opcionalmente, definir o mês e dia
const d = new Date();
d.setFullYear(2023,5,31);

//setMonth
//Método define o mês de um objeto de data
const d = new Date();
d.setMonth(5);

//setDate
//Método define o dia de um objeto de data
const d = new Date();
d.setDate(31);

//setMinutes
//Método define os minutos de um objeto de data
const d = new Date();
d.setMinutes(47);

//setSeconds
//Método define os segundos de um objeto de data
const d = new Date();
d.setSeconds(15);

//Comparação entre datas
let texto = "";
const hoje = new Date();
const algumDia = nwe Date();
algumDia.setFullYear(2023, 0, 14);

if(algumDia>hoje){
  text = "Hoje é antes de 14 de Janeiro 2023";
} else{
  text = "Hoje é depois de 14 de Janeiro de 2023"
}
