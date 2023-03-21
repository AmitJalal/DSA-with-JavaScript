const findDuplicates = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    const index = Math.abs(nums[i]);

    if (nums[index - 1] < 0) {
      result.push(index);
    }

    nums[index - 1] = -nums[index - 1];
  }

  return result;
};
