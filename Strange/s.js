let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
let count = 0;
for (let i = 0; i < n; i++) {
  let testCases = readLine().trim();
  let sum = 0;
  let prod = 1;
  for (let i = 0; i < testCases.length; i++) { 
    sum += +testCases[i];                     
    prod *= +testCases[i];
  }

  if(sum >= prod) count++
}
console.log(count);
