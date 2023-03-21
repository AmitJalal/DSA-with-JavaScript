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


//// FIXXXXXXXXXXXXXX   IIIITTTTTTTTTTTTTTTTT
let n = parseInt(readLine());

let list = readLine();
let eleFreq = new Map();
for (let ele of list) {
  eleFreq.has(ele)
    ? eleFreq.set(ele, eleFreq.get(ele) + 1)
    : eleFreq.set(ele, 1);
}
let keys = [...eleFreq.values()];
let minCount = 0;

let [freq1 = 0, freq2 = 0] = keys;

if (freq1 === 0 || freq2 === 0) {
  minCount = 0;
} else if (freq1 % 2 !== 0 && freq2 % 2 !== 0 && freq1 > freq2) {
  minCount = 0;
} else if (freq1 % 2 !== 0 && freq2 % 2 !== 0 && freq1 < freq2) {
  minCount = 0;
} else {
  while (freq1 !== freq2) {
    if (freq1 > freq2 && freq1 !== freq2) {
      freq1 = freq1 - 1;
      freq2 = freq2 + 1;
    }

    if (freq1 < freq2 && freq1 !== freq2) {
      freq1++;
      freq2--;
    }

    minCount++;
  }
}
console.log(minCount);
