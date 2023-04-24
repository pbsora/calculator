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

const numbers = document.getElementsByClassName("number");

/* for (let i = 0; i <= numbers.length - 1; i++) {
  numbers[i].addEventListener("click", () => {
    lScreen.innerText += `${numbers[i].innerText}`;
  });
}
 */
for (let num of numbers) {
  numbers[num.innerText].addEventListener("click", () => {
    lScreen.innerText += `${numbers[num.innerText].innerText}`;
  });
}

/* document
  .querySelector(".zero")
  .addEventListener("click", () => (lScreen.innerText += "0"));
 */
plusBt.addEventListener("click", () => {
  num1 = lScreen.innerText;
  operand = "plus";
  console.log(num1, operand);
  uScreen.innerText = lScreen.innerText + " + ";
  lScreen.innerText = "";
});

equalBt.addEventListener("click", () => {
  if (!operand) {
    window.alert("Invalid");
  } else {
    num2 = lScreen.innerText;
    uScreen.innerText += " " + lScreen.innerText + " = ";
    lScreen.innerText = addNums(num1, num2);
  }
});

clearBt.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  operand = "";
  lScreen.innerText = "";
  uScreen.innerText = "";
});

let addNums = (num1, num2) => {
  return +num1 + +num2;
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
