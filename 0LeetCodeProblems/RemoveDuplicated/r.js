var removeDuplicates = function (nums) {
    let i = 0;
    let j = 1;
    let n = nums.length;
    while (i < j && j < n) {
        if (nums[i] === nums[j]) {
            nums[j] = "_";
            j++;
        }
        else if (nums[i] !== nums[j]){
            i++;
           nums[i] = nums[j];
        }
    }
    return nums;
};
let removed = removeDuplicates([1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6]);
console.log(removed); 