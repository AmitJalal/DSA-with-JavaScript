class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const a = new Node("a"), b = new Node("b"), c = new Node("c"),
    d = new Node("d"), e = new Node("e"), f = new Node('f');

a.left = b; a.right = c; b.left = d; b.right = e; c.left = f;

/* 
               a
             /  \
           /     \
          b       c
        /   \      \
       d     e      f 
               
*/

const depthFirstSearch = (root) => {
    if (!root) return [];
    const leftVal = depthFirstSearch(root.left)  // [b, d, e]
    const rightVal = depthFirstSearch(root.right) // [c, f]

    return [root.val, ...leftVal, ...rightVal];
}

// console.log(depthFirstSearch(a));  // --> [ 'a', 'b', 'd', 'e', 'c', 'f' ]
// console.log(depthFirstSearch([]));  // [ undefined ]
