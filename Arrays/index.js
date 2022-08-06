class MyArray {
    constructor () {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++ ;
        return this.data; 
    }

    pop() {
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }

    deleteAtIndex (index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems (index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1]; 
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const arr = new MyArray();

arr.push('hi'); // O(1)
arr.push(1);
arr.push(5);
arr.push(true);

console.log(arr)

arr.pop(); // O(1)

console.log(arr)

arr.deleteAtIndex(1); // O(n)

console.log(arr)

arr.shiftItems(1); // O(n)

console.log(arr)