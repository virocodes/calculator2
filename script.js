//calculator
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let n1;
let n2;
let op;

function operate(op, a, b) {
    switch(op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

let displayValue = "0";
const display = document.querySelector('.display');
display.textContent = displayValue;

const buttons = document.querySelectorAll('.edit');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        displayValue += button.textContent;
        display.textContent = displayValue;
    })
});