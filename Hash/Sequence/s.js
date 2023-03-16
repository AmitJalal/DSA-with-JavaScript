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





//input

let size = parseInt(readLine())
let list = readLine().trim().split(" ").map(Number)

let map = new Map()
 for(const ele of list){
    // map[ele] = (map[ele] || 0) + 1;
    map.has(ele) ? map.set(ele, map.get(ele)+1) : map.set(ele, 1)
 }

 console.log(map)