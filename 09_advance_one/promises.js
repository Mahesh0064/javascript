////// 1st promise ////////////////////////////////
// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async tsak
//   // DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promised consumed");
// });

// /// 2nd promised ///////////////////////
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2 is completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// /// 3 rd promise ///////////////////////
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "mahesh", email: "mahi@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

///////////////////////////////// 4th promised   /////////////////////////////////////////////////////

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Rohit Sharma", password: "123" });
    } else {
      reject("ERROR : Something went  wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() =>
    console.log(
      "Finally code executed here || The promise either resolved or rejected"
    )
  );

/// 5th Promise  ///////////////////////////////

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "javascript", password: "java123" });
    } else {
      reject("ERROR : JS went wrong");
    }
  }, 1000);
});

async function consumePromisePive() {
  try {
    const response = await promiseFive;

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromisePive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("ERROR : JSON data", error);
//   }
// }

//getAllUsers();
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
