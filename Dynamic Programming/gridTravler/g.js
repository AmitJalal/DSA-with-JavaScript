const gridTraveller = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
     console.log(key);
    if (m == 0 || n == 0) return 0;
    if (m === 1 && n === 1) return 1;

    memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
    console.log(memo[key]);
    return memo[key];
}

// console.log(gridTraveller(2, 3));
// console.log(gridTraveller(3, 2));
// console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18));