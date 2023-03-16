class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    //add at tail of the linkedList
    append(value) {
        // const newNode = {
        //     value: value,
        //     next: null
        // }
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    //prepend to the linkedList (begining)
    // prepend(value){
    //     const newNode = {
    //         value:value,
    //         next:null
    //     }
    //     this.head = newNode;
    //     this.head.next = newNode;
    //     this.length++;
    // }

    //prepend to the linkedList
    prepend(value) {
        // const newNode = {
        //     value:value,
        //     next:null
        // }
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    //insert new element at certain index
    insert(index, value) {
        //check params
        if (index >= this.length) return this.append(value);

        const newNode = new Node(value);
        
    }

    //print the elements in the linkedList
    printList() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(1)
myLinkedList.prepend(3)
console.log(myLinkedList.printList());

