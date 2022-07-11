/*13. Crie uma função que receba como parâmetro uma string que 
armazene uma cor referente ao funcionamento de um semáforo e 
que retorne uma mensagem para cada cor, seguindo as condições abaixo:
Se a cor for vermelho, retorne a mensagem "PARE!";
Se a cor for amarelo, retorne a mensagem "ATENÇÃO!";
Se a cor for verde, retorne a mensagem "PROSSIGA!";*/

function semaforo(cor){
    if(cor =="vermelho"){return "PARE!";}
    if(cor =="amarelo"){return "ATENÇÃO!";}
    if(cor =="verde"){return "PROSSIGA!";}
}


console.log(semaforo("vermelho"));
console.log(semaforo("amarelo"));
console.log(semaforo("verde"));