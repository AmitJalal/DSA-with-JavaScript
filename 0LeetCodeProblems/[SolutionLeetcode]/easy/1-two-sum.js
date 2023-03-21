const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(target - nums[i], i);
  }

  return [-1, -1];
};

export default twoSum;
