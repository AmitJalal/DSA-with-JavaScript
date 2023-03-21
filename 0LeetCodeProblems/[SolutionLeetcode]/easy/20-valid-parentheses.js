const isValid = (s) => {
  const stack = [];
  const openSet = new Set(['(', '{', '[']);
  const closeMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (let i = 0; i < s.length; i += 1) {
    if (openSet.has(s[i])) {
      stack.push(s[i]);
    } else {
      const pop = stack.pop();

      if (pop !== closeMap.get(s[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

export default isValid;
