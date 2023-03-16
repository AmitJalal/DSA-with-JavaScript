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





let t = parseInt(readLine());
let arr = [];
for (let i = 0; i < t; i++) {
    arr[i] = Math.abs(parseInt(readLine()));
}
arr.sort((a, b) => a - b)
for (const ele of arr) {
    console.log(ele * ele);
}