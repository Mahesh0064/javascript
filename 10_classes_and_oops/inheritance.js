// /// Inheritance in Js

// const user = {
//   username: "Mahesh",
//   email: "email@gmail.com",
//   price: 2300,
// };
// const Teacher = {
//   makeVideo: true,
// };

// const TeachingSupport = {
//   isAvailable: false,
// };

// const TASupport = {
//   makeAssignment: "Js assisment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };

// Teacher__proto__ = user;

// /// modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher);

/// 2nd way ////////////////////////////////

class User {
  constructor(username) {
    this.username = username;
  }
  loginMe() {
    console.log(`USERNAME is ${this.username} `);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username} `);
  }
}

const chai = new Teacher("Munna hai", "munna@123.gmail.com", "12345");

chai.addCourse();

const specialChai = new User("Rahul Bhaiya");
specialChai.loginMe();

console.log(chai === specialChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
