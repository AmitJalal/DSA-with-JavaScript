// implement an algoritm to determine is one string is permutation from other string
// O(2n) ~ O(n)
(() => {
  const checkPermutation = (s1, s2) => {
    if (s1.length !== s2.length) {
      return false;
    }

    const hash = {};

    for (let i = 0; i < s1.length; i += 1) {
      if (hash[s1[i]]) {
        hash[s1[i]] += 1;
      } else {
        hash[s1[i]] = 1;
      }
    }

    for (let i = 0; i < s2.length; i += 1) {
      if (!hash[s2[i]]) {
        return false;
      }
    }

    return true;
  };

  console.log('string', checkPermutation('strign', 'string'));
  console.log('crack', checkPermutation('arcck', 'crack'));
  console.log('reverse', checkPermutation('shit', 'reverse'));
})();

// O(2(n log n)) ~ O(n log n)
(() => {
  const checkPermutation = (s1, s2) => {
    if (s1.length !== s2.length) {
      return false;
    }

    return (
      [...s1].sort((a, b) => (a > b ? 1 : -1)).join('') ===
      [...s2].sort((a, b) => (a > b ? 1 : -1)).join('')
    );
  };

  console.log('string', checkPermutation('strign', 'string'));
  console.log('crack', checkPermutation('arcck', 'crack'));
  console.log('reverse', checkPermutation('shit', 'reverse'));
})();
