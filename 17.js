// Nested if else condition
let winningNumber = 19;
// console.log("Guess a number between 1 - 100.")
let flag = true;

let userGuess = +prompt("Guess a number.");
// console.log(typeof userGuess, userGuess);

if(userGuess === winningNumber){
    console.log("You win the game");
}else{
    console.log("You guessed wrong! Try again.");
}