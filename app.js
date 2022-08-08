let playerScore = 0;
let computerScore= 0;
let winningScore = 5;
let playersChoice;
let computersChoice;
let buttons = document.querySelectorAll('.btn');
let isGameOver = false;
const gameText = document.querySelector('h3');
const computerScoreDisplay = document.querySelector('#p2-score');
const playerScoreDisplay = document.querySelector('#p1-score');

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
            gameText.innerText = 'PLAYER WINS THE GAME';
            playerScoreDisplay.classList.add('winner');
            computerScoreDisplay.classList.add('loser');
        } else {
            gameText.innerText = 'COMPUTER WINS THE GAME';
            playerScoreDisplay.classList.add('loser');
            computerScoreDisplay.classList.add('winner');
        }
    }


function keepPlayerScore () {
    playerScoreDisplay.textContent = playerScore;
    
}

function keepComputerScore () {
    computerScoreDisplay.textContent = computerScore;
}
