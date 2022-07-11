/*8. Crie uma função que receba como parâmetro a nota de uma pessoa estudante 
e que retorne uma mensagem de acordo com a pontuação obtida.
> NOTAS
- abaixo de 10: PÉSSIMO
- entre 11 e 30: RUIM
- entre 31 e 50: REGULAR
- entre 51 e 70: MEDIANO
- entre 71 e 90: ÓTIMO
- acima de 91: EXCELENTE */


function vesepassa(nota){
    var conceito;
    if(nota<=10){ conceito = "PÉSSIMO"}
    if(nota> 10 && nota <=30){ conceito = "RUIM"}
    if(nota> 30 && nota <=50){ conceito = "REGULAR"}
    if(nota> 50 && nota <=70){ conceito = "MEDIANO"}
    if(nota> 70 && nota <=90){ conceito = "ÓTIMO"}
    if(nota> 90){ conceito = "EXCELENTE"}
    return conceito;
}

var fulano = vesepassa(50);
console.log(`Fulano recebeu conceito: ${fulano}`);