const divContainer = document.querySelector('.container');
const buttons = document.querySelectorAll('button');

const scoreBoard = document.querySelector('.score-board');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const divResults = document.querySelector('.results');

let currentRound = 0;
let gameOver = false;

// Function will randomly return Rock, Paper, or Scissors when called
// Input > Output : NOTHING > String
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
    function that updates current player score
    Input > Output : String String > Int
    Get scoreNumber from scoreStr
    if str has 'win'
        return score + 1
    else 
        return score
*/
function updatePlayerScore(str, scoreStr) {
    let scoreNum = getPlayerScore(scoreStr);
    // when search returns -1, that means it didn't find a match
    return (str.search(/win/i) == -1) ? scoreNum : scoreNum + 1;
}

/*
    function that returns current player score
    Input > Output : String > Int
    Take out the player score number from scoreStr
    Convert to int
*/
function getPlayerScore(scoreStr) {
    return parseInt(scoreStr.slice(14));
}

/*
    function that updates current computer score
    Input > Output : String Int > Int
    Get scoreNumber from scoreStr
    if str has 'lose'
        return score + 1
    else 
        return score
*/
function updateComputerScore(str, scoreStr) {
    let scoreNum = getComputerScore(scoreStr);
    return (str.search(/lose/i) == -1) ? scoreNum : scoreNum + 1;
}

/*
    function that returns current computer score
    Input > Output : String > Int
    Take out the computer score number from scoreStr
    Convert to int
*/
function getComputerScore(scoreStr) {
    return parseInt(scoreStr.slice(15));
}

/* 
Function that Updates the UI
Input > Ouput : Event > NOTHING
*/
function updateUI(event) {
    if(currentRound > 4 && (getPlayerScore(playerScore.textContent) != getComputerScore(computerScore.textContent))) {
        if(getPlayerScore(playerScore.textContent) > getComputerScore(computerScore.textContent)) {
            const paraResultFinal = document.createElement('p');
            paraResultFinal.textContent = `You won ${getPlayerScore(playerScore.textContent)} of 
                    ${currentRound} rounds! You Won the Game! To restart click Rock, Paper, or Scissors.`
            divResults.appendChild(paraResultFinal);
            gameOver = true;
        } else {
            const paraResultFinal = document.createElement('p');
            paraResultFinal.textContent = `You won ${getPlayerScore(playerScore.textContent)} of 
            ${currentRound} rounds! You lost the Game! To restart click Rock, Paper, or Scissors.`
            divResults.appendChild(paraResultFinal);
            gameOver = true;
        }
    } else {
        currentRound++;
        const paraResult = document.createElement('p');
        switch(event.target.id) {
            case "btn-rock":
                paraResult.textContent = `Round ${currentRound} : ${playRound("rock", computerPlay())}`;
                playerScore.textContent = `Player Score: ${updatePlayerScore(paraResult.textContent, playerScore.textContent)}`;
                computerScore.textContent = `Computer Score: ${updateComputerScore(paraResult.textContent, computerScore.textContent)}`;
                break;
            case "btn-paper":
                paraResult.textContent = `Round ${currentRound} : ${playRound("paper", computerPlay())}`;
                playerScore.textContent = `Player Score: ${updatePlayerScore(paraResult.textContent, playerScore.textContent)}`;
                computerScore.textContent = `Computer Score: ${updateComputerScore(paraResult.textContent, computerScore.textContent)}`;
                break;
            case "btn-scissors":
                paraResult.textContent = `Round ${currentRound} : ${playRound("rock", computerPlay())}`;
                playerScore.textContent = `Player Score: ${updatePlayerScore(paraResult.textContent, playerScore.textContent)}`;
                computerScore.textContent = `Computer Score: ${updateComputerScore(paraResult.textContent, computerScore.textContent)}`;
                break;
        }
        divResults.appendChild(paraResult);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (event) => gameOver ? window.location.reload(true) : updateUI(event))
});
