const tinderUser = new Object(); // singleton

const tinderUser2 = {}; // non-singleton
tinderUser.id = "123dhbc";
tinderUser.name = "Daren Sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
  email: "some@gamil.com",
  fullname: {
    userfullname: {
      firstname: "Mahesh",
      lastname: "Kumar",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };
//const obj = { ...obj1, ...obj2 };
//const obj3 = { obj1, obj2 };
const obj4 = Object.assign({}, obj1, obj2, obj3);
//console.log(obj4);

const user = [
  {
    id: 1,
    email: "mahiadsvm@gamil.com",
    name: "mahesh",
  },
  {
    id: 2,
    email: "rameshadsvm@gamil.com",
    name: "ramesh",
  },
  {
    id: 3,
    email: "sureshadsvm@gamil.com",
    name: "suresh",
  },
  {
    id: 4,
    email: "ganeshadsvm@gamil.com",
    name: "ganesh",
  },
];

// user[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// destructuring of object

const course = {
  coursename: "Js in Hindi",
  price: 999,
  courseInstructor: "Mahesh",
};

// //course.courseInstructor
// const { courseInstructor } = course;
// console.log(courseInstructor);

//API
