class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a"), b = new Node("b"), c = new Node("c"), d = new Node("d");
a.next = b; b.next = c; c.next = d;

const reverseList = () => {
    
}

