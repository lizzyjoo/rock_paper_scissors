// 1. container div = contains results screen and the playing buttons
// 2. div playing
// 3. div results 

//make container
const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

// make results class (box)

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

let playerScore = 0;
let compScore = 0;



let btn = document.querySelector(".game");

    btn.addEventListener('click', (event) => {
        let target = event.target;
        let element = document.querySelector(".results p");
        const playerChoice = document.createElement("p");
        playerChoice.setAttribute("id", "player");

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
    } );



// computer choice
function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random() * options.length)];
    
}

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

    let playerResult = getResult(playerSelection,computerSelection);
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


    if (playerResult === "Tie!") {
        playerScore++;
        compScore++;
    } else if (playerResult === "You lose!") {
        compScore++;
    } else if (playerResult === "You win!") {
        playerScore++;
    }

    if (playerScore === 5 || compScore === 5) {
        endGame();
    }


}

// consider having a seperate function where it computes (tie, player win, player lose)
// then update the score after getting the return values of that function 
// then use DOM method to update results
// how to not have the 'loop' go all the way through? how to have the button click be the stopper(?)

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

    const playAgain = document.createElement("button");
    playAgain.textContent = "Play Again";
    playAgain.setAttribute("id", "again");
    results.appendChild(playAgain);

    const again = document.getElementById("again");

    again.addEventListener('click', () => {
        window.location.reload();
        
    })

    









}