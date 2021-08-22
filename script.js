const numbers = document.querySelectorAll('.number');
let result = document.querySelector('.result');
let operators = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let isEqual = document.querySelector('.equal');
let previousNumber;
parseInt(result)
parseInt(previousNumber);

numbers.forEach(item => {
  item.addEventListener("click", () => {
    result.innerText += item.innerText;
    console.log(typeof (parseInt(result)));
  })
});

operators.forEach(item => {
  item.addEventListener("click", () => {
    previousNumber = result.innerText;
  })
});

isEqual.addEventListener("click", () => {
  result.innerText = parseInt(result.innerText) + 2;
})

clear.addEventListener("click", () => {
  result.innerText = null;
})