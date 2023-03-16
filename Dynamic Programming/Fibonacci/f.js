const fib = n => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(20)); // fib(50) sucks!!

// memoization 

const fibMemoized = (n, memo = {}) => {
    //base cases
    if (n in memo) return memo[n];  // return value of the key in hash-> memo[7] = 13
    if (n <= 2) return 1;
    //storing it in memo
    memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
    // here memo is pass by reference, we get actual obj here and its not a copy of the hash obj
    return memo[n];
}
console.log(fibMemoized(1000));  // 4.346655768693743e+208