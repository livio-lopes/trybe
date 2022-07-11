/*6. Escreva uma função que simula o jogo "pedra, papel e tesoura" 
levando em consideração que são apenas duas pessoas jogando e 
retorne o resultado no seguinte formato: "Jogador 1 ganhou" ou "Empate" ou 
"Jogador 2 ganhou".
 */

function jokenpo(jogador1, jogador2){
    //EMPATE
    if(jogador1 == "pedra" && jogador2 == jogador1){console.log("Empate");}    
    if(jogador1 == "papel" && jogador2 == jogador1){console.log("Empate");}    
    if(jogador1 == "tesoura" && jogador2 == jogador1){console.log("Empate");}
    // VENCEDOR JOGADOR 1
    if(jogador1 == "pedra" && jogador2 == "tesoura"){console.log("Jogador 1 ganhou")}
    if(jogador1 == "tesoura" && jogador2 == "papel"){console.log("Jogador 1 ganhou")}
    if(jogador1 == "papel" && jogador2 == "pedra"){console.log("Jogador 1 ganhou")}
    // VENCEDOR JOGADOR 2
    if(jogador2 == "pedra" && jogador1 == "tesoura"){console.log("Jogador 2 ganhou")}
    if(jogador2 == "tesoura" && jogador1 == "papel"){console.log("Jogador 2 ganhou")}
    if(jogador2 == "papel" && jogador1 == "pedra"){console.log("Jogador 2 ganhou")}
}


jokenpo(jogador1="pedra", jogador2="papel");