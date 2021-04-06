/*
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

// Setup
var maxNumber = 10;
var bombsNumber = 2;
var possibilities = maxNumber - bombsNumber;
var bombList = [];
var allowedNumbers = [];
var user = 0;

// Bombs Generation 
while (bombList.length < bombsNumber) {
    var bomb = randomNumber(maxNumber);

    if (!bombList.length < bombsNumber) {
        bombList.push(bomb);
    }
}
console.log("Bomb List: ", bombList);

// Game Loop
while ((allowedNumbers.length < possibilities) && (!bombList.includes(user))) {
    // User Choice
    user = parseInt(prompt("Please enter a number from 1 to " + maxNumber + "\nSuccessful attempts: " + allowedNumbers.length + " of " + possibilities));
    // Validation
    while (isNaN(user) || user < 1 || user > maxNumber) {
        user = parseInt(prompt("Sorry, value is invalid. \nPlease enter a number from 1 to " + maxNumber));
    }

    // Check 
    if (bombList.includes(user)) {
        alert("What a pity! You lost. \nYou successfully tried " + allowedNumbers.length + " times before you found the bomb.")
    } else if (allowedNumbers.includes(user)) {
        alert("You have already entered this number. \nTry entering a new one");
    } else if (!allowedNumbers.includes(user)) {
        allowedNumbers.push(user);
    }

    // Check Win
    if (allowedNumbers.length === possibilities) {
        alert("Congratulations, you have won!");
    }
}








// UTILITIES
function randomNumber(max) {
    return Math.floor(Math.random() * max) - 1;
}