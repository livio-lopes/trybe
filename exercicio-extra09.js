/*9. Crie uma função que receba como parâmetro 
um array de números inteiros e que retorne APENAS o
 maior número dentre os informados. */

 function deMaior(sequencia){
    //define tamanho da sequência
    var tamanho = sequencia.length;
    //define que primeiro valor da sequencia é o maior
    var maior = sequencia[0];
    //percorre a sequência a partir do segundo elemento
    for(var i =1;i<tamanho;i++){
        //se o elemento conhecido for maior que o próximo, então maior é substituido
        if(maior <= sequencia[i]){
            maior = sequencia[i];
        }
    }
    return maior;
}

//Declaração de sequência
var seq = [11,45,5,42,547,65,324,334,5234,52,10,23];
var k = deMaior(seq); // K recebe o maior valor da sequência
console.log(k); // Exite K