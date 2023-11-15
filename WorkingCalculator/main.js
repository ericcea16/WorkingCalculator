// JavaScript functions
let displayBox = document.getElementById('display-box');
let displayValue = '0';

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    displayBox.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    displayBox.innerText = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        displayBox.innerText = displayValue;
    } catch (error) {
        displayBox.innerText = 'Error';
    }
}