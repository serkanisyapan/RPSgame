let playerScore = 0
let computerScore = 0

const playRound = (playersChoice, computersChoice) => {
    if (playersChoice === computersChoice) {
        return 'Tie game'
    } else if (
    (computersChoice == "rock" && playersChoice == "scissors") ||
    (computersChoice == "scissors" && playersChoice == "paper") ||
    (computersChoice == "paper" && playersChoice == "rock")) {
        computerScore += 1
        return `Computer wins the round.`
    } else {
        playerScore += 1
        return `You win the round.`
    }
}

const RPS = ["rock", "paper", "scissors"]

const randomComputersChoice = () => {
    return RPS[Math.floor(Math.random() * RPS.length)]
}

const scoreBoard = () => {
    console.log(`Player: ${playerScore} Computer:${computerScore}`)
}


const game = () => {
    for (let i=0; i<5; i++) {
        let computersChoice = randomComputersChoice()
        let playersChoice = prompt("rock, paper or scissors")
        playRound()
        console.log(playRound(playersChoice, computersChoice))
    } if (playerScore > computerScore) {
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

game()

