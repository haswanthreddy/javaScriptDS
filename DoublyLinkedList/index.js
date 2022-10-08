class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            previous: null,
        }
        this.tail = this.head

        this.length = 1
    }

    append (value) {
        const newNode = {
            value,
            next: null,
            previous: null,
        }
        this.tail.next = newNode
        newNode.previous = this.tail;
        this.tail = newNode

        this.length++
        return this
    }

    prepend (value) {
        const newNode = {
            value,
            next: null,
            previous: null
        }

        newNode.next = this.head
        this.head.previous = newNode
        this.head = newNode

        this.length++

        return this
    }

    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = {
            value,
            next: null, 
            previous: null
        }

        const leader = this.traverseToindex(index);
        const follower = leader.next;

        newNode.previous = leader;
        newNode.next = follower;
        follower.previous = newNode;
        leader.next = newNode;
    }

    remove (index) {
        const leader = this.traverseToindex(index);
        const previousNode = leader.previous;
        const nextNode = leader.next
        previousNode.next = nextNode
        nextNode.previous = previousNode
    }

    traverseToindex(index) {
        let counter = 0
        let currentNode = this.head

        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    printList () {
        const result = [];
        let currentNode = this.head
        while (currentNode !== null) {
            result.push(currentNode.value)
            currentNode = currentNode.next
        }

        return result;
    }
}

const doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.append(2);
doublyLinkedList.append(1)
doublyLinkedList.prepend(4)
doublyLinkedList.prepend(5);
doublyLinkedList.insert(2,11);
console.log(doublyLinkedList.printList())
doublyLinkedList.remove(2)
console.log(doublyLinkedList.printList())