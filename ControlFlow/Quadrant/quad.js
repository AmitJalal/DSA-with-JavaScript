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

//string of no.s
let n = parseInt(readLine());
// quadrant
for (let i = 0; i < n; i++) {
    let p = readLine().split(" "); // " 2 9" "2" "9"
    
    //no.1 converted to integer
    let x = parseInt(p[0]);
    // console.log(x); //--> testing code
    //no.2 converted to integer
    let y = parseInt(p[1]);
    // console.log(y);  //--> testing code 
    if (x > 0 && y > 0) {
        console.log("Q1");
    }
    else if (x < 0 && y > 0) {
        console.log("Q2");
    }
    else if (x < 0 && y < 0) {
        console.log("Q3");
    }
    else if (x > 0 && y < 0) {
        console.log("Q4");
    }
}

