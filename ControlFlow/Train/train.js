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

let n = readLine().split(" "); 
// console.log(n);
let N = parseInt(n[0]);
// console.log(N);
let i = parseInt(n[1]);
// console.log(i);
let j = (N-i)+1
console.log(j);

