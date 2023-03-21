const removeElement = (nums, val) => {
  let i = 0;

  for (; i < nums.length; i += 1) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }

  return nums.length;
};

export default removeElement;
