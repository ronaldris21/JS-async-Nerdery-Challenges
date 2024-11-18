/*
INSTRUCTIONS

1. create an array that contains 5 names, include 1 or more of the allowed usernames located in validate-user.js
2. iterate the array, keep an eye on performance, and validate every username with the function exported in validate-user.js
3. process and format every result, so that the program console.log the success results in a group, and the failure results in a group

Example:

Success

id:1
name: John

id:2
name: Mary

Failure

User Michael not allowed
User Benjamin not allowed

4. if you want to challenge yourself, add the needed logic so the program can read the array of names from the terminal
** check about node.js process.argv **

Example:

node solution.js name1,name2,name3, or
node solution.js name1 name2 name3

5. another challenge is: after you solve the challenge using callback style, in another file promisify the callback and solve it again
** give a look to node.js util.promisify, avoid to alter the validate-user.file **
*/

const { validateUser, printResults } = require("./validate-user");

function solution() {
  // YOUR SOLUTION GOES HERE
  const successUser = [];
  const failureUser = [];

  // you get your 5 names here
  let sampleUsers = ["Ronald", "Mary", "Ris", "Stacy", "Ashley"];

  //Reading from console
  if (process.argv.length > 2) {
    sampleUsers = process.argv.slice(2);
  }
  let count = sampleUsers.length;

  if (count == 0) printResults([], []);

  // iterate the names array and validate them with the method
  sampleUsers.forEach((name) =>
    validateUser(name, (error, data) => {
      if (error) {
        failureUser.push(error.message);
      } else {
        successUser.push(data);
      }
      count--;
      if (count === 0) printResults(successUser, failureUser);
    })
  );
}

solution();
