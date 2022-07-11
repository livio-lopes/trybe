/*18. Escreva uma função que receba como parâmetro um array 
contendo números positivos e números negativos e que retorne em novos arrays 
quais são os números positivos e quais são os negativos. */

function separa(seq){
    var seqPositiva = [];
    var seqNegativa = [];
    var tamanho = seq.length;
    for(var i = 0;i<tamanho;i++){
        if(seq[i]< 0){seqNegativa.push(seq[i]);}
        if(seq[i] >=0){seqPositiva.push(seq[i]);}
    }
    return [seqNegativa, seqPositiva];
}
var sequencia = [-5,5,3,-3];
console.log(separa(sequencia));
console.log(separa(sequencia)[0]);
console.log(separa(sequencia)[1]); 
