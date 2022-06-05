
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
    switch(playerSelection.toLowerCase()) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "You tied! Rock can't beat Rock"
                case "paper":
                    return "You lose! Paper beats Rock"
                case "scissors":
                    return "You Win! Rock beats Scissors"
            }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You Win! Paper beats Rock"
                case "paper":
                    return "You tied! Paper can't beat Paper"
                case "scissors":
                    return "You Lose! Scissors beats Paper"
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    return "You Lose! Rock beats Scissors"
                case "paper":
                    return "You Win! Scissors beats Paper"
                case "scissors":
                    return "You Tied! Scissors can't beats Scissors"
            }
            break;
        default:
            return "You didn't enter rock, papper, or scissors. Try again."
    }
}

// function will run a 5 round game of rock, paper, scissors
function game() {
    for(let i = 0; i < 5; i++) {
        let userInput = prompt("Enter: rock, paper, or scissors");
        let result = playRound(userInput, computerPlay());
        console.log(result);
    }
}