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
let arrASize = parseInt(readLine());
let arrBSize = parseInt(readLine());
//input list
let first = readLine().split(" ");
let second = readLine().split(" ");
//convert input list to integer

for(let i=0; i<first.length; i++){
    first[i] = parseInt(first[i])
    Math.abs(first[i]);
}
console.log(first);
for(let i=0; i<second.length; i++){
    second[i] = parseInt(second[i])
}


let num1=0;
let num2=0;
for(let i=0; i<first.length; i++){
    if(num1<first[i]) num1 = parseInt(first[i]);;
}
// console.log(num1);
for(let i=0; i<second.length; i++){
    if(num2<second[i]) num2 = parseInt(second[i]);;
    // console.log(num2);
}