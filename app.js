let playerScore = 0;
let computerScore = 0;
let playersChoice;
let computersChoice;
let buttons = document.querySelectorAll('.btn')

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        playersChoice = (button.innerText).toLowerCase()
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
        console.log('Tie round')
    } else if ((computersChoice == "rock" && playersChoice == "scissors") ||
        (computersChoice == "scissors" && playersChoice == "paper") ||
        (computersChoice == "paper" && playersChoice == "rock")) {
        computerScore += 1
        console.log(`Computer wins the round.`)
    } else {
        playerScore += 1
        console.log(`You win the round.`)
    }
}

function scoreBoard() {
    console.log(`Player: ${playerScore} Computer:${computerScore}`)
}

function gameWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log('****************************')
        console.log('Player wins the game')
        scoreBoard()
    } else if (computerScore > playerScore) {
        console.log('****************************')
        console.log('Computer wins the game')
        scoreBoard()
    } else {
        console.log('****************************')
        console.log('Tie game')
        scoreBoard()
    }
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
