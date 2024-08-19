/// functions
function myName() {
  console.log("M");
  console.log("A");
  console.log("H");
  console.log("E");
  console.log("S");
  console.log("H");
}
//myName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//   return number1 + number2;
// }

// const result = addTwoNumbers(89, 11);
// console.log("Result : " + result);

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("Please enter valid user name ");
//   }
//   return `${username} just logged in `;
// }

// console.log(loginUserMessage("Rohit Sharma"));

///////////

// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(30, 200, 300, 500));

// /// Object in function
// const user = {
//   username: "Hitesh",
//   price: 199,
// };

// function handleObject(anyobject) {
//   console.log(
//     `Username is ${anyobject.username} and price is ${anyobject.price} `
//   );
// }

// //handleObject(user);
// handleObject({
//   username: "Rohit Sharma",
//   price: 5000,
// });

//// Array in function

const myNewArray = [200, 300, 400, 5000];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
