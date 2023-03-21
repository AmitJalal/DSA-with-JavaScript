const dominantIndex = (nums) => {
  let max = -Infinity;
  let maxIndex;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (max / nums[i] < 2 && nums[i] !== max) {
      return -1;
    }
  }

  return maxIndex;
};

export default dominantIndex;
