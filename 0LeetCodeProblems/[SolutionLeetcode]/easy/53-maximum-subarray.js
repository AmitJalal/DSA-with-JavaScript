// Kadane's algorithm - https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm

const maxSubArray = (nums) => {
  for (let i = 1; i < nums.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  return Math.max(...nums);
};

export default maxSubArray;
