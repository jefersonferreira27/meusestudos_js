// Função em JS
// É um bloco de código projetado para executar uma tarefa específica.
// É executada quando "algo" a invoca/chama.

// Sintaxe da função
function myFunction (parametros) {}

// Invocação da função
// O código dentro da função será executado quando "algo" chamar a função:
/* - Quando ocorre um evento (quando um usuário clica em um botão)
   - Quando é invocado (chamado) a partir do código JS
   - Automaticamente (auto-invocado)
*/

// Função return (retorno)
// Quando o JS atinge uma return instrução, a função para de ser executada.
// Se a função foi invocada a partir de uma instrução, o JS "retornará" para executar o código após a instrução invocada.
// As funções geralmente calculam um valor de retorno . O valor de retorno é "retornado" de volta ao "chamador"

// Função é chamada, o valor será retornada na variavel
let x = myFunction (4,3);

function myFunction (a,b) {
  // Função retorna o resultado de A e B
  return a * b;
}

// Ex.: Converter Fahrenheit para Celsius
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// O valor da função atribuida a variavel
let value = toCelsius(77);

// Funções usadas como valores de variáveis
// As funções podem ser usadas da mesma forma que você usa variáveis, em todos os tipos de fórmulas, atribuições e cálculos.

// Ex.: 

// Em vez de usar uma variável para armazenar o valor de retorno de uma função:
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

// Pode utilizar a função diretamente, como um valor variável:
let text = "A temperatura is " + toCelsius(77) + " Celsius";

// Variáveis locais
// As variáveis dentro de uma função tornam-se LOCAL para a função

