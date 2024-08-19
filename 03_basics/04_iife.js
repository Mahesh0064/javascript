//Immediately Invoked function Expression (IIFE)

(function chai() {
  console.log("BD connected");
})();

//chai();
((name) => {
  console.log("BD connected with chai aur code  " + name);
})("Rohit Sharma");
