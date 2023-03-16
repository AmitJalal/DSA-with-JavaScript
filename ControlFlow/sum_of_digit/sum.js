let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

let T = parseInt(readLine());
let sum = 0;
for(let i=0; i<T; i++){
    let n = readLine().split("");
    console.log(n + "this is user input");
    let x = n[i];
    console.log(x + " this is no. at index");
    sum = sum + parseInt(x);
    console.log(sum, i);
}