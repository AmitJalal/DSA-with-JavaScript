const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  const result = [];

  for (let i = 0; i < candies.length; i += 1) {
    result.push(candies[i] + extraCandies >= max);
  }

  return result;
};

export default kidsWithCandies;
