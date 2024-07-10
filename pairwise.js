// Pairwise

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15

// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6




// Second attempt
// Time complexity: average case: O(n), worst case: O(n^2)
// Space complexity: O(n)
// Improvement: instead of using a nested loop, I use a hash map (object in JavaScript) to track the indices of elements seen.
function pairwiseImproved(arr, arg) {
    let sumIndices = 0;
    let usedIndices = new Set();
    let elementIndexMap = new Map();

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        let complement = arg - arr[i];

        // Check if the complement is already in the map
        if (elementIndexMap.has(complement)) {
            // Iterate over the indices stored for the complement value
            for (let complementIndex of elementIndexMap.get(complement)) {
                // Check if both indices are not used
                if (!usedIndices.has(complementIndex) && !usedIndices.has(i)) {
                    sumIndices += complementIndex + i; // Add the indices to the sum;
                    usedIndices.add(complementIndex); // Mark the complement index as used
                    usedIndices.add(i); // Mark the current index as used
                    break; // Move to the next element in the array
                }
            } 
        }

        // Add the current element and its index to the map
        if (!elementIndexMap.has(arr[i])) {
            elementIndexMap.set(arr[i], []); // Initialize the entry with an empty array
        }
        elementIndexMap.get(arr[i]).push(i); // Add the index to the list of indices for this value
    }

    return sumIndices;
}



// 1st attempt
// Time complexity: O(n^2)
// Space complexity: O(n)
function pairwise(arr, arg) {
    let sumIndices = 0;
    let usedIndices = new Set();

    for (let left = 0; left < arr.length - 1; left++) {
        for (let right = left + 1; right < arr.length; right++) {
            if (arr[left] < arg) {
                if (!usedIndices.has(left) && !usedIndices.has(right)) {
                    if (arr[left] + arr[right] === arg) {
                        usedIndices.add(left);
                        usedIndices.add(right);
                        sumIndices += left + right;
                    }
                }
            }
        }
    }

    return sumIndices;
}
