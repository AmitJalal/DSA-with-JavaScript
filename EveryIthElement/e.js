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
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(readLine());
}
 let eleSum =  parseInt(readLine());
 let sum =0;
for(let i=eleSum-1; i<n; i+=eleSum){
   sum+=arr[i];
}
console.log(sum);