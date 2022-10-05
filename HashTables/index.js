class HashTable {
    constructor (size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key,value) {
        const address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        return this.data[address].push([key,value]);
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const myhash1 = new HashTable(2);
const myhash2 = new HashTable(10);

myhash1.set('grapes',1000); // O(1)
myhash1.set('apples',2000);
console.log(myhash1) 
// HashTable { data: [ <1 empty item>, [ [Array], [Array] ] ] }

console.log(myhash1.get('apples')); // O(n) since size is limited and collision occurs


myhash2.set('bananas',3000);
myhash2.set('mangos',4000);
console.log(myhash2.get('mangos')) //  O(1)

