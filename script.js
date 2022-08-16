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