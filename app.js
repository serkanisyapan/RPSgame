let playerScore = 0
let computerScore= 0
let gameText = document.querySelector('h3')
let playersChoice;
let computersChoice;
let buttons = document.querySelectorAll('.btn')

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        playersChoice = button.id
        playRound(playersChoice, computersChoice)
    })
})

const RPS = ["rock", "paper", "scissors"]

const randomComputersChoice = () => {
    return RPS[Math.floor(Math.random() * RPS.length)]
}

function playRound(playersChoice, computersChoice) {
    computersChoice = randomComputersChoice()
    if (playersChoice === computersChoice) {
        gameText.innerText = 'Tie round'
    } else if ((computersChoice == "rock" && playersChoice == "scissors") ||
        (computersChoice == "scissors" && playersChoice == "paper") ||
        (computersChoice == "paper" && playersChoice == "rock")) {
        computerScore+=1;
        keepComputerScore();
        gameText.innerText = 'Computer wins the round.'
    } else {
        playerScore+=1;
        keepPlayerScore();
        gameText.innerText = 'Player wins the round.'
    }
}

function scoreBoard() {
    console.log(`Player: ${playerScore} Computer:${computerScore}`)
}


function keepPlayerScore () {
    let playerScoreDisplay = document.querySelector('#p1-score')
    playerScoreDisplay.textContent = playerScore
}

function keepComputerScore () {
    let computerScoreDisplay = document.querySelector('#p2-score')
    computerScoreDisplay.textContent = computerScore
}

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let computersChoice = randomComputersChoice()
//         let playersChoice = (prompt("rock, paper or scissors")).toLowerCase()
//         playRound()
//         console.log(playRound(playersChoice, computersChoice))
//     } return gameWinner(playerScore, computerScore)
// }

//  game()
