const reverse = (x) => {
  let absX = Math.abs(x);
  let result = '';

  while (absX > 0) {
    result += absX % 10;
    absX = Math.floor(absX / 10);
  }

  if (+result < -(2 ** 31) || +result > 2 ** 31 - 1) {
    return 0;
  }

  return x < 0 ? -result : +result;
};

export default reverse;
