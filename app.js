const ROCK_PAPER_SCISSORS = ['Rock', 'Paper', 'Scissors', 'Rock', 'Paper', 'Scissors']

let result = 0

function game(n) {

    for (let i = 0; i < n; i++) {
        const playerSelection = getPlayerSelection()


        console.log(`Your choice is ${playerSelection}`);
        console.log(`The computer selects ${getComputerChoice()}`);
        console.log(playRound(playerSelection, getComputerChoice()));
    }

    if (result > 0) {
        return console.log("\nYou won.");
    } else if (result < 0) {
        return console.log("\nYou lost.");
    }
    return console.log("\nIt's a draw.");
}


game(3)



function getPlayerSelection() {
    let playerAnswer

    const btns = document.querySelectorAll("button")

    const resultPlayer = document.querySelector(".result").firstElementChild

    btns.forEach((btn) => btn.addEventListener("click", () => {
        playerAnswer = btn.value
        resultPlayer.textContent = `You have chosen ${playerAnswer}`
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
