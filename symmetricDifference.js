// Find the Symmetric Difference

// Create a function that takes two or more arrays and returns an array of their symmetric difference. 
// The returned array must contain only unique values (no duplicates).

// Helper function to find the symmetric difference of two arrays
function symmetricDifference(arr1, arr2) {
    // Convert arrays to sets to filter out duplicates and for efficient lookups
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    // Find elements in set1 but not in set2
    const diff1 = [...set1].filter(x => !set2.has(x));

    // Find elements in set2 but not in set1
    const diff2 = [...set2].filter(x => !set1.has(x));

    // Concatenate the two arrays to get the symmetric difference
    const symmetricDifference = diff1.concat(diff2);

    return symmetricDifference;
}

// Main function to handle multiple arrays
function symmetricDifferenceMultiple(...arrays) {
    return arrays.reduce((acc, curr) => symmetricDifference(acc, curr), []);
}