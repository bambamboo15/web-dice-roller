// Obtain all necessary elements
const rollButton = document.getElementById("roll-btn");
const dice = document.querySelectorAll(".field");

// Prevent the user from spamming the button
let rolling = false;

// Asynchronously call one of the RESTful APIs and roll
// the dice
function onload() {
	fetch("https://web-dice-roller-api.azurewebsites.net/roll-a-die");
	roll();
}

// Perform normal roll operation but take the current
// rolling state into consideration
async function roll() {
	if (!rolling) {
		rolling = true;
		await actually_roll();
		rolling = false;
	}
}

// Generate as many dice roller values as necessary
// using the Web Dice Roller API, then loop through
// each die and set their value
//
// Both steps are not being done in the same loop
// so all the dice can be set at the same time
async function actually_roll() {
	let values = [];
	for (var i = 0; i < dice.length; ++i) {
		const response = await fetch("https://web-dice-roller-api.azurewebsites.net/roll-a-die");
		const json = await response.json();
		values.push(json.value);
	}
	for (var i = 0; i < dice.length; ++i) {
		const die = dice[i];
		const value = values[i];
		die.innerText = value;
	}
}