class Hangman {
	constructor(words) {
		this.words = words;
		this.secretWord = this.pickWord();
		this.letters = [];
		this.guessedLetters = "";
		this.errorsLeft = 10;
	}

	pickWord() {
		return this.words[Math.floor(Math.random() * this.words.length)];
	}

	checkIfLetter(keyCode) {
		return keyCode >= 65 && keyCode <= 90 ? true : false;
	}

	//True if I can add the letter (letters array doesn't includes it)
	checkClickedLetters(letter) {
		return !this.letters.includes(letter);
	}

	addCorrectLetter(letter) {
		this.guessedLetters += letter;
	}

	addWrongLetter(letter) {
		this.errorsLeft--;
		if (this.checkClickedLetters(letter)) {
			this.letters.push(letter);
		}
	}

	checkGameOver() {
		return this.errorsLeft > 0 ? false : true;
	}

	checkWinner() {
		let output = true;
		for (let letter of this.secretWord) {
			if (!this.guessedLetters.includes(letter)) {
				output = false;
				return output;
			}
		}
		return output;
	}
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
	startGameButton.addEventListener("click", (event) => {
		hangman = new Hangman(["node", "javascript", "react", "miami", "paris", "amsterdam", "lisboa"]);

		hangman.secretWord = hangman.pickWord();
		hangmanCanvas = new HangmanCanvas(hangman.secretWord);

		hangmanCanvas.createBoard();

		// ... your code goes here
	});
}

document.addEventListener("keydown", (event) => {
	// React to user pressing a key
	let keyPressed = event.keyCode;

	//It's a letter?
	if (hangman.checkIfLetter(keyPressed)) {
		//While game is alive
		while (hangman.checkWinner() === false) {
			//The secretWord has the letter?
			if (hangman.secretWord.includes(keyPressed)) {
				//Can I add the letter to the array?
				if (hangman.checkClickedLetters(letters)) {
					//Add the letter to correct letters array
					hangman.addCorrectLetter(letter);
				}
			} else {
				//Add the letter to wrong letters array
				hangman.addWrongLetter(letter);
			}
			hangman.checkGameOver();
		}
	}

	// ... your code goes here
});
