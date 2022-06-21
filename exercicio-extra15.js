/*15. Faça uma função que receba como parâmetro dois números e 
que imprima na tela uma mensagem de acordo com as condições abaixo:
"Números iguais", se os números sejam iguais;
"O primeiro número é maior", se o primeiro seja maior que o segundo;
"O segundo número maior", se o segundo seja maior que o primeiro. */

function verifica(numb1,numb2){
    if(numb1 == numb2){console.log("Números iguais");}
    if(numb1 > numb2){console.log("O primeiro número é maior");}
    if(numb2 > numb1){console.log("O segundo número é maior");}
}


verifica(5,5);
verifica(5,4);
verifica(4,5);
