let fs = require("fs");
const { readlink } = require("fs/promises");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// function countOddStr(n, c=0) {
//     if ( n % 2 !== 0) c++
//     return c;
// }

let c = 0;

let n = parseInt(readLine());

while (n > 0) {
  let str = readLine().trim();
  if (str.length % 2 !== 0) c++;
  
  n--;
}
console.log(c);
