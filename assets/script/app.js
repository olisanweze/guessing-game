'use strict';

const body = document.querySelector('body');
const begin = document.querySelector('.begin-button');
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

function guessCheck(numGenerated) {
    while (defaultGuess > 0) {
        if (input > numGenerated) {
            output.innerText = 'My number is smaller';
            defaultGuess--;
        }   else if (input < numGenerated) {
            output.innerText = 'My number is bigger';
            defaultGuess--;
        }   else {
            output.innerText = 'Great guess! You won!';
        }
    }
}

function pageTheme() {
    let pageTheme = rgbBuilder();
    body.style.backgroundColor = pageTheme;
    begin.style.color = pageTheme;
    submit.style.color = pageTheme;
    input.style.color = pageTheme;
}

window.addEventListener('load', () => {
    pageTheme();
    guesses.innerText = `Guesses: ${defaultGuess}`;
    genNumber();
});