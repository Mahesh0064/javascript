class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username} `);
  }
  static createId() {
    return "123@321";
  }
}

const mahesh = new User("Mahesh");
//console.log(mahesh.createId());
console.log(mahesh);

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
