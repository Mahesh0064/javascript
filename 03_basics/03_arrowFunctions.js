//// Arrow Functions

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to my website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// function chai() {
//   console.log(this);
// }

// chai();

// const chai = () => {
//   let username = "Rohit Sharma";
//   console.log(this.username);
// };

// chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

const addThree = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

console.log(addTwo(45, 32));
console.log(addThree(34, 45, 56));
