const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

// for (const key in myObject) {
//   //console.log(myObject[key]);
//   console.log(` ${key} = short key is for ${myObject[key]}`);
// }

const programming = ["js", "java", "C", "C++", "C#", "Python"];
for (const key in programming) {
  console.log(programming[key]);
}
