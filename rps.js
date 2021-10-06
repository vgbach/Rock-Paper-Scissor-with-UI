function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1,string.length)  
}
function computerPlay() {
    const hand = ["rock","paper","scissor"]
    return hand[Math.floor(Math.random()*hand.length)]
}
function playRound() {
    let state = 0
    const computerSelection = computerPlay()
    let playerSelection = ''
    playerSelection = prompt("rock, paper, scissor!").toLowerCase()
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor") {
        playerSelection = prompt("You must choose either rock, paper or scissor!").toLowerCase()
    }
    if (computerSelection !== playerSelection) {
        if (playerSelection === "rock") {
            if (computerSelection === "scissor") {
                state = 1
            } else {
                state = -1
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                state = 1
            } else { state = -1 }
        } else {
            if (computerSelection === "paper") {
                state = 1
            } else { state = -1}
        }
    }
    switch (state) {
        case 1:
            return (`You won! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`)
        case -1:
            return (`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`)
        default:
            return (`It's a draw! You both chose ${capitalizeFirstLetter(playerSelection)   }`)
    }
}
/*function game() {
    let counter = 0
    let playerScore = 0
    let computerScore = 0
    while (counter !== 5) {
        const result = playRound()
        if (result[4] === 'w') {
            playerScore += 1
        } else if (result[4] === 'l') {
            computerScore +=1
        } 
        alert(result + `, the overall score is ${playerScore}/${computerScore}`)
        counter += 1
    }
}*/