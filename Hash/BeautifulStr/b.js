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

function beautifulStr(str){
  let map = {}
  for(let j=0; j<str.length; j++){
    let char = str[j];
    map[char] ? map[char]+=1 : map[char]=1
  }
 return map;
}

let T = parseInt(readLine());

for(let i=0; i<T; i++){
  let inputStr = readLine().trim();
  console.log(beautifulStr(inputStr));
}