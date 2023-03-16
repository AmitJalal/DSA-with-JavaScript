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
let T = parseInt(readLine());
for (let i = 0; i < T; i++) {
    let test = readLine().split(" ");
    let X = parseInt(test[0]);
    let Y = parseInt(test[1]);
    let Z = parseInt(test[3]);
    console.log(X*Y + "  X*Y");    //  --> multi of two no.s
    console.log(X*Y*Z + "   X*Y*Z"); //  --> multi of three no.s
}