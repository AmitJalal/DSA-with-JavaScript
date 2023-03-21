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

// find length of rope after evry iteration remove rope of length and  0 too

let N = parseInt(readLine());
let arr = [];
while (N > 0) {
  arr.push(parseInt(readLine()));
  N--;
}

let cutRope = new Set();

while (arr.length > 0) {
  let min = Math.min(...arr);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] - min;
    if (arr[i] !== 0) res.push(arr[i]);
  }

  cutRope.add(res.length);

  arr = res;
  arr.length = res.length;
}

cutRope.delete(0);
for (let ele of cutRope) {
  console.log(ele);
}
