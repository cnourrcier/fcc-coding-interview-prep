// The bubble sort method starts at the beginning of an unsorted array 
// and 'bubbles up' unsorted values towards the end, iterating through 
// the array until it is completely sorted. 
// It does this by comparing adjacent items and swapping them if they are out of order. 
// The method continues looping through the array until no swaps occur at which point the array is sorted.

// This method requires multiple iterations through the array 
// and for average and worst cases has quadratic time complexity. 
// While simple, it is usually impractical in most situations.

// Instructions: Write a function bubbleSort which takes an array of integers as input 
// and returns an array of these integers in sorted order from least to greatest.

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
