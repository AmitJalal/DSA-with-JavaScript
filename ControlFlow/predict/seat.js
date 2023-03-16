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

let N = parseInt(readLine());
for (let i = 1; i <= N; i++) {
    let n = readLine().split(" ");
    let c = parseInt(n[0]);
    let b = parseInt(n[1]);
    if (b > 0 && c <= 72) {
        if (b % 8 == 1 || b % 8 == 4) console.log("L");
        else if (b % 8 == 2 || b % 8 == 5) console.log("M");
        else if (b % 8 == 3 || b % 8 == 6) console.log("U");
        else if (b % 8 == 7) console.log("SL");
        else console.log("SU");
    }
    else console.log("Invalid");
}




