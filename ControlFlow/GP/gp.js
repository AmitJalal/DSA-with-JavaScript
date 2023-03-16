let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let a = parseInt(readLine());
let b = parseInt(readLine());
let c = parseInt(readLine());
//formula for the next integer
let nextInt = parseInt(a*((c/b)**3));
console.log(nextInt);
console.log("5"-"2");