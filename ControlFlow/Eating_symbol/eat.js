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

let S = readLine();
let sum = 0;
let add = "+";
let sub = "-";
for (i=0; i<S.length; i++){
    if(S[i]===add)
        (sum=sum+1);
    
    else if (S[i]===sub)
    (sum=sum-1);
}
console.log(sum);

