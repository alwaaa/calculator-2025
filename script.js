const container = document.getElementById("container");
const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let displayValue = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let currentInput = "";
let result;

let operatorMap = {
    "+": (firstNumber,secondNumber) => Number(firstNumber) + Number(secondNumber),
    "-": (firstNumber,secondNumber) => Number(firstNumber) - Number(secondNumber),
    "X": (firstNumber,secondNumber) => Number(firstNumber) * Number(secondNumber),
    "/": (firstNumber,secondNumber) => Number(firstNumber) / Number(secondNumber),
}

const handleFirstNumber = (event) => {
    const button = event.target;
    if (button.classList.contains("number") && (!operator)) {
        currentInput += button.textContent;
        displayValue.value = currentInput;
        firstNumber = currentInput;
        console.log(`Первое число: ${firstNumber}`);
    } else if (button.classList.contains("operator")) {
        operator = button.textContent;
        displayValue.value = currentInput + operator;
        console.log(`Оператор: ${operator}`);
    } else if (button.classList.contains("number") && (operator)) {
        secondNumber += button.textContent;
        displayValue.value = currentInput + operator + secondNumber;
        console.log(`Второе число: ${secondNumber}`);
    } else if (button.classList.contains("calculate")) {
        result = calculate();
        displayValue.value = result;
        newCalc();
    } else if (button.classList.contains("clear")) {
        clearNumAndOps();
    }
}

const calculate = () => {
        switch(operator) {
        case "+":
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case "-":
            result = Number(firstNumber) - Number(secondNumber);
            break;
        case "/":
            if (secondNumber > 0) {
                result = (Number(firstNumber) / Number(secondNumber)).toFixed(7);
            } else {
                result = "LMAO";
            }
            break;
        case "X":
            result = Number(firstNumber) * Number(secondNumber);
            break;
    }
    return result;
}

buttons.forEach(button => {
    button.addEventListener("click", handleFirstNumber);
})

const newCalc = () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    currentInput = "";
}

const clearNumAndOps = () => {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        currentInput = "";
        displayValue.value = "";
}







