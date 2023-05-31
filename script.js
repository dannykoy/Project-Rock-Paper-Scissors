const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice;
}

// let playerSelection = prompt("Choose: ");
// playerSelection = playerSelection.toLowerCase();

// const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      let playerSelection = prompt("Choose: ");
      playerSelection = playerSelection.toLowerCase();
  
      const computerSelection = getComputerChoice();
  
      // Call the playRound function to play a single round
      const roundResult = playRound(playerSelection, computerSelection);
  
      // Update scores based on the round result
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
  
      // Display the round result
      console.log("Round " + round + ": " + roundResult);
    }
  
    // Determine the overall winner based on scores
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Call the game function to start playing
  game();
