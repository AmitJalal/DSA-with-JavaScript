// write a method to replace all spaces with '%20'
// O(n)
(() => {
  const replaceSpaces = (value) => encodeURIComponent(value);

  console.log('foo bar baz', replaceSpaces('foo bar baz'));
  console.log('foo bar ', replaceSpaces('foo bar '));
})();

// O(n)
(() => {
  const replaceSpaces = (value) => value.replace(/\s/g, '%20');

  console.log('foo bar baz', replaceSpaces('foo bar baz'));
  console.log('foo bar ', replaceSpaces('foo bar '));
})();

// O(2n) ~ O(n)
(() => {
  const replaceSpaces = (value) => {
    const splittedString = value.split('');

    return splittedString
      .map((char) => {
        if (char === ' ') {
          return '%20';
        }

        return char;
      })
      .join('');
  };

  console.log('foo bar baz', replaceSpaces('foo bar baz'));
  console.log('foo bar ', replaceSpaces('foo bar '));
})();
