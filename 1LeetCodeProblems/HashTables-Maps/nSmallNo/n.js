function smallerNumbersThanCurrent(nums) {
    let numCount = {};
    for (let i = 0; i < nums.length; i++) {
        numCount[nums[i]] ? numCount[nums[i]] += 1 : numCount[nums[i]] = 1;
    }

    let len = Object.values(numCount).length;
    let smallNumCount = [];
    // for(let i=0; i<len; i++){
    //     let val = Object.values(numCount)
        
    //     console.log(...val);
    //     smallNumCount.push(val[i])
    // }
   
    // console.log(smallNumCount);
//    console.log(Object.keys(numCount))
//    console.log(Object.values(numCount));
//    numCount.
    // console.log(numCount);
    return smallNumCount;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));