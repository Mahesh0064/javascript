function SetUsername(username) {
  /// complex DB calls
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("Rohit Sharma", "hitman@45.com", "hitman45");

console.log(chai);
