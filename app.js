const ROCK_PAPER_SCISSORS = ['Rock', 'Paper', 'Scissors', 'Rock', 'Paper', 'Scissors']

let result = 0

function game() {

    const gameResult = document.querySelector(".result").children[2]

    gameResult.textContent = result

    console.log(playRound(getPlayerSelection(), getComputerChoice()));

}


game()

// getPlayerSelection()



function getPlayerSelection() {
    let playerAnswer

    const btns = document.querySelectorAll("button")

    const compResult = document.querySelector(".result").children[1]


    const resultPlayer = document.querySelector(".result").firstElementChild

    btns.forEach((btn) => btn.addEventListener("click", () => {
        playerAnswer = btn.value
        resultPlayer.textContent = `You have chosen ${playerAnswer}`
        compResult.textContent = `The computer has chosen ${getComputerChoice()}`
        console.log(playerAnswer);
    }))

    return playerAnswer
}


function playRound(playerSelection, computerSelection) {



    if (playerSelection == computerSelection) {
        result = result
        return "This is a draw."
    }

    else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            result += 1
            return "You win! Rock beats Scissors."

        }
        else {
            result -= 1

            return "You Lose! Paper beats Rock"
        }
    }

    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            result += 1
            return "You win! Paper beats Scissors."
        } else {
            result -= 1
            return "You Lose! Paper beats Rock"
        }
    }
    else {
        if (computerSelection == "Paper") {
            result += 1
            return "You win! Scissors beats Paper."
        } else {
            result -= 1
            return "You lose!Rock beats Scissors."
        }
    }
}


function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)
    return ROCK_PAPER_SCISSORS[randomChoice]
}
