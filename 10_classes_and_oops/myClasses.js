// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encrptedPassword() {
//     return `${this.password}abc `;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()} `;
//   }
// }

// const chai = new User("Rohit Hitman", "rohit@gmail.com", "45rohit");

// console.log(chai);
// console.log(chai.encrptedPassword());
// console.log(chai.changeUsername());

/// beehind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encrptedPassword = function () {
  return `${this.password}abc `;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}abc `;
};

const tea = new User("Rohit Hitman tea", "rohit@teagmail.com", "45rohittea");
console.log(tea);
console.log(tea.encrptedPassword());
console.log(tea.changeUsername());
