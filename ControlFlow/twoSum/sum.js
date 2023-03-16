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
let nums = readLine().split(" ");
console.log(nums);
let target = readLine();
let tarInt = parseInt(target);
let arr = nums[" "];
console.log(arr);
let a1 = parseInt(nums[0]);
for (let i=1; i<=nums.length; i++){
    if(tarInt - a1 == arr){
       
    }
    console.log(nums.indexOf(i))
}