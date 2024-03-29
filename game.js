function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random() * options.length)];
    
}

function playRound(playerSelection, computerSelection) {
    // first convert user's input to all uppercase (for case-insensitivity)
    playerSelection = playerSelection.toUpperCase();
    // case 1: computer and user ties
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if (computerSelection === "ROCK") {
        if (playerSelection === "SCISSORS") {
            return "You lose!"
        } else {
            return "You win!"
        }
    } else if (computerSelection === "PAPER") {
        if (playerSelection === "ROCK") {
            return "You lose!"
        } else {
            return "You win!"
        }

    } else {
        if (playerSelection == "PAPER") {
            return "You lose!"
        } else {
            return "You win!"
        }
    }

}

// play 5 rounds of game
function playGame() {
    // variables to keep track of the score
    let compScore = 0;
    let playerScore = 0;
    //for loop to repeat the game 5 times
    for (let i = 0; i < 5; i++) {
        // have computer choose
        let comp = getComputerChoice();
        // have user choose, take input 
        let player = prompt("Rock, Paper, or Scissors?: ");

        let userResult = playRound(player, comp);
        // output result
        console.log(userResult);
        // if the user won:
        if (userResult === "You win!") {
            playerScore++;
        } else if (userResult === "You lose!") {
            compScore++;
        } 
        // if they draw, no score tracked

    }

    // report results at the end
    console.log("Computer score: ", compScore);
    console.log("User score: ", playerScore);
    if (compScore > playerScore) {
        console.log("The computer won!");
    } else if (playerScore > compScore) {
        console.log("You won!");
    } else {//computer and user tied
        console.log("You and the computer tied!")

    }


}

playGame()