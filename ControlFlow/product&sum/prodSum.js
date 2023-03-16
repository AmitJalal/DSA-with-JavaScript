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

// simple sum of digit of normalize. provided by user 
let N = readLine(); // user input suppose //  3 4 5 6 7
// console.log(N);                                         //  ---> test
let sum = 0;
let prod = 1;
for (let i = 0; i <= N.length - 1; i++) {
  prod *= parseInt(N[i]);
  sum += parseInt(N[i]);
  // console.log("index " + i + "   value = " + N[i]);     //  ---> test
  // console.log("--> product of the digit  " + prod);     //  ---> test
  // console.log(sum + " // --> this is sum");             //  ---> test

}
// console.log(sum);                                       //  ---> test                                      
// console.log(prod);                                      //  ---> test
console.log(prod - sum);