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

let k = parseInt(readLine());
let names = readLine().trim().split(" ").sort();

let nameCount = new Map();

for (const ele of names) {
  nameCount.has(ele) ? nameCount.set(ele, nameCount.get(ele) + 1) : nameCount.set(ele, 1);
}

let max = Math.max(...nameCount.values());

if (max > k) {
  for (const [key, val] of nameCount) {
    if (val > k) console.log(key);
  }
} else console.log("no such names in this town!!!");
