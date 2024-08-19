const user = {
  username: "Mahesh Kumar",
  loggedIn: false,
  loginCount: 10,
  getUserDetails: function () {
    console.log("I love my Parents");
    console.log(this.username);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.loggedIn);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, loggedIn) {
  this.username = username;
  this.loggedIn = loggedIn;
  this.loginCount = loginCount;
  this.greeting = function () {
    console.log("This function is in inside function", this.username);
  };
  return this;
}

const userOne = new User("Rohit Sharma", 45, false);
const userTwo = new User("Virat Kohli", 18, true);

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
