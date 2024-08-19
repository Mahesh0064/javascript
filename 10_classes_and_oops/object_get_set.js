const User = {
  _email: "rohitsharma@gmail.com",
  _password: "rohit45@gmail.com",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._password = value;
  },
  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
console.log(tea.password);
