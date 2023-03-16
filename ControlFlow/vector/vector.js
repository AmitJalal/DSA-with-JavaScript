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
let a = readLine().split(" ");
let b = readLine().split(" ");

let a1 = parseInt(a[0]);
let a2 = parseInt(a[1]);
let a3 = parseInt(a[2]);

let b1 = parseInt(b[0]);
let b2 = parseInt(b[1]);
let b3 = parseInt(b[2]);

AB = ((a1 * b1) + (a2 * b2) + (a3 * b3));
AXB = ((a2*b3) - (a3*b2)) - ((a1*b3) - (b1*a3)) + ((a1*b2) - (a2*b1)) ** 2;
let A = 

if (AXB = 0) {
    console.log(1); // parallel
}
else if (AB = 0) {
    console.log(2); // perpendicular
}
else {
    console.log(0);
}


