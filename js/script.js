// Setup
var maxNumber;
var bombsNumber = 16;
var possibilities = maxNumber - bombsNumber;
var bombList = [];
var allowedNumbers = [];
var user = 0;

// Choose the difficulty level
var level = parseInt(prompt("Choose the difficulty level from 0 to 2").trim());
// Validation 
while(isNaN(level) || level < 0 || level > 2) {
    level = parseInt(prompt("Sorry, the difficulty level you entered doesn't exist yet. \nChoose the difficulty level from 0 to 2").trim());
}

// Check level
switch(level) {
    case 0:
        maxNumber = 100;
        break;
    case 1:
        maxNumber = 80;
        break;
    case 2:
        maxNumber = 50;
}

possibilities = maxNumber - bombsNumber;

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

    // Check choice
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