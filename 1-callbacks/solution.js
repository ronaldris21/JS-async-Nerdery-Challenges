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

const { error } = require("console");
const validateUser = require("./validate-user");

function solution() {
  // YOUR SOLUTION GOES HERE

  const successUser = [];
  const failureUser = [];

  function printResults(successUser, failureUser) {
    let total = successUser.length + failureUser.length;
    console.log(`Success ${successUser.length}/${total}\n`);
    successUser.forEach((u) => console.log(`id:${u.id}\nname:${u.name}`));

    console.log();
    console.log(`Failure ${failureUser.length}/${total}\n`);
    failureUser.forEach((u) => console.log(u));
  }

  // you get your 5 names here
  const sampleUsers = ["Ronald", "Mary", "Ris", "Stacy", "Ashley"]; //both
  //   const sampleUsers = ["Mary", "Stacy"]; //all success
  //   const sampleUsers = ["Ronald", "Ris", "Ashley"]; //all failure

  // iterate the names array and validate them with the method
  sampleUsers.forEach((name) =>
    validateUser(name, (error, data) => {
      if (error) {
        failureUser.push(error.message);
      } else {
        successUser.push(data);
      }
    })
  );

  // log the final result
  //    Success users have a 300ms delay when calculate them. So they move to the queue stack,
  //    so I'LL PRINT SUCCESS user only after the setTimeout delay is done (if there ir a delay)
  if (sampleUsers.length != failureUser.length) {
    //So it's  send at the end of the task queue, without blocking main thread
    setTimeout(() => printResults(successUser, failureUser), 300);
  } else {
    //no successful users, so no delay. I can log answers right away
    printResults(successUser, failureUser);
  }
}

solution();
