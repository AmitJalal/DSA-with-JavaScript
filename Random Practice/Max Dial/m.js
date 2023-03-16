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

let noOfDials = parseInt(readLine());
let maxLimitDial = parseInt(readLine());

let testCases = parseInt(readLine());
// let map = new Map();
// for (let i = 0; i < testCases; i++) {
//   let input = parseInt(readLine());
//   map.has(input) ? map.set(input, map.get(input) + 1) : map.set(input, 1)
// }

// for (let [key, val] of map) {
//   if (val >1) {
//     if(key+1===maxLimitDial) console.log(key);
//     break;
//   }
// }


// for (let i = 0; i < testCases; i++) {
//   let input = parseInt(readLine());
//   if (input === maxLimitDial) {
//     console.log(i);
//     break;
//   }
// }
