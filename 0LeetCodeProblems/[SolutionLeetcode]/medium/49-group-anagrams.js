const groupAnagrams = (strs) => {
  const map = {};

  for (let i = 0; i < strs.length; i += 1) {
    const sortedStr = strs[i].split('').sort().join('');

    if (map[sortedStr]) {
      map[sortedStr].push(strs[i]);
    } else {
      map[sortedStr] = [strs[i]];
    }
  }

  return Object.values(map);
};

export default groupAnagrams;
