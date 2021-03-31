const canvas = document.getElementById("hangman");
let posXLines = 285;
let posYLines = 700;
let posXGuessedLetters = posXLines;
let posYGuessedLetters = posYLines - 15;
let posXWrongLetters = 800;
let posYWrongLetters = 150;

class HangmanCanvas {
	constructor(secretWord) {
		this.context = canvas.getContext("2d");
		this.secretWord = secretWord;
	}

	createBoard() {
		this.context.clearRect(0, 0, canvas.width, canvas.height);
		this.context.lineWidth = 5;
		this.context.font = '40px monospace';

		this.drawLines();
	}

	drawLines() {		
		this.context.beginPath();
		for (let i = 0; i < this.secretWord.length; i++) {
			this.context.moveTo(posXLines += 10, posYLines);					
			this.context.lineTo(posXLines += 40, posYLines);			
		}
		this.context.closePath();
		this.context.stroke();
		posXLines = 285;
	}

	writeCorrectLetter(index) {
		let letter = this.secretWord[index];
		debugger
		console.log(posXLines);
		let posXGuessedLetters = posXLines + (50*(index+1)) - 31;

		this.context.fillText(letter,posXGuessedLetters,posYGuessedLetters);
	}

	writeWrongLetter(letter, errorsLeft) {
		// ... your code goes here
	}

	drawHangman(errorsLeft) {
		// ... your code goes here
	}

	gameOver() {
		// ... your code goes here
	}

	winner() {
		// ... your code goes here
	}
}
