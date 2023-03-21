let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//-----------------------------
function wiggleMaxLength(nums) {
    
    if(nums.length<2) return nums.length;
    
    let firstDiff = nums[1] - nums[0];
    let count = firstDiff != 0 ? 2 : 1;
    
    for(let i=2; i<nums.length; i++){
        let currDiff = nums[i] - nums[i-1];
        if((currDiff>0 && firstDiff<=0) || (currDiff<0 && firstDiff>=0)){
            count++;
            firstDiff = currDiff;
        }
    }
    return count;
};

let inputList =  readLine().trim().split(",").map(Number);
console.log(wiggleMaxLength(inputList));

