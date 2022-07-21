// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers){
    console.log(number);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let some = 0;

for (let number of numbers){
    some += number;
}
console.log(""); // Quebra de linha improvisada
console.log(some);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let arithmeticAverage = some/numbers.length;
console.log(""); // Quebra de linha improvisada
console.log(arithmeticAverage);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (arithmeticAverage > 20){
    console.log(""); // Quebra de linha improvisada
    console.log("valor maior que 20");
}else{
    console.log(""); // Quebra de linha improvisada
    console.log("valor menor ou igual a 20");
}

// 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let aux = 0; // Variável auxiliar
for (let number of numbers){
    if (number > aux ){
        aux = number;
    }
}
console.log(""); // Quebra de linha improvisada
console.log("O maior valor contido em numbes é: " + aux);

