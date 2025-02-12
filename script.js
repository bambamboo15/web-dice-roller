// Obtain all necessary elements
const rollButton = document.getElementById("roll-btn");
const dice = document.querySelectorAll(".field");

// Function to roll all of the dice
function roll() {
	for (const die of dice) {
		die.innerText = 1 + Math.floor(Math.random() * 6);
	}
}