// // if
// const isUserLoggedIn = true;
// const temperature = 41;

// if (2 == "2") {
//   console.log("Executed the flow");
// }

// console.log("Hello Mahesh");

// if (temperature == 41) {
//   console.log("Less than 50");
// } else {
//   console.log("temperature is greatar than 50");
// }

// const score = 200;
// if (score >= 100) {
//   let power = "sky";
//   console.log("User powr : " + power);
// }

let balance = 1000;
if (balance < 500) {
  console.log("Less than 500");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = false;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy the course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User Logged in");
}
