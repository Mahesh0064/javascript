let a = 300;

// if (true) {
//   let a = 10;
//   var b = 20;
//   const c = 30;
// }

// console.log(a);
// console.log(b);
//console.log(c);

//// level of scoping

// function one() {
//   const username = "Mahesh";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   //console.log(website);
//   two();
// }
//one();

// if (true) {
//   const username = "hitesh";
//   if (username === "hitesh") {
//     const website = "  youtube";
//     console.log(username + website);
//   }

//   //console.log(website);
// }

// //console.log(username);

/// *************************************** interesting *************************************************

function addOne(num) {
  return num + 1;
}

console.log(addOne(5));

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
