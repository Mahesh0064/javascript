/// Objects

// 1. singleton // 2. object literals

const mySym = Symbol("Key 1");

const jsUser = {
  name: "Mahesh",
  "full name": "Mahesh Kumar Gupta",
  [mySym]: "myKey 1",
  age: 24,
  location: "U P",
  email: "mahiadsvm@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.location);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);

// jsUser.email = "hitesh@chatgpt.com";
// Object.freeze(jsUser);
// jsUser.email = "hitesh@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello Js User");
};

jsUser.greetingTwo = function () {
  console.log(`Hello Js User greeting Two ${this.age} `);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
