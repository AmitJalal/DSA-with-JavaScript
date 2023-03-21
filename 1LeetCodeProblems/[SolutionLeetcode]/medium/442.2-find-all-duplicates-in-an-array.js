const findDuplicates = (nums) => {
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  map.forEach((value, key) => {
    if (value > 1) result.push(key);
  });

  return result;
};
