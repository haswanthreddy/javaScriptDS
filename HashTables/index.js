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

    keys() {
        const keys = []
        for (let i =0; i < this.data.length; i++) {
            if (this.data[i]){
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keys.push(this.data[i][j][0])
                    }
                    continue
                }
                keys.push(this.data[i][0]);
            }
        }
        return keys;
        
    values() {
        const values = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        console.log(this.data[i][j], "************")
                        values.push(this.data[i][j][1])
                    }
                    continue
                }
                values.push(this.data[i][0][1]); 
            }      
        }
        return values
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
<<<<<<< Updated upstream
console.log(myhash1.keys());  // O(n); in case of collision O(n*m) m being the size of data stored in same hash or address 
=======
console.log(myhash2.values()) // same as time complexity keys
>>>>>>> Stashed changes

