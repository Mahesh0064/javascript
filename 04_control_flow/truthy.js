//const userEmail = "Mahesh@ai.com";
const userEmail = [];

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't have user email");
}

// falsy value
//false, 0,-0, null,undefined, NaN, BigInt 0n,"";

// truthy value
//true, 1, "0","false"," ", [], {}, function(){},

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//Nullish coalescing Operator (??)? : null undefined;

let val;
//val = 5 ?? 10;
//val = null ?? 10;
//val = undefined ?? 100;
val = null ?? 10 ?? 200;
console.log(val);
