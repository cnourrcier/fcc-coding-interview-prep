// Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element. 

// It operates using the following steps:
// Find the middle value of a sorted array. 
// If value == target return true (The value has been found and the search is complete).
// If middle value < target, search right half of array in next compare.
// If middle value > target, search left half of array in next compare.
// If after searching the whole array the value is not present, return false 
// (The array has been searched and the value is not in the array).
// As you can see, you are successively halving an array, which gives you the log(n) efficiency. 

// Write a function binarySearch that implements the binary search algorithm on an array, 
// returning the path you took (each middle value comparison) to find the target in an array.

// The function takes a sorted array of integers and a target value as input. 
// It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value. 
// The target value should be the last element of the returned array. 
// If the value is not found, return the string Value Not Found.
// For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5].

// For this challenge, when halving, you MUST use Math.floor() when doing division: Math.floor(x/2). 
// This will give a consistent, testable path.

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    let path = [];

    while (start <= end) {
        // Calculate the middle index
        let middle = Math.floor((start + end) / 2);
        // Add the middle value to the path
        path.push(array[middle]);

        // Compare the middle value with the target
        if (array[middle] === target) {
            return path; // Target found, return the path
        } else if (array[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return 'Value Not Found'; // Target not found
}