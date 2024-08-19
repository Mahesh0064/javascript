let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const num of arr) {
//   console.log(num);
// }

// const greeting = "Hello World";

// for (const greet of greeting) {
//   console.log(` Each char is ${greet}`);
// }

/// Map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State Of America");
map.set("Fr", "France");
map.set("IN", "India");

//console.log(map);

for (const [key, value] of map) {
  console.log(key, " : => ", value);
}

const myObject = {
  game1: "NFS",
  game2: "spiderman",
  game3: "Cricket",
  game4: "football",
};

for (const [key, value] of myObject) {
  console.log(key, " : => ", value);
}
