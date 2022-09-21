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

let playerChoice;

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorButton = document.querySelector('#scissor')

rockButton.addEventListener('click', () => {
    playerChoice = "Rock";
});

paperButton.addEventListener('click', () => {
    playerChoice = "Paper";
});

paperButton.addEventListener('click', () => {
    playerChoice = "Scissor";
});

function playRound() {
    let computerChoice = getComputerChoice().toLowerCase();

    if ((playerChoice == "rock") && (computerChoice == "scissor")) {
        playerScore++;
        console.log("You win, Rock beats Scissor!");
    }
    else if ((playerChoice == "rock") && (computerChoice == "paper")) {
        computerScore++;
        console.log("You lose, Paper beats Rock!");
    }
    else if ((playerChoice == "scissor") && (computerChoice == "paper")) {
        playerScore++;
        console.log("You win, Scissor beats Paper!");
    }
    else if ((playerChoice == "scissor") && (computerChoice == "rock")) {
        computerScore++;
        console.log("You lose, Rock beats Scissor!");
    }
    else if ((playerChoice == "paper") && (computerChoice == "rock")) {
        playerScore++;
        console.log("You win, Paper beats Rock!");
    }
    else if ((playerChoice == "paper") && (computerChoice == "scissor")) {
        computerScore++;
        console.log("You lose, Scissor beats Paper!");
    }
    else if (playerChoice == computerChoice ) {
        console.log("It's a tie!");
    }
}

let playerScore = 0;
let computerScore = 0;

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

