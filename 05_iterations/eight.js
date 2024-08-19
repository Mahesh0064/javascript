const myNums = [1, 2, 3, 4, 5];

let init = 0;
const myTotal = myNums.reduce(function (acc, currValue) {
  console.log(` Accumulator : ${acc} and currValue : ${currValue}`);
  return acc + currValue;
}, init);

//console.log("Total Sum is : " + myTotal);

//// By Arrow function

// const result = myNums.reduce((acc, currValue) => {
//   console.log(` Accumulator : ${acc} and currValue : ${currValue}`);
//   return acc + currValue;
// }, init);

// console.log(result);

// Another examples

const shoppingCart = [
  {
    itemName: "java script",
    price: 2999,
  },
  {
    itemName: "java ",
    price: 3999,
  },
  {
    itemName: "Python",
    price: 299,
  },
  {
    itemName: "C language",
    price: 999,
  },
  {
    itemName: "Mobile Development",
    price: 4999,
  },
  {
    itemName: "Data Science",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log("Totao Price what we need to pay here : " + priceToPay + " Rs ");
