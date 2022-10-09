class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor (value) {
        this.head = {
            value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        const arr = [];

        let currentNode = this.head 

        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }

        return arr
    }

    append (value) {
        this.length++;

        const newNode = {
            value: value,
            next: null,
        }
        // const newNode = new Node(value)
        this.tail.next = newNode,
        this.tail = newNode
        return this
    }

    prepend (value) {
        this.length++;

        // const oldHead = this.head

        // this.head = {
        //     value,
        //     next: oldHead
        // }

        const newNode = {
            value,
            next: null
        };

        newNode.next = this.head

        this.head = newNode
        return this
    }

    // insert (index, value) {
    //     if (index === 0) {
    //         this.prepend(value) 
    //         return this.printList()
    //     }

    //     let currentIndex = 1;
    //     let currentNode = this.head.next
    //     while ( currentNode !== null && currentIndex ) {
    //         if (currentIndex === index) {
    //             const newNode = {
    //                 value,
    //                 next: null
    //             }
    //             newNode.next = currentNode.next
    //             currentNode.next = newNode
    //             return this.printList() ;
    //         }
    //         currentNode = currentNode.next
    //         currentIndex++
    //     } 
    // }

    insert (index, value) {
        // check params if type int, max value and min value according to length
        if (index >= this.length ) {
            return this.append(value);
        }

        if (index === 0) {
            return this.prepend(value)
        }

        const newNode = {
            value,
            next: null
        }

        const leader = this.traverseToindex(index)
        const holdingPointer = leader.next
        leader.next = newNode,
        newNode.next = holdingPointer;
        this.length++
        return this.printList();
    }

    traverseToindex(index) {
        let counter = 0;
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode;
    }

    remove (index) {
        // check params 
        const leader = this.traverseToindex(index);
        leader.next = leader.next.next
        this.length--
        this.printList()
    }

    reverse () {
        if (this.length === 1) {
            return this
        }
        let first = this.head;
        this.tail = this.head;
        let second = this.head.next;
        while (second) {
            let temp = second.next
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
};


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(11);
myLinkedList.insert(2, 15)
myLinkedList.remove(2)
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList(), [16,5,10,11]);
