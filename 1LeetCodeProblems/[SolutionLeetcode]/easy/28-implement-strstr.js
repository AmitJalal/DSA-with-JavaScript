const strStr = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  let i = 0;
  let j = 0;

  for (; i < haystack.length; i += 1) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }

      j += 1;
    } else {
      i -= j;
      j = 0;
    }
  }

  return -1;
};

export default strStr;
