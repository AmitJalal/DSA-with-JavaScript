const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';

  let prefix = '';

  for (let i = 0; i < strs[0].length; i += 1) {
    if (strs.every((str) => str[i] === strs[0][i])) {
      prefix += strs[0][i];
    } else {
      break;
    }
  }

  return prefix;
};

export default longestCommonPrefix;
