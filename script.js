let playerScore = 0;
let computerScore = 0;

// Function to play the game
function playGame(userChoice) {
    // Array of choices
    const choices = ['Rock', 'Paper', 'Scissors'];
    // Generate a random choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    // Determine the game result
    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = 'You win!';
        playerScore++; // Increment player score
    } else {
        result = 'You lose!';
        computerScore++; // Increment computer score
    }

    // Update the UI with choices, result, and scores
    document.getElementById('choices').innerHTML = `You chose: ${userChoice} <br><br>Computer chose: ${computerChoice}`;
    document.getElementById('outcome').innerText = result;
    document.getElementById('player-score').innerText = `Player: ${playerScore}`;
    document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
}
