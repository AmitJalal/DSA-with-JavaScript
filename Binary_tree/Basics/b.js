// "Basics Of Binary Tree"

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const a = new Node("a"),
    b = new Node("b"),
    c = new Node("c"),
    d = new Node("d"),
    e = new Node("e"),
    f = new Node('f')
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

/* 
               a
             /  \
           /     \
          b       c
        /   \      \
       d     e      f 
               
*/

console.log(a);
