// implement an algoritm to perform basic string compression.
// And if the result string would not become smaller than
(() => {
  const stringCompressor = (value) => {
    let result = '';
    let last = value[0];
    let count = 0;

    for (let i = 0; i < value.length; i += 1) {
      if (value[i] === last) {
        count += 1;
      } else {
        result += `${last}${count}`;
        last = value[i];
        count = 1;
      }
    }

    return `${result}${last}${count}`;
  };

  console.log('aasdfffaa', stringCompressor('aasdfffaa'));
  console.log('abcdd', stringCompressor('abcdd'));
  console.log('edfeeeccec', stringCompressor('edfeeeccec'));
})();
