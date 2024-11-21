let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumer = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumer) {
        gameResult.textContent = "Too High, Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumer) {
        gameResult.textContent = "Too Low, Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumer) {
        gameResult.textContent = "Congratulations, You got it right";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please Provide Valid Input";
        gameResult.style.backgroundColor = "red";
    }
}