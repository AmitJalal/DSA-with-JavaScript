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
let minNum = +Infinity;
for (let i = 0; i < n; i++) {
    let input = parseInt(readLine());
    if (input < minNum) minNum = input
}
let sum = 0;
for(let i=0; i<=minNum; i++){
    sum += minNum % 10 ;
    minNum = parseInt(minNum / 10);
}
if(sum%2===1) console.log(0);
else console.log(1);