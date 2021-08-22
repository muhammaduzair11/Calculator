const numbers = document.querySelectorAll('.number');
let result = document.querySelector('.result');
let operators = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let isEqual = document.querySelector('.equal');
let previousNumber;
let currentNumber;
let operatorSaver;
parseInt(result.innerText)
// parseInt(result)
// Numbers buttons
numbers.forEach(item => {
  item.addEventListener("click", () => {
    // console.log(typeof (parseInt(result)));
    if (result.innerText === '+' || result.innerText === '-' || result.innerText === 'X' || result.innerText === '÷') {
      result.innerText = null;
    } else {
      result.innerText += item.innerText;
    }
  })
});
// Operator buttons +, -, x, ÷
operators.forEach(item => {
  item.addEventListener("click", () => {
    previousNumber = parseInt(result.innerText);
    result.innerText = null;
    result.innerText += item.innerText;
    operatorSaver = item.innerText;

  })
});
parseInt(previousNumber);

// Equal Button = 
isEqual.addEventListener("click", () => {
  currentNumber = parseInt(result.innerText);
  switch (operatorSaver) {
    case "X":
      result.innerText = previousNumber * currentNumber;
      break;
    case "+":
      result.innerText = previousNumber + currentNumber;
      break;
    case "-":
      result.innerText = previousNumber - currentNumber;
      break;
    case "÷":
      result.innerText = previousNumber / currentNumber;
      break;
    default:
      result.innerText = result.innerText = 'Something went wrong';
  };
})
// Equal button
clear.addEventListener("click", () => {
  result.innerText = null;
  previousNumber = null;
  operatorSaver = null;
  currentNumber = null;
})