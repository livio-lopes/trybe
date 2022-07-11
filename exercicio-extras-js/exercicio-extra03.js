/*
3. Escreva uma função que receba como parâmetros o nome, o sobrenome, 
a idade e a cidade de uma pessoa, e que retorne uma concatenação com os dados fornecidos.
 */

function concatena(nome, sobrenome, idade, cidade){
    return nome + sobrenome + idade + cidade;
}


var concatenado = concatena("Livio","Lopes",26,"Ananindeua");

console.log(concatenado);