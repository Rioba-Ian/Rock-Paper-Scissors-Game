const ROCK_PAPER_SCISSORS = ['Rock', 'Paper', 'Scissors', 'Rock', 'Paper', 'Scissors']

game()

function game() {
    // variable to hold the player Answer
    let playerAnswer

    // get all buttons.
    const btns = document.querySelectorAll("button")
    // the computer result from the random number of the ROCK_PAPER_SCISSORS
    const randomChoice = Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)
    const compChoice = ROCK_PAPER_SCISSORS[randomChoice]
    const compResult = document.querySelector(".result").children[1]

    // where we shall store the game result in the ui. 
    const gameResult = document.createElement("h3")
    // grab the result 
    const resultPlayer = document.querySelector(".result").firstElementChild

    // click events for button to launch game once it has been clicked.
    btns.forEach((btn) => btn.addEventListener("click", () => {
        playerAnswer = btn.value
        resultPlayer.textContent = `You have chosen ${playerAnswer}`
        compResult.textContent = `The computer has chosen ${compChoice}`

        // game logic
        if (playerAnswer == "Rock") {
            if (compChoice == "Scissors") {
                gameResult.textContent = "You win, Rock beats Scissors."
                console.log("You win, Rock beats Scissors.");
            } else if (compChoice == "Paper") {
                gameResult.textContent = "You lose, Paper beats Rock"
                console.log("You lose, Paper beats Rock");
            } else if (compChoice == "Rock") {
                gameResult.textContent = "This is a draw."
                console.log("This is a draw.");
            }
        } else if (playerAnswer == "Paper") {
            if (compChoice == "Scissors") {
                gameResult.textContent = "You lose, Scissors beats Paper."
                console.log("You lose, Scissors beats Paper.");
            } else if (compChoice == "Rock") {
                gameResult.textContent = "You win, Paper beats Rock"
                console.log("You win, Paper beats Rock");
            } else if (compChoice == "Paper") {
                gameResult.textContent = "This is a draw."
                console.log("This is a draw.");
            }
        } else {
            if (compChoice == "Rock") {
                gameResult.textContent = "You lose, Rock beats Scissors."
                console.log("You lose, Rock beats Scissors.");
            } else if (compChoice == "Paper") {
                gameResult.textContent = "You win, Scissors beats Paper"
                console.log("You win, Scissors beats Paper");
            } else if (compChoice == "Scissors") {
                gameResult.textContent = "This is a draw."
                console.log("This is a draw.");
            }
        }
        // append the game result after game logic to the ui
        document.querySelector('.result').appendChild(gameResult)
        console.log(playerAnswer);
    }))
}


