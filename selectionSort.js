// Selection sort works by selecting the minimum value in a list 
// and swapping it with the first value in the list. 
// It then starts at the second position, selects the smallest value in the remaining list, 
// and swaps it with the second element. 
// It continues iterating through the list and swapping elements until it reaches the end of the list. 
// Now the list is sorted. Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input 
// and returns an array of these integers in sorted order from least to greatest.

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
