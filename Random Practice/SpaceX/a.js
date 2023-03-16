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
let string = readLine().trim().split(" ");
let res = [];
for(let i=0; i<string.length; i++){
  res.push(string[i] + "spaceX");
  if(i==string.length-1){
    res.pop();
    res.push(string[i])
  }
}
let ans = ""
for(let i=0; i<res.length; i++){
   ans += res[i];
}
console.log(ans);

