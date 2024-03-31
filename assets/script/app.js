'use strict';

const body = document.querySelector('body');
const reset = document.querySelector('.reset-button');
const submit= document.querySelector('.submit-button');
const guesses = document.querySelector('.guesses-left');
const input = document.querySelector('.input');
const output = document.querySelector('.output p');
const outputPanel = document.querySelector('.output');
let defaultGuess = 5;
let guess;
let generatedNum;

function genColor() {
    let colorNum = Math.floor(Math.random() * 128);
    return colorNum;
}

function rgbBuilder() {
    let rgb = `rgb(${genColor()}, ${genColor()}, ${genColor()})`;
    return rgb;
}

function genNumber() {
    let numGenerated = Math.floor(Math.random() * 26);
    return numGenerated;
}

function guessCheck(num) {
    guess = parseInt(input.value);
    let reaction;
    while (defaultGuess > 0) {
        if (isNaN(guess) || guess < 0 || guess > 25) {
            reaction = '<i class="fa-solid fa-face-rolling-eyes"></i>';
            output.innerHTML = `Out of bounds ${reaction}`;
            return;
        }
        
        generateReaction(guess, num);

        if (input.value == num) { reset.classList.add('display'); return; }
        
        defaultGuess--;
        break;
    }

    if (defaultGuess === 0) {
        reaction = '<i class="fa-solid fa-face-grin-wink"></i>';
        reset.classList.add('display');
        output.innerHTML = `My number is ${num} ${reaction}`;
    }
}

function generateReaction(guess, num) {
    let emoji = guess > num || guess < num ?
    '<i class="fa-solid fa-face-grin-tongue-wink"></i>' :
    '<i class="fa-solid fa-face-grin-beam"></i>';

    output.innerHTML = `${guess > num ? 'My number is smaller' : 
    guess < num ? 'My number is bigger' : 'Great guess! You won!'} ${emoji}`;
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
    input.value = 0;
    pageTheme();
    generatedNum = genNumber();
    reset.classList.remove('display');
    outputPanel.classList.remove('visible');
}

function pageReset() {
    input.value = 0;
    pageTheme();
    generatedNum = genNumber();
    guesses.innerText = `Guesses: ${defaultGuess}`;
}

submit.addEventListener('click', () => {
    guessCheck(generatedNum);
    outputPanel.classList.add('visible');
    guesses.innerText = `Guesses: ${defaultGuess}`;
});

reset.addEventListener('click', resetGame);
window.addEventListener('load', pageReset);