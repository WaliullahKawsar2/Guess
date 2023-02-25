// Generate random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
	// Get user's guess
	var guess = parseInt(document.getElementById("guess").value);

	if (guess === randomNumber) {
		// If guess is correct, display success message
		document.getElementById("result").innerHTML = "Congratulations! You guessed the number.";
	} else if (guess > randomNumber) {
		// If guess is too high, display message to guess lower
		document.getElementById("result").innerHTML = "Too high. Guess lower.";
	} else {
		// If guess is too low, display message to guess higher
		document.getElementById("result").innerHTML = "Too low. Guess higher.";
	}
}


