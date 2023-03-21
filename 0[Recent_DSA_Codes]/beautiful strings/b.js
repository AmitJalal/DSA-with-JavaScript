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

function beautifulStr(s) {
  let a = 0, b = 0, c = 0, beauty = 0;
  let count = new Map();

  count.set("0 0", 1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") a++;
    if (s[i] === "b") b++;
    if (s[i] === "c") c++;

    if (count.has(a - b + " " + (a - c))) {
      beauty += count.get(a - b + " " + (a - c));
      count.set(a - b + " " + (a - c), 1 + count.get(a - b + " " + (a - c)));
    } else count.set(a - b + " " + (a - c), 1);
  }

  return beauty;
}

let testCases = parseInt(readLine());

for (let i = 0; i < testCases; i++) {
  let string = readLine().trim();
  console.log(beautifulStr(string));
}
