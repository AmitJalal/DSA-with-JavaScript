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
let num1 = parseInt(nums[0]);
let num2 = parseInt(nums[1]);
let op = num1 + num2;
let sum = num1+num2;

if (num1<num2 && sum>12){
    console.log((sum - 12)+1);
}
else if (num1>num2 || num1==num2 && sum == 12){
    console.log(sum);
}
else if (num2>num1 && sum > 12){
    console.log(sum -12);
}
