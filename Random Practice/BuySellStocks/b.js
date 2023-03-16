let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function maxProfit(prices) {
  let max = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - min;
    max = Math.max(max, profit);
    min = Math.min(min, prices[i]);
  }
  return max;
}

let n = parseInt(readLine());
let prices = [];
for (let i = 0; i < n; i++) {
  prices[i] = parseInt(readLine());
}

console.log(maxProfit(prices));
