const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

const myNumber = Math.floor(Math.random() * 10000);
let pastGuesses = [];

const makeAGuess = () => { 
        rl.question("What is your guess? ", (guess) => {
        checkNumber(guess, myNumber);
        });
}

function checkNumber(guess, myNumber) {
        if (guess == myNumber) {
                console.log("Sweet!")
                rl.close();
        } else if (guess > myNumber) {
                pastGuesses.push(guess)              
                console.log("Bummer! The number is lower.")
                console.log("You have already guessed: " + pastGuesses)  
                makeAGuess();
        } else {
                pastGuesses.push(guess)                   
                console.log("Bummer! The number is higher.")
                console.log("You have already guessed: " + pastGuesses)
                makeAGuess();
        }
}

makeAGuess();




















/*  🐼  Our users have a few requests: 
        
        Can the game have different difficulty levels?
        
        It would be great if our users could challenge
        each other.

        **Our users would like to be able to see thier 
        past guesses.

*/
