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
function operate(op: string, x: number, y: number) {
  let result = 0;
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
let buttons = document.querySelectorAll<HTMLElement>(".button");
buttons.forEach((button) => {
  button.addEventListener("click", calculator);
});
let number1 = " ";
let number2;
let operation;
let opArray = [];
let i = 0;
let isNumber = true;
function setNumber(e) {
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
    let aux = opArray.pop();
    opArray.push(aux.slice(0, -1));
    if (aux == "") {
      isNumber = false;
    }
  } else {
    opArray.pop();
  }
}
function displayResult() {}
function displayOperations() {
  let displayvalue = document.querySelector<HTMLElement>(".currentOperation");

  displayvalue.textContent = opArray.join(" ");
}
