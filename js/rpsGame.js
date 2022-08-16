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

function playRound() {
    let computerChoice = getComputerChoice().toLowerCase();
    let playerChoice = prompt("Rock, Paper, or Scissor?").toLowerCase();

    if ((playerChoice == "rock") && (computerChoice == "scissor")) {
        return "You win, Rock beats Scissor!";
    }
    else if ((playerChoice == "rock") && (computerChoice == "paper")) {
        return "You lose, Paper beats Rock!";
    }
    else if ((playerChoice == "scissor") && (computerChoice == "paper")) {
        return "You win, Scissor beats Paper!";
    }
    else if ((playerChoice == "scissor") && (computerChoice == "rock")) {
        return "You lose, Rock beats Scissor!";
    }
    else if ((playerChoice == "paper") && (computerChoice == "rock")) {
        return "You win, Paper beats Rock!";
    }
    else if ((playerChoice == "paper") && (computerChoice == "scissor")) {
        return "You lose, Scissor beats Paper!";
    }
    else if (playerChoice == computerChoice ) {
        return "It's a tie!";
    }
}