/**
*@description A merge array problem  
*/

/*
    given two sorted arrays combine them to get a sorted array 
    input : [1,2,3,4,5], [1,4,5,7]
    output : [1,1,2,3,4,4,5,5,7]
*/

const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [1, 4, 5, 5]

// method 1 

function sortTwoArrays (arr1, arr2) {
    const mergedArr = [];

    let arr1Item = arr1[0];
    let arr2Item = arr2[0];

    let i = 1;
    let j = 1;

    if (arr1.length === 0) {
        return arr2 
    }

    if (arr2.length === 0) {
        return arr1
    }

    while (arr1Item || arr2Item) {
        if ((arr1Item > arr2Item) || arr1Item === undefined) {
            mergedArr.push(arr2Item)
            arr2Item = arr2[i] 
            i++
        }else{
            mergedArr.push(arr1Item)
            arr1Item = arr1[j]
            j++
        }
    }

    return mergedArr;
}

console.log(sortTwoArrays(arr1,arr2))