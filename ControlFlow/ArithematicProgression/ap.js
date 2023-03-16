let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

//user inputs
let a = parseInt(readLine());
let b = parseInt(readLine());
let c = parseInt(readLine());
// common difference = c-b or b-a
// nth term of AP = a+(n-1)d
let nextNum = c+(b-a);
//output
console.log(nextNum);