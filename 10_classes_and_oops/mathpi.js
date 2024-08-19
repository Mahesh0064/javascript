const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
//console.log(descriptor);

const chai = {
  name: "ginger wala chai",
  price: 250,
  isAvailable: true,
  chaiOrder: function () {
    console.log("Chai abhi tk nhi bna hua hai");
  },
};

// console.log(chai);
// console.log(chai.price);
// console.log(chai.name);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value} `);
  }
}
