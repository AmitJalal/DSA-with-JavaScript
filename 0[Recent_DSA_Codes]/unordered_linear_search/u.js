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

// function to find the K element in the list
function searchK(K, testCases) {
    let found = -1;
    for(let i=0; i<testCases; i++){
        let n = parseInt(readLine());
        if (n === K) {
            found = i;
            break;
        }
    }
    return found
}

// to find
let K = parseInt(readLine());

// length of list 
let testCases = parseInt(readLine());


console.log(searchK(K, testCases));