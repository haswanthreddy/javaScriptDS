/**
 * @desc First reccuring element in an array
 * 
 * ex1:
 * input: arr = [2,5,1,2,3,5,1,2,4]
 * output: 2
 * 
 * ex2:
 * input: arr = [2,1,1,2,3,5,1,2,4]
 * output: 1
 * 
 * ex3:
 * input: arr = [2,3,4,5]
 * output: undefined
 */

// O(n^2) approach
function firstReccuringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i]
            }
        }
    }
    return undefined;
}

//solution
const arr = [2,5,1,2,3,5,1,2,4]

const arrHashTable = {}
let repeated;

for (let i of arr) {
    if (arrHashTable[i] !== undefined) {
        repeated = i
        break
    } else {
        arrHashTable[i] = 1
    }   
}

console.log(repeated)




