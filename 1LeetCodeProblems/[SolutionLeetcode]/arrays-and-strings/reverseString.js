// Implement an algorithm to reverse string
// O(n)
(() => {
  const reverseString = (value) => {
    let result = '';

    for (let i = value.length - 1; i >= 0; i -= 1) {
      result += value[i];
    }

    return result;
  };

  console.log('cracking', reverseString('cracking'));
  console.log('the coding', reverseString('the coding'));
  console.log('interview', reverseString('interview'));
})();

// in-place
(() => {
  const reverseString = (value) => value.split('').reverse().join('');

  console.log('cracking', reverseString('cracking'));
  console.log('the coding', reverseString('the coding'));
  console.log('interview', reverseString('interview'));
})();
