const findDuplicates = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    // eslint-disable-next-line no-sequences
    for (let j = 0; j < nums.length, i !== j; j += 1) {
      if (nums[i] === nums[j]) result.push(nums[i]);
    }
  }

  return result;
};
