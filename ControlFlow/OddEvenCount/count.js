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
let len = readLine();
let odd = 0;
let even = 0;
for (let i = 0; i < len; i++) {
    let num = parseInt(readLine());
    if (num % 2 == 0) even++;
    else odd++;
}
console.log(odd);
console.log(even);