let playerScore = 0;
let computerScore= 0;
let winningScore = 5;
let playersChoice;
let computersChoice;
let isGameOver = false;
const gameText = document.querySelector('h3');
const computerScoreDisplay = document.querySelector('#p2-score');
const playerScoreDisplay = document.querySelector('#p1-score');
const buttons = document.querySelectorAll('.btn');
const resetButton = document.querySelector('.reset-button')

resetButton.addEventListener('click', reset)

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        if (!isGameOver) {
        playersChoice = button.id;
        playRound(playersChoice, computersChoice);
        if (playerScore === winningScore || computerScore === winningScore) {
            isGameOver = true
            decideWinner();

        }
        }
    })
})

const RPS = ["rock", "paper", "scissors"]

const randomComputersChoice = () => {
    return RPS[Math.floor(Math.random() * RPS.length)]
}

function playRound(playersChoice, computersChoice) {
    computersChoice = randomComputersChoice();
    if (playersChoice === computersChoice) {
        gameText.innerText = 'Tie round';
    } else if ((computersChoice == "rock" && playersChoice == "scissors") ||
        (computersChoice == "scissors" && playersChoice == "paper") ||
        (computersChoice == "paper" && playersChoice == "rock")) {
        computerScore+=1;
        keepComputerScore();
        gameText.innerText = 'Computer wins the round.';
    } else {
        playerScore+=1;
        keepPlayerScore();
        gameText.innerText = 'Player wins the round.';
    }
}

function decideWinner() {
        if (playerScore > computerScore){
            playerWins()
        } else {
            computerWins()
        }
    }

function playerWins () {
    gameText.innerText = 'PLAYER WINS THE GAME';
    playerScoreDisplay.classList.add('winner');
    computerScoreDisplay.classList.add('loser');
}

function computerWins() {
    gameText.innerText = 'COMPUTER WINS THE GAME';
    playerScoreDisplay.classList.add('loser');
    computerScoreDisplay.classList.add('winner');

}

function keepPlayerScore () {
    playerScoreDisplay.textContent = playerScore;
    
}

function keepComputerScore () {
    computerScoreDisplay.textContent = computerScore;
}

function reset () {
    isGameOver = false;
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore();
    keepComputerScore();
    playerScoreDisplay.classList.remove('winner', 'loser');
    computerScoreDisplay.classList.remove('winner', 'loser');
    gameText.innerText = 'Start the game by choosing rock, paper or scissors';
}