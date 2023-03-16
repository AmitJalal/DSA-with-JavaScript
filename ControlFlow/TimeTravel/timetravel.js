let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

//distance
let D = 600;
//user input(speed)
let s = parseInt(readLine());
//time taken = distance/speed
let t = parseInt(D/s);
//output
console.log(t);