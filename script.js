const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {

const randomIndex = Math.floor(Math.random() * choice.length);

const randomChoice = choice[randomIndex];

return randomChoice;

}
const randomChoice = getComputerChoice();
console.log(randomChoice);