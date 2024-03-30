'use strict';

const body = document.querySelector('body');
const reset = document.querySelector('.reset-button');
const submit= document.querySelector('.submit-button');
const guesses = document.querySelector('.guesses-left');
const input = document.querySelector('.input');
const output = document.querySelector('.output p');
let defaultGuess = 5;
let generatedNum;

function genColor() {
    let colorNum = Math.floor(Math.random() * 256);
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
    while (defaultGuess > 0) {
        let guess = input.value;
        if (guess > 25) {
            output.innerText = 'Out of bounds';
            return;
        }
        
        output.innerText = guess > num ? 'My number is smaller' : 
        guess < num ? 'My number is bigger' : 'Great guess! You won!';
        
        if (input.value == num) { 
            reset.classList.add('display');
            return;
        }
        
        defaultGuess--;
        break;
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
    input.value = 0;
    pageTheme();
    generatedNum = genNumber();
    reset.classList.remove('display');
}

function pageReset() {
    input.value = 0;
    pageTheme();
    generatedNum = genNumber();
    guesses.innerText = `Guesses: ${defaultGuess}`;
}

submit.addEventListener('click', () => {
    guessCheck(generatedNum);
    guesses.innerText = `Guesses: ${defaultGuess}`;
});

reset.addEventListener('click', resetGame);
window.addEventListener('load', pageReset);