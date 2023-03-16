let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//153  370  371  407 ( ams no.'s)

//  user_input integer
let int = parseInt(readLine());

let num = parseInt(int / 10); // -->153 / 10 = 15

let digit1 = parseInt(num / 10 ) // --> 15 / 10 = 1
// console.log(digit1); // -->digit test

let digit2 = parseInt(num % 10); // --> 15 % 10 = 5
// console.log(digit2); // -->digit test

let digit3 = int % 10;  //  --> 153 % 10 = 3
// console.log(digit3); // -->digit test

// ams no. ---> 153 = 1**3 + 5**3 + 3**3
let sum = digit1**3 + digit2**3 + digit3**3;

if (sum == int){
    console.log("Yes");
}
else {
    console.log("No");
}