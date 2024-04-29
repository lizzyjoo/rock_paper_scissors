// initialize the scores of player & computer
let userScore = 0;
let compScore = 0;
let winner = '';

// UI
const scoreInfo = document.getElementById('score-info');
const scoreMsg = document.getElementById('score-msg');
const userScoreText = document.getElementById('user-score');
const compScoreText = document.getElementById('comp-score');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

rockBtn.addEventListener('click', () => userClick("ROCK"));
paperBtn.addEventListener('click', () => userClick("PAPER"));
scissorsBtn.addEventListener('click', ()=> userClick("SCISSORS"));

// function to return computer choice - random 
function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random() * options.length)];
    
}

// handle user's button click and call appropriate functions
function userClick(userSelection) {
    let computerSelection = getComputerChoice();
    getResult(userSelection,computerSelection);
    updateScore()
    updateRoundResult(winner,userSelection,computerSelection);
    if (userScore === 5 || compScore === 5) {
        endGame();
    }

    
}
// update players' scores
function updateScore() {
    if (winner === 'tie') {
        scoreInfo.textContent = "It's a tie!";
    } else if (winner === 'user') {
        scoreInfo.textContent = "You won 🤗";
    } else if (winner === 'computer') {
        scoreInfo.textContent = "You lost 😔";
    }

    userScoreText.textContent = `${userScore}`;
    compScoreText.textContent = `${compScore}`;

}

// update the result of the round
function updateRoundResult(winner, userSelection, compSelection) {
    if (winner === 'user') {
        scoreMsg.textContent = `${userSelection} beats ${compSelection}`;
    } else if (winner === 'computer') {
        scoreMsg.textContent = `${compSelection} beats ${userSelection}`;
    } else if (winner === 'tie') {
        scoreMsg.textContent = `${userSelection} ties with ${compSelection}`;
    }
}

// increment score accordingly and update the round's winner
function getResult(userSelection, compSelection) {
    if (userSelection === compSelection) {
        winner = 'tie';
        userScore++;
        compScore++;
    } else if (compSelection === "ROCK") {
        if (userSelection === "SCISSORS") {
            winner = 'computer';
            compScore++;
        } else {
            winner = 'user';
            userScore++;
        }
    } else if (compSelection === "PAPER") {
        if (userSelection === "ROCK") {
            winner = 'computer';
            compScore++;
        } else {
            winner = 'user';
            userScore++;
        }

    } else {
        if (userSelection == "PAPER") {
            winner = 'computer';
            compScore++;
        } else {
            winner = 'user';
            userScore++;
        }
    }


}

// end game and output final results, ask user to play again 
function endGame() {
    scoreInfo.style.color = '#607196';
    scoreMsg.style.color = '#FF7B9C';

    if (userScore === compScore) {
        scoreInfo.textContent = 'Game Over: You tied with the computer!';

    } else if (userScore < compScore) {
        scoreInfo.textContent = 'Game Over: You lost!';

    } else {
        scoreInfo.textContent = 'Game Over: You won!';

    }
    
    scoreMsg.textContent = 'Play Again?';
    // button to reset the game
    const playAgain = document.createElement("button");
    playAgain.textContent = "YES";
    playAgain.setAttribute("id", "again");
    
    scoreMsg.appendChild(playAgain);

    const again = document.getElementById("again");
    // if the button is clicked, the window is reloaded
    again.addEventListener('click', () => {
        window.location.reload();     
    })

    // in case the user clicks on any other button, the window reloads
    rockBtn.addEventListener('click', () => {
        window.location.reload(); 
    });
    paperBtn.addEventListener('click', () => {
        window.location.reload(); 
    });
    scissorsBtn.addEventListener('click', ()=> {
        window.location.reload(); 
    });

    
}
