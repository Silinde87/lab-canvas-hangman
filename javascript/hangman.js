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
		if(this.guessedLetters.includes(letter) === false){
			this.guessedLetters += letter;
		}
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
let hangmanCanvas;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
	startGameButton.addEventListener("click", (event) => {
		hangman = new Hangman(["node", "javascript", "react", "miami", "paris", "amsterdam", "lisboa"]);
		hangman.secretWord = hangman.secretWord.toUpperCase();

		hangmanCanvas = new HangmanCanvas(hangman.secretWord);

		hangmanCanvas.createBoard();

		// ... your code goes here
	});
}

document.addEventListener("keydown", (event) => {
	// Getting keyCode and letter pressed
	let keyPressed = event.keyCode;
	let letter = event.key.toLocaleUpperCase();

	//It's a letter?
	if (hangman.checkIfLetter(keyPressed)) {
		//If game is alive
		if (hangman.checkWinner() === false) {
			//The secretWord has the letter?
			if (hangman.secretWord.includes(letter)) {
				//Add the letter to correct letters array
				hangman.addCorrectLetter(letter);

				//Print correct letter at canvas
				hangman.secretWord.split('').map((le,index) =>{
					if(le === letter){
						hangmanCanvas.writeCorrectLetter(index);
					}
				})

			} else {
				//Add the letter to wrong letters array
				hangman.addWrongLetter(letter);
				
				//Print wrong letter at canvas
				hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
				//Print hangman
				hangmanCanvas.drawHangman(this.errorsLeft);
				
				if (hangman.checkGameOver()) {
					//todo Bonus LOST
					//hangmanCanvas.gameOver();
				}
			}
		} else {
			//todo Bonus WINNER
			//hangmanCanvas.winner();
		}
	}
});
