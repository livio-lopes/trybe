/*4 - Crie uma função que, dada uma sequencia de números, retorne qual é o menor entre eles.*/


function deMenor(sequencia){
    //define tamanho da sequência
    var tamanho = sequencia.length;
    //define que primeiro valor da sequencia é o menor
    var menor = sequencia[0];
    //percorre a sequência a partir do segundo elemento
    for(var i =1;i<tamanho;i++){
        //se o elemento conhecido for maior que o próximo, então menor é substituido
        if(menor >= sequencia[i]){
            menor = sequencia[i];
        }
    }
    return menor;
}

//Declaração de sequência
var seq = [11,45,5,42,547,65,324,334,5234,52,10,23];
var k = deMenor(seq); // K recebe o menor valor da sequência
console.log(k); // Exite K