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
let mat1 = [];

for (let i = 0; i < n; i++) {
  let list = readLine().trim().split(" ").map(Number);
  let temp = [];
  for (let j = 0; j < list.length; j++) {
    temp.push(list[j]);
  }
  mat1.push(temp);
}

let p = parseInt(readLine());
let mat2 = [];
for (let i = 0; i < p; i++) {
  let list = readLine().trim().split(" ").map(Number);
  let temp = [];
  for (let j = 0; j < list.length; j++) {
    temp.push(list[j]);
  }
  mat2.push(temp);
}

/* 
    1 2    1 1 1 1
    1 2    1 1 1 1
    1 2


*/
let ans = Array(n)
  .fill(0)
  .map(() => new Array(mat2[0].length).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < mat2[0].length; j++) {
    ans[i][j] = 0;
    for (let k = 0; k < p; k++) {
      ans[i][j] += mat1[i][k] * mat2[k][j];
    }
  }
}



for(const ele of ans){
  console.log(...ele);
}
