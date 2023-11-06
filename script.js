//calculator
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let n1;
let n2;
let oper;

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

let displayValue = "";
const display = document.querySelector('.display');
display.textContent = displayValue;

const buttons = document.querySelectorAll('.edit');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        displayValue += button.textContent;
        display.textContent = displayValue;
    })
});

const ops = document.querySelectorAll('.op');

ops.forEach(op => {
    op.addEventListener('click', () => {
        displayValue += " " + op.textContent + " ";
        display.textContent = displayValue;
        oper = op.textContent;
    });
});

const equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    let parts = displayValue.split(" ");
    n1 = parts[0];
    n2 = parts[2];
    let answer = operate(oper, +(n1), +(n2));
    displayValue = answer;
    display.textContent = displayValue;
    n1 = "";
    n2 = "";
    oper = "";
});