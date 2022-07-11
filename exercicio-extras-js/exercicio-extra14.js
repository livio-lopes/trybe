/**14. Crie uma função que receba como parâmetro um número e 
 * atribua na variável resultado se o número é positivo ou 
 * se o número for negativo. */


function positivoOuNegativo (numero){
    if (numero < 0){
        resultado = "número negativo"
    }
    if(numero >=0){
        resultado = "número positivo"
    }
}

var resultado;
positivoOuNegativo(-54);
console.log(resultado);
positivoOuNegativo(32);
console.log(resultado);