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
   if(root===null) return [];

    const dfs = [];
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        // console.log('stack.pop()', current, '\n', '\n', '---------------------');
        // console.log(current.val);
        dfs.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return dfs;
}

console.log(depthFirstSearch(a));  // --> [ 'a', 'b', 'd', 'e', 'c', 'f' ]
console.log(depthFirstSearch([ ]));  // [ undefined ]

// console.log('root node---', '\n \n', a, '\n \n', '--------------------');

/* 

        Node {
        val: 'a',
        left: Node {
            val: 'b',
            left: Node { val: 'd', left: null, right: null },
            right: Node { val: 'e', left: null, right: null }
        },
        right: Node {
            val: 'c',
            left: Node { val: 'f', left: null, right: null },
            right: null
        }
        }   

        // when pop() b -->
            stack.pop() Node {
            val: 'b',
            left: Node { val: 'd', left: null, right: null },
            right: Node { val: 'e', left: null, right: null }
            }
     //-->  stack.pop() Node { val: 'd', left: null, right: null }
    //-->   stack.pop() Node { val: 'e', left: null, right: null }

    // after b -> pop c --> 

    stack.pop() Node {
            val: 'c',
            left: Node { val: 'f', left: null, right: null },
            right: null
    }

    // --> stack.pop() Node { val: 'f', left: null, right: null }

*/