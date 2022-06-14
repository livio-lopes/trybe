/* 
2.  Crie uma função que verifique se uma pessoa pode votar ou não, de acordo com as condições abaixo e que retorne a mensagem correspondente:
- Entre 0 e 15 anos: "Não pode votar";
- 16, 17 e acima de 70 anos: "Voto facultativo";
- Entre 18 e 69 anos: "Voto obrigatório". 
*/

function elegivel(idade){
    if(idade <= 15){
        console.log("Não pode votar");
    }
    if(idade >= 16 || idade <=69){
        console.log("Voto obrigatŕio");
    }
    if(idade >=70){
        console.log("Voto Facultativo");
    }
}

elegivel(14);
elegivel(25);
elegivel(70);