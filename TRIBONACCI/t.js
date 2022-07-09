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
let memoized = {}
function tribonacci(n){
  if(n===0)return 0;
  if(n===1 || n==2) return 1;
  if(memoized[n] !== undefined) return memoized[n];
 
  
  memoized[n] = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
  // console.log(memoized);
  
  // let sum = tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3);
  return memoized[n];
}

let n = parseInt(readLine());
console.log(tribonacci(n));