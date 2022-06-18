/*4 - Crie uma função que, dada uma sequencia de números, retorne qual é o menor entre eles.*/


var deMenor = function(sequencia){
    //define tamanho da sequência
    var tamanho = sequencia.length;
    //define que primeiro valor da sequencia é o menor
    var menor = sequencia[0];
    //percorre a sequência a partir do segundo elemento
    for(var i =1;i<tamanho;i++){
        //se o elemento conhecido for menor que o próximo, então menor é substituido
        if(menor >= sequencia[i]){
            menor = sequencia[i];
        }
    }
    return menor;
}

module.exports = deMenor;

var idades = [16,18];
console.log(deMenor(idades));