
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

/*
    function that returns current player score
    Input > Output : String Int > Int
    else if str has 'win'
        return score + 1
    else 
        return score
*/
function getPlayerScore(str, score) {
    // when search returns -1, that means it didn't find a match
    return (str.search(/win/i) == -1) ? score : score + 1;
}

/*
    function that returns current computer score
    Input > Output : String Int > Int
    else if str has 'lose'
        return score + 1
    else 
        return score
*/
function getComputerScore(str, score) {
    return (str.search(/lose/i) == -1) ? score : score + 1;
}
    

// function will run a 5 round game of rock, paper, scissors
/* function game() {
    for(let i = 0; i < 5; i++) {
        let userInput = prompt("Enter: rock, paper, or scissors");
        let result = playRound(userInput, computerPlay());
        console.log(result);
    }
} */

const divContainer = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
const divResults = document.querySelector('.results');
const currentRound = document.querySelector(".current-round");
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let result;
        switch(button.id) {
            case "btn-rock":
                result = playRound("rock", computerPlay());
                currentRound.textContent = result;
                playerScore.textContent = getPlayerScore(result, parseInt(playerScore.textContent));
                computerScore.textContent = getComputerScore(result, parseInt(computerScore.textContent));
                break;
            case "btn-paper":
                result = playRound("paper", computerPlay());
                currentRound.textContent = result;
                playerScore.textContent = getPlayerScore(result, parseInt(playerScore.textContent));
                computerScore.textContent = getComputerScore(result, parseInt(computerScore.textContent));
                break;
            case "btn-scissors":
                result = playRound("scissors", computerPlay());
                currentRound.textContent = result;
                playerScore.textContent = getPlayerScore(result, parseInt(playerScore.textContent));
                computerScore.textContent = getComputerScore(result, parseInt(computerScore.textContent));
                break;
        }
    });
});


// Create div element that displays the result of playRound();

// Display the running score, announce winner once computer or player reaches 5 points
// 
