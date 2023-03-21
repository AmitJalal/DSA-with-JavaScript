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

function reduceIt(n) {
  for (let i = n; i > 0; ) {
    if (n < 0) return n;
    if (n % 2 == 0 && n > 0) {
      n -= 11;
      i -= 11;
    }
    if (n % 2 != 0 && n > 0) {
      n -= 21;
      i -= 21;
    }
  }
  return n;
}

let input = parseInt(readLine());

console.log(reduceIt(input));

// 34 - 11 = 23 - 21 = 2 - 11 = -9
