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
