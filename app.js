let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_p = document.getElementById("result_p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userChoice_div = document.getElementById("userChoice");
const compChoice_div = document.getElementById("compChoice");

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function setUserChoice(choice) {
	switch (choice) {
		case "r":
			userChoice_div.innerHTML = '<img src="./img/rock.png" height="100px" />';
			break;
		case "p":
			userChoice_div.innerHTML = '<img src="./img/paper.png" height="100px" />';
			break;
		case "s":
			userChoice_div.innerHTML =
				'<img src="./img/scissors.png" height="100px" />';
			break;
	}
}
function setCompChoice(choice) {
	switch (choice) {
		case "r":
			compChoice_div.innerHTML = '<img src="./img/rock.png" height="100px" />';
			break;
		case "p":
			compChoice_div.innerHTML = '<img src="./img/paper.png" height="100px" />';
			break;
		case "s":
			compChoice_div.innerHTML =
				'<img src="./img/scissors.png" height="100px" />';
			break;
	}
}
function convertToWord(letter) {
	if (letter == "r") return "Rock";
	else if (letter == "p") return "Paper";
	else return "Scissors";
}
function win(userC, compC) {
	userScore++;
	userScore_span.innerHTML = userScore;
	userChoice_div.className = "button2 green-glow";
	compChoice_div.className = "button2 red-glow";
	result_p.innerHTML =
		convertToWord(userC) +
		smallUserWord +
		" beats " +
		convertToWord(compC) +
		smallCompWord +
		". You win!!!";
	document.getElementById(userC).classList.add("green-glow");
	setTimeout(
		() => document.getElementById(userC).classList.remove("green-glow"),
		1000
	);
}

function draw(userC, compC) {
	result_p.innerHTML =
		convertToWord(userC) +
		smallUserWord +
		" draws " +
		convertToWord(compC) +
		smallCompWord +
		". Draw.";
	userChoice_div.className = "button2 gray-glow";
	compChoice_div.className = "button2 gray-glow";
	document.getElementById(userC).classList.add("gray-glow");
	setTimeout(
		() => document.getElementById(userC).classList.remove("gray-glow"),
		1000
	);
}
function lose(userC, compC) {
	compScore++;
	compScore_span.innerHTML = compScore;
	userChoice_div.className = "button2 red-glow";
	compChoice_div.className = "button2 green-glow";
	result_p.innerHTML = `${convertToWord(
		userC
	)}${smallUserWord} loses to ${convertToWord(
		compC
	)}${smallCompWord} . You lose...`;
	document.getElementById(userC).classList.add("red-glow");
	setTimeout(
		() => document.getElementById(userC).classList.remove("red-glow"),
		1000
	);
}

function game(a) {
	const compChoice = getComputerChoice();
	setUserChoice(a);
	setCompChoice(compChoice);
	const pair = a + compChoice;
	switch (pair) {
		case "rs":
		case "pr":
		case "sp":
			console.log("USER WINS.");
			win(a, compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			console.log("USER LOSES.");
			lose(a, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			console.log("DRAW");
			draw(a, compChoice);
			break;
	}
}

rock_div.addEventListener("click", () => game("r"));
paper_div.addEventListener("click", () => game("p"));
scissors_div.addEventListener("click", () => game("s"));
document.addEventListener("keydown", event => {
	const keyName = event.key;

	switch (keyName) {
		case "1":
			game("r");
			break;
		case "2":
			game("p");
			break;
		case "3":
			game("s");
			break;
	}
});
