const strings = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {

const randomIndex = Math.floor(Math.random() * strings.length);

const randomString = strings[randomIndex];

return randomString;

}
const randomString = getComputerChoice();
console.log(randomString);