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

while (n > 0) {
    if (n % 2 === 1 && n >= 0) n -= 21;
    else if (n % 2 === 0 && n >= 0) n -= 11
}
console.log(n);