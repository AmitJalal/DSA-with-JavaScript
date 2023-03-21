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


// fn for finding peak element


//  1 3 6 4 9
function peakElement(arr, len){
    let max =  Math.max(...arr);
    if(len === 1) return 1;
    if(arr[0] > arr[1]) return 1
    for(let i=0; i<len; i++){
        if(arr[i] > arr[i - 1] && arr[i] > (arr[i + 1] || 0)) return i+1;
    }
    // if(arr.indexOf(max) == len) return arr.indexOf(max) + 1;
   
    return -1
}


// input
let t = parseInt(readLine())

for(let i=0; i<t; i++){
    let lengthOfList = parseInt(readLine())
    let list = readLine().trim().split(" ").map(Number)
    console.log(peakElement(list, lengthOfList))
}
