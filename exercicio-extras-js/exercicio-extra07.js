/*7. Crie uma função que receba 2 números e retorne a multiplicação e divisão entre eles. */



function fazConta(a,b){
    var multi = a*b,
        div = a/b;
    //Empacotando valores
    return [multi, div];
}
//Desempacotando valores
const [multi, div] = fazConta(4,2);
console.log(`A multiplicação deu ${multi} e a divisão deu ${div}`);