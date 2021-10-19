const mainBody = document.querySelector('body');
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1,string.length)  
}
function computerPlay() {
    const hand = ["rock","paper","scissor"]
    return hand[Math.floor(Math.random()*hand.length)]
}
function playRound(e) {
    const playerSelection = this.id;
    let state = 0;
    const computerSelection = computerPlay()
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
    console.log(state,playerSelection,computerSelection)
    const result = document.createElement('p');
    result.style.marginTop = "30px";
    result.setAttribute("id","result")
  
    if (document.contains(document.getElementById("result"))) {
        document.getElementById("result").remove();
    }
    if (!document.contains(document.getElementById("scores"))) {
        const scores = document.createElement('div');
        scores.setAttribute("id","scores");
        const playerScore = document.createElement("p");
        playerScore.setAttribute("id","player-score");
        playerScore.textContent = 0;
        const computerScore = document.createElement("p");
        computerScore.setAttribute("id","computer-score");
        computerScore.textContent = 0;
        const colon = document.createElement("p");
        colon.textContent = ' : '
        scores.appendChild(playerScore);
        scores.appendChild(colon);
        scores.appendChild(computerScore);
        scores.style.display = "flex";
        scores.style.flexDirection = "row";
        scores.style.marginTop = "30px";
        mainBody.appendChild(scores)

    }
    if (document.contains(document.getElementById("announcement"))) {
        document.getElementById("announcement").remove();
        document.getElementById("player-score").innerText = 0;
        document.getElementById("computer-score").innerText = 0;
    }
    switch (state) {
        case 1:
            result.textContent = `You won! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`
            document.getElementById("player-score").innerText = Number(document.getElementById("player-score").textContent) + 1
            mainBody.appendChild(result)
            //return (`You won! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`)
            break;
        case -1:
            result.textContent = `You lost! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`
            document.getElementById("computer-score").innerText = Number(document.getElementById("computer-score").textContent) + 1
            mainBody.appendChild(result)
            //return (`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`)
            break;
        default:
            result.textContent = `It's a draw! You both chose ${capitalizeFirstLetter(playerSelection)}`
            mainBody.appendChild(result)
            //return (`It's a draw! You both chose ${capitalizeFirstLetter(playerSelection)}`)
    }
    const computerOverallScore = document.getElementById("computer-score").textContent;
    const playerOverallScore = document.getElementById("player-score").textContent;
    if (computerOverallScore === "5"||playerOverallScore === "5") {
        const [announcementContent, textColor] = (playerOverallScore === "5") ? ["Game over! You have defeated the computer","#4EE2A0"]: ["Game over! The computer has defeated you!","#FC6666"];
        const announcement = document.createElement("p");
        announcement.setAttribute("id","announcement")
        announcement.textContent = announcementContent;
        announcement.style.cssText = "marginTop : 20px";
        announcement.style.color = textColor; 
        mainBody.appendChild(announcement);

    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click", playRound))


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