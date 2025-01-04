const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const mulBtn = document.querySelector("#mul");
const divBtn = document.querySelector("#div");

const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");

const resultE1 = document.querySelector("#result");

function calculate(operation) {
  const num1Val = Number(num1.value);
  const num2Val = Number(num2.value);

  if (num1Val.value === "" || num2Val.value === "") {
    resultE1.textContent = "Please enter both numbers";
  } else if (isNaN(num1Val) || isNaN(num2Val)) {
    resultE1.textContent = "Please enter valid numbers";
  } else {
    let result;
    switch (operation) {
      case "add":
        result = num1Val + num2Val;
        break;
      case "sub":
        result = num1Val - num2Val;
        break;
      case "mul":
        result = num1Val * num2Val;
        break;
      case "div":
        if (num2Val !== 0) {
          result = num1Val / num2Val;
        } else {
          result = "Can't divide by 0";
        }
        break;
      default:
        result = "";
        break;
    }
    resultE1.textContent = result;
    clearInput();
  }
}
function clearInput() {
  num1.value = "";
  num2.value = "";
}
addBtn.addEventListener("click", () => {
  calculate("add");
});
subBtn.addEventListener("click", () => {
  calculate("sub");
});
mulBtn.addEventListener("click", () => {
  calculate("mul");
});
divBtn.addEventListener("click", () => {
  calculate("div");
});

// addBtn.addEventListener('click', () => {
//   const sum = Number(num1.value) + Number(num2.value);
//   result.textContent = sum;
// });
// subBtn.addEventListener('click', () => {
//   const sub = Number(num1.value) - Number(num2.value);
//   result.textContent = sub;
// });

// mulBtn.addEventListener('click', () => {
//   const mul = Number(num1.value) * Number(num2.value);
//   result.textContent = mul;
// });

// divBtn.addEventListener('click', () => {
//   const div = Number(num1.value) / Number(num2.value);
//   result.textContent = div;
// });

// autre methode
// function calculate() {
//   const num1 = document.querySelector('#number1').value;
//   const num2 = document.querySelector('#number2').value;
//   const operator = document.querySelector('#operator').value;
//   const result = document.querySelector('#result');

//   if (operator === '+') {
//     result.textContent = Number(num1) + Number(num2);
//   } else if (operator === '-') {
//     result.textContent = Number(num1) - Number(num2);
//   } else if (operator === '*') {
//     result.textContent = Number(num1) * Number(num2);
//   } else if (operator === '/') {
//     result.textContent = Number(num1) / Number(num2);
//   }
// }
