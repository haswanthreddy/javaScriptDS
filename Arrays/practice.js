/**
* @description simple question to practice array problem
*/

// Reverse a string using array

// input : "Hi my name is Mr. Nobody"


import process from 'process';

const str = process.argv.slice(2).join(' ');

//method 1
function reverseAString1 (string) {
    const backwards = []
    const length = string.length
    if (length < 2) {
        return string
    }
    for (let i = string.length -1; i >= 0; i-- ) {
        backwards.push(string[i])
    }
    return backwards.join('')
}

console.log(reverseAString1(str))

//method 2

function reverseAString2 ( string ) {
    return string.length < 2 ? string : string.split('').reverse().join('');
}

// method 3
const reverseAString3 = string => [...string].reverse().join('')


console.log(reverseAString2(str))

console.log(reverseAString3(str))