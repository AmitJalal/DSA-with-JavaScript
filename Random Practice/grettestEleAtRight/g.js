let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function replaceElements(arr) {
  // Implement this function  
  let largest = 0;
  let max = [];
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] >= largest) {
      largest = arr[i];
      max.push(largest)
    }
  }
   max.reverse();
  return max;
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index = 0; index < numElems; index++) {
  arr.push(parseInt(readLine()));
}
let res = replaceElements(arr);
for (elem of res) {
  console.log(elem);
}

console.log(-1);