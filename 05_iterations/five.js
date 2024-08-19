const coding = ["js", "ruby", "C", "C++", "C#", "Python"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// console.log("By other way we can print it");

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   //console.log(item);
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "C",
    languageFileName: "c",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
