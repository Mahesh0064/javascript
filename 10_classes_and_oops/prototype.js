let myName = "Mahesh                               ";
console.log(myName.length);
console.log(myName.trueLength);

let myHero = ["Thar", "Scarpio", "Bullet"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is  ${this.spiderman} `);
  },
};

Object.prototype.mahesh = function () {
  console.log(`Mahesh is present in all objects`);
};

Array.prototype.sayRohitSharma = function () {
  console.log(
    `The highest indivisual score is 264 that is named for our hitman Rohit Sharma`
  );
};

//heroPower.mahesh();
myHero.mahesh();
myHero.sayRohitSharma();
//Array.sayRohitSharma();

let anotherUsername = "ChaiaurCode         ";

String.prototype.trueLength = function () {
  console.log(` ${this} `);
  console.log(` ${this.name} `);
  console.log(`True  length is the  ${this.trim().length} `);
};

anotherUsername.trueLength();
"mahesh@tcs".trueLength();
"ICETea".trueLength();
