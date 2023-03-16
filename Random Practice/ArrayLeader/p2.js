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
let elementsArr = [];
for(let i=0; i<n; i++){
 elementsArr[i] = parseInt(readLine());
}
elementsArr.reverse();
//  console.log(elementsArr);

let max = -Infinity;
for(let i=0; i<n; i++){
  if(elementsArr[i]>max) {
    max = elementsArr[i];
    console.log(max);
  }
}
