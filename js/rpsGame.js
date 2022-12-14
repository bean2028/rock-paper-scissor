function getComputerChoice() {
    let choice = "";
    let number = Math.floor(Math.random()*100);
    if (number <= 33) {
        return choice = "Rock"
    }
    else if (number >= 66) {
        return choice = "Paper"
    }
    else { 
        return choice = "Scissor"
    }
}

let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const outputText = document.querySelector('#output');

rockButton.onclick = () => playRound("rock");
paperButton.onclick = () => playRound("paper");
scissorButton.onclick = () => playRound("scissor");

function playRound(playerChoice) {
    let computerChoice = getComputerChoice().toLowerCase();

    if ((playerChoice == "rock") && (computerChoice == "scissor")) {
        playerScore++;
        outputText.textContent = "You win, Rock beats Scissor!";
    }
    else if ((playerChoice == "rock") && (computerChoice == "paper")) {
        computerScore++;
        outputText.textContent = "You lose, Paper beats Rock!";
    }
    else if ((playerChoice == "scissor") && (computerChoice == "paper")) {
        playerScore++;
        outputText.textContent = "You win, Scissor beats Paper!";
    }
    else if ((playerChoice == "scissor") && (computerChoice == "rock")) {
        computerScore++;
        outputText.textContent = "You lose, Rock beats Scissor!";
    }
    else if ((playerChoice == "paper") && (computerChoice == "rock")) {
        playerScore++;
        outputText.textContent = "You win, Paper beats Rock!";
    }
    else if ((playerChoice == "paper") && (computerChoice == "scissor")) {
        computerScore++;
        outputText.textContent = "You lose, Scissor beats Paper!";
    }
    else if (playerChoice == computerChoice ) {
        outputText.textContent = "It's a tie!";
    }

    document.getElementById("pScore").innerHTML = playerScore.toString();
    document.getElementById("cScore").innerHTML = computerScore.toString();

    if (playerScore == 5) {
        outputText.textContent = "You won the game! Play again?";
        resetGame();
    }
    else if (computerScore == 5) {
        outputText.textContent = "You lost the game! Play again?";
        resetGame();
    }
}

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("pScore").innerHTML = playerScore.toString();
    document.getElementById("cScore").innerHTML = computerScore.toString();
}

/*
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("Congrats, you win!");
    }
    else if (playerScore < computerScore) {
        console.log("Sorry, you lose!");
    }
    else {
        console.log("It was a tie! Play again?");
    }
}
*/
