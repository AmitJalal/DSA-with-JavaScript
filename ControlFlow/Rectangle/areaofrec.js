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

// user input for sides of a rectangle
let a = parseInt(readLine());
let b = parseInt(readLine());
//codn for reactangle a!=b
const area = (a, b) => {
    if (a != b && a>0 && b>0) {
        console.log(a * b);
    }
    else {
        console.log(0) ;
    }
}
area(a,b);
