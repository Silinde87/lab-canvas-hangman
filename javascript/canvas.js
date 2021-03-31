const canvas = document.getElementById("hangman");

class HangmanCanvas {
	constructor(secretWord) {
		this.context = canvas.getContext("2d");
		this.secretWord = secretWord;
	}

	createBoard() {
		this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.context.lineWidth = 5;

		this.drawLines();
	}

	drawLines() {
		let initialX = 300;
		let initialY = 700;

    this.context.beginPath();
		for (let i = 0; i < this.secretWord.length; i++) {
			this.context.moveTo(initialX, initialY);
			initialX += 45;
			this.context.lineTo(initialX, initialY);
			initialX += 15;
			this.context.moveTo(initialX, initialY);
		}
    this.context.closePath();
    this.context.stroke();
	}

	writeCorrectLetter(index) {
		// ... your code goes here
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
