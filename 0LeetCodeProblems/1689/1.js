function minPartitions(n) {
    let char = n.split("");
    let max = 0;
    for (let i = 0; i < char.length; i++) {
        max = Math.max(char[i] - '0', max)
    }
   return max;
};

console.log(minPartitions("27346209830709182346"));