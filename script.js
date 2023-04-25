let uScreen = document.querySelector(".screen-upper");
let lScreen = document.querySelector(".screen-lower");

const plusBt = document.querySelector(".plus");
const minusBt = document.querySelector(".minus");
const multBt = document.querySelector(".multiply");
const divideBt = document.querySelector(".divide");
const equalBt = document.querySelector(".equal");
const clearBt = document.querySelector(".clear");
const reverseBt = document.querySelector(".reverse");
const deleteBt = document.querySelector(".del");

let num1 = 0;
let num2 = 0;
let total = 0;
let operand = "";
let done = false;

//Loop through all numbers and add click event
const numbers = document.getElementsByClassName("number");
for (let num of numbers) {
  numbers[num.innerText].addEventListener("click", () => {
    lScreen.innerText += `${numbers[num.innerText].innerText}`;
  });
}

//Plus button
plusBt.addEventListener("click", () => {
  if (!operand) {
    num1 = lScreen.innerText;
    operand = "+";
    uScreen.innerText = `${num1} ${operand}`;
    lScreen.innerText = "";
  } else {
    num2 = lScreen.innerText;
    if (total) num1 = total;
    num2 = lScreen.innerText;
    total = operate(num1, num2, operand);
    operand = "+";
    uScreen.innerText = `${total} ${operand} `;
    lScreen.innerText = "";
  }
});

//Minus button
minusBt.addEventListener("click", () => {
  if (!operand) {
    num1 = lScreen.innerText;
    operand = "-";
    uScreen.innerText = `${num1} ${operand}`;
    lScreen.innerText = "";
  } else {
    num2 = lScreen.innerText;
    if (total) num1 = total;
    num2 = lScreen.innerText;
    total = operate(num1, num2, operand);
    operand = "-";
    uScreen.innerText = `${total} ${operand} `;
    lScreen.innerText = "";
  }
});

//Multiplication button
multBt.addEventListener("click", () => {
  if (!operand) {
    num1 = lScreen.innerText;
    operand = "*";
    uScreen.innerText = `${num1} ${operand}`;
    lScreen.innerText = "";
  } else {
    num2 = lScreen.innerText;
    if (total) num1 = total;
    num2 = lScreen.innerText;
    total = operate(num1, num2, operand);
    operand = "*";
    uScreen.innerText = `${total} ${operand} `;
    lScreen.innerText = "";
  }
});

//Divide button
divideBt.addEventListener("click", () => {
  if (!operand) {
    num1 = lScreen.innerText;
    operand = "/";
    uScreen.innerText = `${num1} ${operand}`;
    lScreen.innerText = "";
  } else {
    num2 = lScreen.innerText;
    if (total) num1 = total;
    num2 = lScreen.innerText;
    total = operate(num1, num2, operand);
    operand = "/";
    uScreen.innerText = `${total} ${operand} `;
    lScreen.innerText = "";
  }
});

//Result button
equalBt.addEventListener("click", () => {
  if (operand) {
    if (total) num1 = total;
    num2 = lScreen.innerText;
    total = operate(num1, num2, operand);
    uScreen.innerText = `${num1} ${operand} ${num2} = `;
    lScreen.innerText = total;
    operand = "";
    done = true;
    total = 0;
  }
});

//Calls math functions
let operate = (num1, num2, operand) => {
  switch (operand) {
    case "+":
      return +num1 + +num2;
      break;
    case "-":
      return +num1 - +num2;
      break;
    case "*":
      return +num1 * +num2;
      break;
    case "/":
      return +num1 / +num2;
      break;
  }
};

/* let addNums = (num1, num2) => {
  return +num1 + +num2;
};

let subNums = (num1, num2) => {
  return +num1 - +num2;
};

let multNums = (num1, num2) => {
  return +num1 * +num2;
};

let divideNums = (num1, num2) => {
  return +num1 / +num2;
}; */

//Transform to negative/positive
let transform = () => {
  lScreen.innerText *= -1;
};

reverseBt.addEventListener("click", () => transform());

//Clear screen and all variables
clearBt.addEventListener("click", () => {
  clearScreen();
});

let clearScreen = () => {
  num1 = 0;
  num2 = 0;
  operand = "";
  total = 0;
  used = false;
  uScreen.innerText = "";
  lScreen.innerText = "";
};

//Delete number
deleteBt.addEventListener("click", () => {
  lScreen.innerText = lScreen.innerText.slice(0, -1);
});

/* let a = 2;
let b = 2;
let c = 0;
let sign = "minus";
if (sign == "+") c = a + b;
console.log(c);

//will go inside = and call function for operation, 2 parameters
switch (sign) {
  case "plus":
    console.log("plus");
    break;

  case "minus":
    console.log("minus");
    break;
}
 */
