// Modelos de string ou sintaxe de back-tics
// Utiliza os acentos graves (``) em vez das aspas simples e duplas
// Exemplo
let texto = `Olá mundo`;

// Com templates literais é possível usar aspas dentro de uma string
let texto1 = `A vida é muito boa, ou "excelente"`

// Templates literais permite strings de várias linhas
let texto2 = `
amar
errar
falhar
`;

//Interpolação - maneira fácil de ajuntar variaveis e expressoes em strings
let denso = `A vida como dever ser ${texto}`;
console.log(denso)