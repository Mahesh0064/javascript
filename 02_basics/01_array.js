// Array
const myArr = [1, 3, 4, 5, 6, 7, 87, 54, 32];
const myHeors = ["saktiman", "nagrag", "kiran"];
const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(myArr);
console.log(myArr[1]);

// Array Methods
// myArr.push(90);
// console.log(myArr);
// myArr.push(91);
// console.log(myArr);
// myArr.push();
// console.log(myArr);

// myArr.unshift(9);
// //myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(87));

///  slice and splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);
