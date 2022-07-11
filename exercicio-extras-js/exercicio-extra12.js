/*12. Crie uma função que, dada uma sequência de caracteres, 
inverta o seu conteúdo e retorne ao usuário o resultado invertido. */

function inverte(string){
    var aux = string.split("");
    var reverso = aux.reverse();
    aux = reverso.join("");
    return aux;
}

var frase = "Rato Roeu do Rei de Remo";
console.log(inverte(frase));