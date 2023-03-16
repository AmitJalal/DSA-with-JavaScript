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

const MinimumAbsoluteDifference = list => {
    let minDiff = +Infinity;
    for(let i=0; i<t; i++){
         let diff = Math.abs(list[i] - list[i+1]);
         if(minDiff>diff) minDiff = diff;
    }
    return minDiff;
}
let t = parseInt(readLine());

let list = readLine().trim().split(' ').map(Number);
console.log(MinimumAbsoluteDifference(list));



