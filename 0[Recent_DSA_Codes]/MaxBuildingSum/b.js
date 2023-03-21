let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let N = parseInt(readLine())

let buildingSpeed = readLine().split(" ").map(Number).sort((a, b)=> a - b)

let maxVal = 0;

for(let i=0; i<buildingSpeed.length; i+=2){
    maxVal += Math.min(buildingSpeed[i], buildingSpeed[i+1])
}

console.log(maxVal)