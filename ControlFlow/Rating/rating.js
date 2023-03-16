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


let R = parseInt(readLine());

if (R <= 1200) {
    console.log("ABC");
}
else if (R > 1200 && R <= 2800) {
    console.log("ARC");
}
else {
    console.log("AGC");
}
