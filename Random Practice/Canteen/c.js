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

//some errors to be fixed!!

let input1 = readLine().trim().split(" ");
let n = parseInt(input1[0]);
let k = parseInt(input1[1]);
let bill = readLine().split(" ").map(Number);
let charged = parseInt(readLine());
let totalBill = 0;

for(let ele in bill){
    totalBill += bill[ele];
}

let splitBill = totalBill/2;
let newBill = (totalBill - bill[k] )/2;
let newsplitBill = charged - newBill

if(charged === newsplitBill){
    console.log("It is Correct!");
}
else console.log(newsplitBill);
