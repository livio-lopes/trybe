/*9. Crie uma função que receba como parâmetro 
um array de números inteiros e que retorne APENAS o
 maior número dentre os informados. */

 var deMaior = function (sequencia){
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

module.exports = deMaior;