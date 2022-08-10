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