// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers){
    console.log(number);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let result = 0;

for (let number of numbers){
    result += number;
}

console.log(result);