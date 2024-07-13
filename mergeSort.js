// Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. 
// It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. 
// But we'll start with only one array as input, so how do we get to two sorted arrays from that? 
// Well, we can recursively divide the original input in two until we reach the base case of an array with one item. 
// A single-item array is naturally sorted, so then we can start combining. 
// This combination will unwind the recursive calls that split the original array, 
// eventually producing a final sorted array of all the elements. 

// The steps of merge sort, then, are:

// 1) Recursively split the input array in half until a sub-array with only one element is produced.
// 2) Merge each sorted sub-array together to produce the final sorted array.

// Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). 
// This algorithm is popular because it is performant and relatively easy to implement.

// Instructions: Write a function mergeSort which takes an array of integers as input 
// and returns an array of these integers in sorted order from least to greatest. 
// A good way to implement this is to write one function, for instance merge, 
// which is responsible for merging two sorted arrays, and another function, for instance mergeSort, 
// which is responsible for the recursion that produces single-item arrays to feed into merge.


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    // Recursively sort both halves
    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    // Merge the two sorted halves
    return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < leftArray.length & rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            sortedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(rightArray[rightIndex]);
            rightIndex++
        }
    }

    while (leftIndex < leftArray.length) {
        sortedArray.push(leftArray[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < rightArray.length) {
        sortedArray.push(rightArray[rightIndex]);
        rightIndex++;
    }

    return sortedArray;
}