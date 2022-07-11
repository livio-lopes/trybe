/*11. Crie uma função que receba uma array de números e verifica 
se cada um deles é divisível por 5. Se sim, armazene-os e retorne-os.*/


function verSeMultiplo5(seq){
    var tamanho = seq.length;
    var so5 = [];
    for(var i=0; i< tamanho;i++){
        if(seq[i]%5 == 0){
            so5.push(seq[i]);
        }
    }
    return so5;
}

var shot = [5,25,30,65,40,682,24,26,23];

console.log(verSeMultiplo5(shot));