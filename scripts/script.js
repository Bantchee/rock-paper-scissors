
// Function will randomly return Rock, Paper, or Scissors when called
function computerPlay() {
    let num = Math.random();

    if(num < 0.3) {
        return "rock"
    } else if(num < 0.6) {
        return "paper"
    } else {
        return "scissors"
    }
}

// plays a single round of rock, paper, scissors, between player and computer
// String String > String
function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() == "rock") {
        if(computerSelection == "rock") {
            return "You tied! Rock can't beat Rock"
        } else if(computerSelection == "paper") {
            return "You lose! Paper beats Rock"
        }  else {
            return "You Win! Rock beats Scissors"
        }
    } else if(playerSelection.toLowerCase() == "paper") {
        if(computerSelection == "rock") {
            return "You Win! Paper beats Rock"
        } else if(computerSelection == "paper") {
            return "You tied! Paper can't beat Paper"
        }  else {
            return "You Lose! Scissors beats Papper"
        }
    } else if(playerSelection.toLowerCase() == "scissors") {
        if(computerSelection == "rock") {
            return "You Lose! Rock beats Scissors"
        } else if(computerSelection == "paper") {
            return "You Win! Scissors beats Paper"
        }  else {
            return "You Tied! Scissors can't beats Scissors"
        }
    } else {
        return "You didn't enter rock, papper, or scissors. Try again."
    }
}

