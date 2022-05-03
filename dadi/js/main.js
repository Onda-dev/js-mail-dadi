// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto
const playerNumber = Math.floor(Math.random() * 6 + 1);
const cpuNumber = Math.floor(Math.random() * 6 + 1);

console.log(playerNumber, cpuNumber)

if( playerNumber > cpuNumber) {
    console.log("Hai vinto!")
}
else if( playerNumber == cpuNumber ) {
    console.log("È un pareggio :/")
}
else {
    console.log("Hai perso :(")
}


