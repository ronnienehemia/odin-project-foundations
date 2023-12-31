// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to randomly get the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round and update the result
function playRound(playerSelection, computerSelection) {
    document.getElementById("computer-choice").textContent = `Computer's Choice: ${capitalize(computerSelection)}`;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let result;
    // Determine the result of the round
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'scissors' && computerSelection === 'paper') ||
               (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
        result = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else {
        computerScore++;
        result = `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }

    // Update the round result and scores
    document.getElementById("round-result").textContent = `Round Result: ${result}`;
    updateScores();
    return result;
}

// Helper function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function called when player makes a choice
function playerChoice(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

// Function to restart the game and reset scores
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById("computer-choice").textContent = "Computer's Choice: ";
    document.getElementById("round-result").textContent = "Round Result: ";
    document.getElementById("winner").textContent = "Winner: ";
}

// Function to update the score display
function updateScores() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Initialize the game
restartGame();
