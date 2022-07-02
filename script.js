'use strict';
let guessNUmber = Math.floor(Math.random() * 20) + 1;
console.log(guessNUmber);
let score = 20;

function scoreCounter() {
    if (score > 1) {
        score--;
        document.querySelector(".score").textContent = score;
        return score;
    } else {
        document.querySelector(".message").textContent = "you lose the game";
    }
}

document.querySelector(".check").addEventListener('click', function () {
    let inputValue = Number(document.querySelector('input').value);
    console.log(inputValue)
    if (!inputValue) {
        document.querySelector(".message").textContent = "No number";
    }
    else if (inputValue === guessNUmber) {
        document.body.style.backgroundColor = "green";
        document.querySelector(".message").textContent = "Correct";
        document.querySelector(".highscore").textContent = score;
        document.querySelector(".number").textContent = guessNUmber;
    } else if (inputValue > guessNUmber) {
        document.querySelector(".message").textContent = "Too high";
        scoreCounter();
    } else if (guessNUmber > inputValue) {
        document.querySelector(".message").textContent = "Too low"
        scoreCounter();
    }
})


document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.body.style.backgroundColor = "#222";
    guessNUmber = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").textContent = 0;





})