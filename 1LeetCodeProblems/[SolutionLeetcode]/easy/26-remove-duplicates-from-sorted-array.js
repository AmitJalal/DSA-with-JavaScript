const removeDuplicates = (nums) => {
  let i = 0;
  let j = 1;

  for (; j < nums.length; j += 1) {
    if (nums[j] !== nums[i]) {
      i += 1;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

export default removeDuplicates;
