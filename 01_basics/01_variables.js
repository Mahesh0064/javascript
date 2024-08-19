"use strict"; //treat al js code as newer version

const accountId = 54956;
let accountEmail = "mahiadsvm@gmail.com";
var accountPassword = "12345";
accountCity = "Lucknow";

//accountId = 23;  /// not allowed

accountEmail = "java@gmail.com";
accountPassword = "java@123";
console.log(accountId);
console.log(accountCity);
/**
 * prefer not to use var because of issue in block scope and functioal scope
 *
 *
 */

console.log(accountEmail);
console.log(accountPassword);
console.table([accountEmail, accountId, accountPassword]);
