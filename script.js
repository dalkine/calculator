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
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    var result = 0;
    switch (op) {
        case "+":
            result = sum(x, y);
            break;
        case "-":
            result = subtract(x, y);
            break;
        case "*":
            result = multiply(x, y);
            break;
        case "/":
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
var number1 = "";
var number2 = "";
var operation = "";
var opArray = [];
var i = 0;
var isNumber = true;
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
            break;
        case "C":
            clear();
            break;
        case "equal":
            resolve();
            break;
        default:
            break;
    }
    displayOperations();
}
/** multiple expression calculator v.2
 * function setNumber(e) {
  number1 = number1 + e.target.textContent;
  if (isNumber == true) {
    opArray.pop();
    opArray.push(number1);
  } else {
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
function clear() {
  opArray = [];
  number1 = "";
}
function del() {
  let aux = opArray.pop();
  if (aux != "") {
    opArray.push(aux.slice(0, -1));
    number1 = "";
  } else {
    opArray.pop();
  }
}
function displayResult() {}
function displayOperations() {
  let displayvalue = document.querySelector<HTMLElement>(".currentOperation");

  displayvalue.textContent = opArray.join(" ");
}
 * **/
function setNumber(e) {
    if (operation == "") {
        number1 = number1 + e.target.textContent;
    }
    else {
        number2 = number2 + e.target.textContent;
    }
}
function setOperation(e) {
    if (number2 != "") {
        resolve();
    }
    operation = e.target.textContent;
}
function del() {
    if (number2 != "") {
        number2 = number2.slice(0, -1);
    }
    else if (operation != "") {
        operation = "";
    }
    else {
        number1 = number1.slice(0, -1);
    }
}
function clear() {
    number1 = "";
    number2 = "";
    operation = "";
    displayResult(0, true);
}
function resolve() {
    var result = operate(operation, parseInt(number1), parseInt(number2));
    displayResult(result);
    if (operation != "") {
        number1 = result.toString();
        number2 = "";
        operation = "";
    }
    displayOperations();
}
function displayOperations() {
    var displayvalue = document.querySelector(".currentOperation");
    displayvalue.textContent = number1 + operation + number2;
}
function displayResult(result, clc) {
    if (clc === void 0) { clc = false; }
    var finalResult = document.querySelector(".resultLabel");
    if (clc == true) {
        finalResult.textContent = "";
    }
    else {
        finalResult.textContent = result.toString();
    }
}
