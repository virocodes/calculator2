//calculator
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let n1;
let n2;
let oper;
let typing = false;
let canDecimal = true;

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
        if (typing) {
            displayValue += button.textContent;
            display.textContent = displayValue;
        }
        else {
            displayValue = button.textContent;
            display.textContent = displayValue;
            typing = true;
        }
    })
});

const ops = document.querySelectorAll('.op');

ops.forEach(op => {
    op.addEventListener('click', () => {
        if (hasOperator(displayValue)) {
            let parts = displayValue.split(" ");
            n1 = parts[0];
            n2 = parts[2];
            let answer = operate(oper, +(n1), +(n2));
            displayValue = answer;
            display.textContent = displayValue;
        }
        displayValue += " " + op.textContent + " ";
        display.textContent = displayValue;
        oper = op.textContent;
        canDecimal = true;
        typing = true;
    });
});

const equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    if (displayValue) { 
        let parts = displayValue.split(" ");
        if (parts.length == 3) {
            n1 = parts[0];
            n2 = parts[2];
            let answer = operate(oper, +(n1), +(n2));
            displayValue = answer;
            display.textContent = displayValue;
            n1 = "";
            n2 = "";
            oper = "";
            typing = false;
            canDecimal = true;
        }
    }

});

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    displayValue = "0";
    display.textContent = displayValue;
    typing = false;
})

function hasOperator(dv) {
    for (let i = 0; i < dv.length; i++) {
        if (dv[i] == "+" || dv[i] == "-" || dv[i] == "*" || dv[i] == "/") {
            return true;
        }
    }
    return false;
}

const del = document.querySelector('.del');

del.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
});

const dec = document.querySelector('.dec');

dec.addEventListener('click', () => {
    if (canDecimal) {
        if (typing) {
            displayValue += ".";
            display.textContent = displayValue;
            canDecimal = false;
        }
        else {
            displayValue = "0.";
            display.textContent = displayValue;
            typing = true;
        }
    }
})
