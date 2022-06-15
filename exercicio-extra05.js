/*5. Escreva uma função que calcule a soma de 1 a 1000 usando
 a estrutura de repetição for e retorne no formato: "A soma de 1 a 1000 é: x." */

 
 function acumula1000(){
    var acumulador = 0;
    for(var i =1;i<=1000;i++){
        acumulador = acumulador + i;
    }

    return `A soma de 1 a 1000 é: ${acumulador}.`
 }

var k = acumula1000();
console.log(k);