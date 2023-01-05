const ROCK_PAPER_SCISSORS = ['Rock', 'Paper', 'Scissors', 'Rock', 'Paper', 'Scissors']

let result = 0

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)
    return ROCK_PAPER_SCISSORS[randomChoice]
}

function getPlayerSelection() {
    let answerPlayer = prompt("Select: Rock, Paper or Scissors?")

    if (answerPlayer == "") {
        alert("Enter a valid option:")
        answerPlayer = prompt("Select: Rock, Paper or Scissors?")
    }

    const playerAnswer = answerPlayer.substring(0, 1).toUpperCase() + answerPlayer.substring(1).toLowerCase()


    if ((playerAnswer != "Rock") && (playerAnswer != "Scissors") && (playerAnswer != "Paper")) {
        alert(`Your answer wasn't rock, paper or 
        scissors. It is not case sensistive.Please try again.`)
        answerPlayer = prompt("Select: Rock, Paper or Scissors?")
    }

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

function game(n) {

    for (let i = 0; i < n; i++) {
        const playerSelection = getPlayerSelection()
        const computerSelection = getComputerChoice()
        console.log(`Your choice is ${playerSelection}`);
        console.log(`The computer selects ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }

    if (result > 0) {
        return console.log("\nYou won.");
    } else if (result < 0) {
        return console.log("\nYou lost.");
    }
    return console.log("\nIt's a draw.");
}


game(5)