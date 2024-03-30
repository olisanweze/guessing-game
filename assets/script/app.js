'use strict';

const body = document.querySelector('body');
const reset = document.querySelector('.reset-button');
const submit= document.querySelector('.submit-button');
const guesses = document.querySelector('.guesses-left');
const input = document.querySelector('.input');
const output = document.querySelector('.output p');
let defaultGuess = 5;

function genColor() {
    let colorNum = Math.floor(Math.random() * 256);
    return colorNum;
}

function rgbBuilder() {
    let rgb = `rgb(${genColor()}, ${genColor()}, ${genColor()})`;
    return rgb;
}

function genNumber() {
    let numGenerated = Math.floor(Math.random() * 25);
    return numGenerated;
}

function guessCheck(num) {
    while (defaultGuess > 0) {
        let guess = parseInt(input.value);
        if (guess > num) {
            output.innerText = 'My number is smaller';
            defaultGuess--;
            break;
        }   else if (guess < num) {
            output.innerText = 'My number is bigger';
            defaultGuess--;
            break;
        }   else {
            output.innerText = 'Great guess! You won!';
            break;
        }
    }

    if (defaultGuess === 0) {
        reset.classList.add('display');
    }
}

function pageTheme() {
    let pageTheme = rgbBuilder();
    body.style.backgroundColor = pageTheme;
    reset.style.color = pageTheme;
    submit.style.color = pageTheme;
    input.style.color = pageTheme;
}

function resetGame() {
    defaultGuess = 5;
    guesses.innerText = `Guesses: ${defaultGuess}`;
    output.textContent = '';
    input.textContent = 0;
    reset.classList.remove('display');
}

submit.addEventListener('click', () => {
    let generatedNum = genNumber();
    guessCheck(generatedNum);
    guesses.innerText = `Guesses: ${defaultGuess}`;
});

reset.addEventListener('click', resetGame);

window.addEventListener('load', () => {
    pageTheme();
    genNumber();
    guesses.innerText = `Guesses: ${defaultGuess}`;
});