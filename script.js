// Obtain all necessary elements
const rollButton = document.getElementById("roll-btn");
const dice = document.querySelectorAll(".field");

// Loop through every die and roll them by
// generating a random integer from 1 to 6
function roll() {
	for (const die of dice) {
		die.innerText = 1 + Math.floor(Math.random() * 6);
	}
}