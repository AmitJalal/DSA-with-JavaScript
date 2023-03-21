function minDeletions(s) {
    const frequencies = getFrequency(s);
    let count = 0;
    let freqMap = {};

    for (let i = 0; i < frequencies.length; i++) {
        if (freqMap[frequencies[i]] == undefined) {
            freqMap[frequencies[i]] = true;
        } else {
            for (let j = frequencies[i] - 1; j >= 0; j--) {
                count++;
                if (freqMap[j] == undefined) {
                    freqMap[j] = true;
                    break;
                }
            }
        }
    }

    return count;
};

// helper function;
const getFrequency = (str) => {
    let f = {};
    for (let i = 0; i < str.length; i++) {
        if (f[str[i]] == undefined) {
            f[str[i]] = 1;
        } else {
            f[str[i]]++;
        }
    }

    let freq_arr = [];
    for (let index in f) {
        freq_arr.push(f[index]);
    }

    return freq_arr;
}