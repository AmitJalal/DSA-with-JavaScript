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

let AandB = readLine().split(" ");
let A = parseInt(AandB[0]);
let B = parseInt(AandB[1]);
let c = "No";
for (let i = 1; i <= 3; i++) {
    if ((A * B * i) % 2 != 0) {
        c = "Yes";
        break;
    }
    else {
        c = "No";
    }
}
console.log(c);