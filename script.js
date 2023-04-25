let uScreen = document.querySelector(".screen-upper");
let lScreen = document.querySelector(".screen-lower");

const plusBt = document.querySelector(".plus");
const minusBt = document.querySelector(".minus");
const multBt = document.querySelector(".multiply");
const divideBt = document.querySelector(".divide");
const equalBt = document.querySelector(".equal");
const clearBt = document.querySelector(".clear");

let num1 = 0;
let num2 = 0;
let operand = "";
let total = 0;
let used = false;
let done = false;

const numbers = document.getElementsByClassName("number");

for (let num of numbers) {
  numbers[num.innerText].addEventListener("click", () => {
    /* if (done) clearScreen(), (done = false); */
    lScreen.innerText += `${numbers[num.innerText].innerText}`;
  });
}

plusBt.addEventListener("click", () => {
  if (!operand) {
    num1 = lScreen.innerText;
    operand = "+";
    uScreen.innerText = `${num1} ${operand}`;
    lScreen.innerText = "";
    console.log("aqui");
  } else {
    num2 = lScreen.innerText;
    if (total == 0) {
      total += addNums(num1, num2);
    } else {
      total = addNums(total, num2);
    }
    uScreen.innerText = `${total} ${operand} `;
    console.log("ou aqui");
    lScreen.innerText = "";
  }
});

equalBt.addEventListener("click", () => {
  if (operand) {
    if (total) num1 = total;
    num2 = lScreen.innerText;
    total = addNums(num1, num2);
    uScreen.innerText = `${num1} ${operand} ${num2} = `;
    lScreen.innerText = total;
    operand = "";
    done = true;
    total = 0;
  }
});

let operate = (num1, num2, operand) => {
  switch (operand) {
    case "+":
      return addNums(num1, num2);
      break;
    case "-":
      subNums(num1, num2);
  }
};

clearBt.addEventListener("click", () => {
  clearScreen();
});

let addNums = (num1, num2) => {
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
};

let clearScreen = () => {
  num1 = 0;
  num2 = 0;
  operand = "";
  total = 0;
  used = false;
  uScreen.innerText = "";
  lScreen.innerText = "0";
};

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
