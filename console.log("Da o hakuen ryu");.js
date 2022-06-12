/* 1. Faça uma função que receba como parâmetro duas notas de uma pessoa estudante. Em seguida, você deve calcular a média dessas notas e atribuir a variável resultado a mensagem correspondente:
 - A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
- A mensagem "Reprovado", se a média for menor do que sete;
- A mensagem "Aprovado com Distinção", se a média for igual a dez.*/

function vesepassa(nota1,nota2){
    var media = (nota1+nota2)/2;
    if (media ==10){
        console.log("Aprovado com Distinção");
    }
    if(media>=7){
        console.log("Aprovado");
    }else{
        console.log("Reprovado");
    }
}

vesepassa(8,7);