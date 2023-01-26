function sum(x: number, y: number) {
  return x + y;
}
function multiply(x: number, y: number) {
  return x * y;
}
function subtract(x: number, y: number) {
  return x - y;
}
function divide(x: number, y: number) {
  return x / y;
}
function operate(op: string, x: number = 0, y: number = 0) {
  let result = 0;
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
let buttons = document.querySelectorAll<HTMLElement>(".button");
buttons.forEach((button) => {
  button.addEventListener("click", calculator);
});
let number1 = "";
let number2 = "";
let operation = "";
let opArray = [];
let i = 0;
let isNumber = true;

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
    case "ans":
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
  } else {
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
  } else if (operation != "") {
    operation = "";
  } else {
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
  let result = operate(operation, parseInt(number1), parseInt(number2));

  displayResult(result);

  if (operation != "") {
    number1 = result.toString();
    number2 = "";
    operation = "";
  }
  displayOperations();
}
function displayOperations() {
  let displayvalue = document.querySelector<HTMLElement>(".currentOperation");
  displayvalue.textContent = number1 + operation + number2;
}
function displayResult(result: number, clc: boolean = false) {
  let finalResult = document.querySelector<HTMLElement>(".resultLabel");
  if (clc == true) {
    finalResult.textContent = "";
  } else {
    finalResult.textContent = result.toString();
  }
}
