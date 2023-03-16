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

function reduceArr(arr) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0 || i===0) {
            sum += arr[i];
        } 
        else sum -= arr[i];
    }
    return sum;
}
let n = parseInt(readLine());
let arr = []
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(readLine());
}

let reduce = reduceArr(arr);
console.log(reduce);
