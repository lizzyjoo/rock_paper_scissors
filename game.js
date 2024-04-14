// implement the logic for a rock, paper, scissors game.
// structure: 
// container
//      results: displays result of each round)
//      game: contains three buttons for the player to choose

//make container
const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

// make results class
const results = document.createElement("div");
results.setAttribute("class", "results");
container.appendChild(results);
// haeder for results. page
const h1 = document.createElement("h1");
const textNode = document.createTextNode("Rock, Paper, Scissors!");
h1.appendChild(textNode);
h1.setAttribute("id","gameheader");
results.appendChild(h1);


// make game class (to contain buttons)
const game = document.createElement("div");
game.setAttribute("class", "game");
container.appendChild(game);



// create 3 different buttons, in the "game" class/box
const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
btnRock.setAttribute("id", "rock");
game.appendChild(btnRock);


const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
btnPaper.setAttribute("id", "paper");
game.appendChild(btnPaper);


const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";
btnScissors.setAttribute("id", "scissors");
game.appendChild(btnScissors);

// create div for displaying live score
const liveScore = document.createElement("div");
liveScore.setAttribute("class","live");
container.appendChild(liveScore);
const h3 = document.createElement("h3");
const liveText = document.createTextNode("Live Score");
h3.appendChild(liveText);
liveScore.appendChild(h3);


// initialize thescores of player & computer
let playerScore = 0;
let compScore = 0;





function scoreUpdate() {
  
    let playerScoreText = document.createTextNode(playerScore);
    let compScoreText = document.createTextNode(compScore);
    let p = document.createTextNode("You: ");
    let c = document.createTextNode("Computer: ")

    let playerLive = document.createElement("p");
    playerLive.setAttribute("id","plive");
    let compLive = document.createElement("p");
    compLive.setAttribute("id","clive");

    elementp = document.getElementById("plive");
    if (elementp !== null) {
        playerLive.append(p);
        playerLive.append(playerScoreText);
        elementp.replaceWith(playerLive)
    } else {
        playerLive.append(p);
        playerLive.append(playerScoreText);
        liveScore.appendChild(playerLive);
    }

    elementc = document.getElementById("clive");
    if (elementc !== null) {
        compLive.append(c);
        compLive.append(compScoreText);
        elementc.replaceWith(compLive)
    } else {
        compLive.append(c);
        compLive.append(compScoreText);
        liveScore.appendChild(compLive);
    }

}

// start game (call playRound function) once a button is selected
let btn = document.querySelector(".game");

    btn.addEventListener('click', (event) => {
        let target = event.target;
        let element = document.querySelector(".results p");
        const playerChoice = document.createElement("p");
        playerChoice.setAttribute("id", "player");

        // check if element exists to dynamically update player's & computer's choice
        switch (target.id) {
            case 'rock':
                const textNodeR = document.createTextNode("You played ROCK");          
                if (element !== null) {
                    playerChoice.appendChild(textNodeR);
                    element.replaceWith(playerChoice);      
                } else if (element == null) {
                    playerChoice.appendChild(textNodeR);
                    results.appendChild(playerChoice);
                }   

                playRound('rock');  
                break;
              
            case 'paper':
                const textNodeP = document.createTextNode("You played PAPER");
                
                if (element !== null) {
                    playerChoice.appendChild(textNodeP);
                    element.replaceWith(playerChoice);
                } else {
                    playerChoice.appendChild(textNodeP);
                    results.appendChild(playerChoice);
                }
                playRound('paper');    
                break;
                
            case 'scissors':
                const textNodeS = document.createTextNode("You played SCISSORS");

                if (element !== null) {
                    playerChoice.appendChild(textNodeS);
                    element.replaceWith(playerChoice);
                } else {
                    playerChoice.appendChild(textNodeS);
                    results.appendChild(playerChoice);
                }
    
                playRound('scissors');

                break;          
        }
        scoreUpdate();
    
    
    } );



// function to get computer choice - random 
function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random() * options.length)];
    
}

// implements each round
function playRound(playerSelection) {
    // get computer choice and display on the results board
    let computerSelection = getComputerChoice();
    const compChoice = document.createElement("p");
    compChoice.setAttribute("id", "comp");

    const compText = document.createTextNode("Computer played ");
    const compResult = document.createTextNode(computerSelection);
    
    elementC = document.getElementById("comp");
    if (elementC !== null) {
        compChoice.append(compText);
        compChoice.append(compResult);
        elementC.replaceWith(compChoice);
    } else {
        compChoice.append(compText);
        compChoice.append(compResult);
        results.appendChild(compChoice);
    }

    // call getResult function to determine player's result
    let playerResult = getResult(playerSelection,computerSelection);
    // display result
    let displayResult = document.createElement("p");
    displayResult.setAttribute("id","display");
    pText = document.createTextNode(playerResult);
    elementD = document.getElementById("display");

    if (elementD !== null) {
        displayResult.append(pText);
        elementD.replaceWith(displayResult);
    } else {
        displayResult.append(pText);
        results.appendChild(displayResult);
    }

    // update score according to the result
    if (playerResult === "Tie!") {
        playerScore++;
        compScore++;
    } else if (playerResult === "You lose!") {
        compScore++;
    } else if (playerResult === "You win!") {
        playerScore++;
    }

    // once one of the players' score reaches 5, call endGame function to terminate the game
    if (playerScore === 5 || compScore === 5) {
        endGame();
    }


}

// determines the player's fate; compare with computer's result (string) 
function getResult(playerSelection,computerSelection) {
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

// function that displays the final scores and the result
function endGame() {
    resultsHeading = document.createElement("h1");
    resultsHeadingText = document.createTextNode("Game over!");
    resultsHeading.setAttribute("id","resultsheader");
    resultsHeading.append(resultsHeadingText);
    results.appendChild(resultsHeading);

    console.log(playerScore);

    let playerScoreText = document.createTextNode(playerScore);
    let compScoreText = document.createTextNode(compScore);
    let p = document.createTextNode("Your score is: ");
    let c = document.createTextNode("Computer's score is: ")

    let playerFinal = document.createElement("p");
    let compFinal = document.createElement("p");

    playerFinal.append(p);
    playerFinal.append(playerScoreText);
    compFinal.append(c);
    compFinal.append(compScoreText);

    results.appendChild(playerFinal);
    results.appendChild(compFinal);

    // button to reset the game
    const playAgain = document.createElement("button");
    playAgain.textContent = "Play Again";
    playAgain.setAttribute("id", "again");
    results.appendChild(playAgain);

    const again = document.getElementById("again");
    // if the button is clicked, the window is reloaded
    again.addEventListener('click', () => {
        window.location.reload();
        
    })

    









}