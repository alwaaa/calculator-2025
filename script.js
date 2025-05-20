const container = document.getElementById("container");
const body = document.querySelector("body");
body.appendChild(container);
const buttons = document.querySelectorAll(".buttons");
let displayValue = document.getElementById("display");


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let showOnDisplay = (value) => {
    buttons.forEach(button => {
        button.addEventListener("click" , () => {
            displayValue.textContent = value;
        });
    });
    return value;
};

let firstNumber;
let secondNumber;
let operator;