let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());

let sequence = [];
for (let i = 0; i < n; i++) {
  sequence.push(parseInt(readLine()));
}

let ith = parseInt(readLine());

let sum = 0;
for (let i = ith - 1; i < sequence.length; i += ith) {
  sum += sequence[i];
}
console.log(sum);
