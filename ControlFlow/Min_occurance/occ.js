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
let numRes = 0;
for (i = 1; i < n; i++) {
    num = parseInt(readLine());
    if(num[0]==num[i]) numRes++;
}
console.log(numRes);