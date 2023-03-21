// Implement an algorithm to determine if a string has all unique characters
// O(n):
(() => {
  const isAllCharactersUnique = (value) => {
    const counter = {};

    for (let i = 0; i < value.length; i += 1) {
      if (counter[value[i]]) {
        return false;
      }
      counter[value[i]] = 1;
    }

    return true;
  };

  console.log('asdfa', isAllCharactersUnique('asdfa'));
  console.log('1234a', isAllCharactersUnique('1234a'));
  console.log('asdfga', isAllCharactersUnique('asdfga'));
})();

// Without additional data structures O(n ^ 2):
(() => {
  const isAllCharactersUnique = (value) => {
    for (let i = 0; i < value.length; i += 1) {
      for (let j = 0; j < value.length; j += 1) {
        if (value[j] === value[i] && j !== i) {
          return false;
        }
      }
    }

    return true;
  };

  console.log('asdfa', isAllCharactersUnique('asdfa'));
  console.log('1234a', isAllCharactersUnique('1234a'));
  console.log('asdfga', isAllCharactersUnique('asdfga'));
})();

// Using sort O(n log n)
(() => {
  const isAllCharactersUnique = (value) => {
    const sortedString = [...value].sort((a, b) => (a > b ? 1 : -1));

    for (let i = 0; i < sortedString.length; i += 1) {
      if (i > 0) {
        if (sortedString[i] === sortedString[i - 1]) {
          return false;
        }
      }
    }

    return true;
  };

  console.log('asdfa', isAllCharactersUnique('asdfa'));
  console.log('1234a', isAllCharactersUnique('1234a'));
  console.log('asdfga', isAllCharactersUnique('asdfga'));
})();
