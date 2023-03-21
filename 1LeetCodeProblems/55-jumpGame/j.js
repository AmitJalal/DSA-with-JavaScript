function canJump(nums) {
    if(nums.length == 1) return true;
    let found = false;
    let end = nums.length;
    for(let i=0; i<end; i++){
        let remainingPart = end - (i+1);
        if(nums[i]===0) found = false
            if( nums[i] === remainingPart){
                found = true;
            }
        }
        return found;
    }
console.log(canJump([2, 3, 0, 1, 2]));