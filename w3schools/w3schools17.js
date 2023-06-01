// Declarações condicionais
// if, else, else if, switch

//if
//Especificar um bloco de código a ser executado, se uma condição especificada for verdadeira
if(condição){
  //Bloco de código se a condição for verdadeira
}
 
//else
//Especificar um bloco de código a ser executado, se a mesma condição for falsa
if(condição){
  //Bloco de código se a condição for verdadeira
} else {
  //Bloco de código se a condição for verdadeira
}

//else if
//Especificar uma nova condição para testar, se a primeira condição for falsa
if(condição){
  //Bloco de código se a condição for verdadeira
} else if(condicao2){
  //Bloco de código se a condição for false e a condicao2 for verdadeira
}


//switch
//Especificar muitos blocos alternativos de código a serem executados
//Quando atinge o break, ele sai do bloco switch
//Default - caso caso nenhum bloco seja correspondido, a op

/* Como funciona?
  - A expressão switch é avaliada uma vez
  - O valor da expressão é comparada com os valores de cada caso
  - Se houver uma correspondência, o bloco de código associado será executado
  - Se não houver correspondência, o bloco de código padrão será executado.
*/

switch(expressão){
  case 1:
    //bloco de código
    break;
  case 2:
    //bloco de código
    break;
  default:
    //bloco de código
}
