let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// -------- Do NOT edit anything above this line ----------

function getElementAt(qIndex, listHead) {

}

// -------- Do NOT edit anything below this line ----------
let numTests = parseInt(readLine());
for (let i = 0; i < numTests; i++) {
    let list = readLine().trim().split(" ");
    let index = parseInt(readLine());
    let head = null;
    if (list.length > 0) {
        head = new Node(parseInt(list[0]));
        let currNode = head;
        for (let j = 1; j < list.length; ++j) {
            currNode.next = new Node(parseInt(list[j]));
            currNode = currNode.next;
        }
    }
    console.log(getElementAt(index, head));
}