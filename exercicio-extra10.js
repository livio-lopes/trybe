/*10. Crie uma função que receba como parâmetro uma array com 
várias idades diferentes. Depois imprima na tela quais são as 
que tem maioridade e quais são as que tem menoridade. */

var menor = require("./exercicio-extra04");
var maior = require("./exercicio-extra09");


function maisVelhoMaisNovo (idades){
    console.log(`A pessoa mais nova tem: ${menor(idades)}`);
    console.log(`A pessoa mais velha tem: ${maior(idades)}`);
}


var idades = [18,65,45];


maisVelhoMaisNovo(idades);
