function numJewelsInStones(jewels, stones) {
    let n = jewels.length;
    let m = stones.length;
    let hash = new Set();

    // add elements to the hash
    for (let i = 0; i < n; i++) {
        hash.add(jewels.charAt(i));
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        if (hash.has(stones.charAt(i))) count++;
    }

    return count;
};

let jewels = numJewelsInStones("aA","aAAbbbb");
console.log(jewels);