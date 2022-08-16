"use strict";

const userFirstName = prompt("Please enter your first name", "");
const userLastName = prompt("Please enter your last name", "");
const userNickName = prompt("Please enter your nickname", "");

if (
  (userFirstName && userLastName && userNickName) ||
  (userFirstName && userLastName)
) {
  console.log(`Hello, ${userFirstName} ${userLastName}`);
} else if (userLastName && userNickName) {
  console.log(`Hello, ${userNickName}`);
} else if ((userFirstName && userNickName) || userFirstName) {
  console.log(`Hello, ${userFirstName}`);
} else {
  console.log("Noname");
}

const enterNumber = prompt("Please enter any number");

if (!isNaN(enterNumber) && enterNumber !== null && enterNumber !== "") {
  const strictInequality = enterNumber < 100 ? "less" : "more";
  const evenOrOddNumber = enterNumber % 2 === 0 ? "even" : "odd";
  const positiveOrNegativeNumber = enterNumber >= 0 ? "positive" : "negative";
  const fractionalOrNonNumber =
    enterNumber % 1 === 0 ? "non-fractional" : "fractional";

  console.log(
    `The number you entered is ${strictInequality} than one hundred, ${evenOrOddNumber}, ${positiveOrNegativeNumber}, ${fractionalOrNonNumber}`
  );
} else if (enterNumber !== null && enterNumber !== "") {
  const messageInTheEnteredLanguage =
    enterNumber.codePointAt(0) < 1039
      ? "Please enter number"
      : "Пожалуйста, введите число";
  console.log(messageInTheEnteredLanguage);
} else {
  console.log("Incorrect data entered");
}

const enterYourName = prompt("Please, enter your name"),
  enterYourAge = +prompt("Please, enter your age"),
  message = enterYourAge >= 18 ? `Welcome, ${enterYourName}` : `Sorry, ${enterYourName}, access denied`;

console.log(message);

const enterNumberInTheRange = +prompt(
    "Please enter a number between 0 and 9",
    "0"
  );
  let rangeResult = "";
  
  switch (true) {
    case enterNumberInTheRange === 0:
      rangeResult = "zero";
      break;
  
    case enterNumberInTheRange === 1:
      rangeResult = "one";
      break;
  
    case enterNumberInTheRange === 2:
      rangeResult = "two";
      break;
  
    case enterNumberInTheRange === 3:
      rangeResult = "three";
      break;
  
    case enterNumberInTheRange === 4:
      rangeResult = "four";
      break;
  
    case enterNumberInTheRange === 5:
      rangeResult = "five";
      break;
  
    case enterNumberInTheRange === 6:
      rangeResult = "six";
      break;
  
    case enterNumberInTheRange === 7:
      rangeResult = "seven";
      break;
  
    case enterNumberInTheRange === 8:
      rangeResult = "eight";
      break;
  
    case enterNumberInTheRange === 9:
      rangeResult = "nine";
      break;
  
    case isNaN(enterNumberInTheRange):
      rangeResult = "Data entered incorrectly";
      break;
  
    default:
      rangeResult = "Enter a number in the specified range";
      break;
  }
  
  console.log(rangeResult);