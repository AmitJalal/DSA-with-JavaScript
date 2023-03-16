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

let input = readLine().split(" ");
let n = parseInt(input[0]);
let k = parseInt(input[1]);
let queryList = readLine().split(" ");
for (let i = 0; i < n; i++) {
  queryList[i] = parseInt(queryList[i]);
}
let freqCount = 0;
for (let i = 0; i < n; i++) {
  if (queryList[i] == k) freqCount++;
}
console.log(freqCount);