function sum(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
function subtract(x, y) {
    return x - y;
}
function divide(x, y) {
    return x / y;
}
function operate(op, x, y) {
    var result = 0;
    switch (op) {
        case "sum":
            result = sum(x, y);
            break;
        case "subtract":
            result = subtract(x, y);
            break;
        case "multiply":
            result = multiply(x, y);
            break;
        case "divide":
            result = divide(x, y);
            break;
        default:
            result = 0;
            break;
    }
    return result;
}
var buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
    button.addEventListener("click", calculator);
});
var number1 = " ";
var number2;
var operation;
var opArray = [];
var i = 0;
var isNumber = true;
function setNumber(e) {
    number1 = number1 + e.target.textContent;
    if (isNumber == true) {
        opArray.pop();
        opArray.push(number1);
    }
    else {
        opArray.push(number1);
        isNumber = true;
    }
}
function setOperation(e) {
    if (isNumber == true) {
        opArray.push(e.target.textContent);
        number1 = "";
        isNumber = false;
    }
}
function calculator(e) {
    switch (e.target.value) {
        case "number":
            setNumber(e);
            break;
        case "operation":
            setOperation(e);
            break;
        case "DEL":
            del();
        default:
            break;
    }
    displayOperations();
    displayResult();
}
function del() {
    if (isNumber) {
        var aux = opArray.pop();
        opArray.push(aux.slice(0, -1));
        if (aux == "") {
            isNumber = false;
        }
    }
    else {
        opArray.pop();
    }
}
function displayResult() { }
function displayOperations() {
    var displayvalue = document.querySelector(".currentOperation");
    displayvalue.textContent = opArray.join(" ");
}
