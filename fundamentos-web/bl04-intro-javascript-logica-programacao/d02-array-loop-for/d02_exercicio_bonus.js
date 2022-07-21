//Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);
console.log(numbers.sort());
// debugando codigo de ordenação
for (let index =1; index < numbers.length; index++){
    //console.log(numbers[index]);
    for (let secondIndex = 0; secondIndex < index; secondIndex++){
        //console.log(numbers[index],numbers[secondIndex]);
        let positision = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = positision;
    }
}

console.log(numbers);
console.log(numbers.sort());