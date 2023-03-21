const isPalindrome = (x) => {
  const str = String(x);

  if (str.length === 1) return true;

  const reverse = (value) => {
    let result = '';

    for (let i = value.length - 1; i >= 0; i -= 1) {
      result += value[i];
    }

    return result;
  };

  return reverse(str) === str;
};

export default isPalindrome;
