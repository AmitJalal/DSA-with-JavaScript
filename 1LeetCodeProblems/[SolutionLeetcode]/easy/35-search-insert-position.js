const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((end + start) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      start = middle + 1;
      // eslint-disable-next-line no-continue
      continue;
    }

    if (nums[middle] > target) {
      end = middle - 1;
      // eslint-disable-next-line no-continue
      continue;
    }

    return middle;
  }

  return start;
};

export default searchInsert;
