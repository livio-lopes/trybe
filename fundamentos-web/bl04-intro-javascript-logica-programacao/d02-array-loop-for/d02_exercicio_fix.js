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

