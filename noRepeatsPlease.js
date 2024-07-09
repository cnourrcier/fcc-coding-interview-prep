// No Repeats Please

// Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
// Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {

    // Helper function to generate all permutations of a string
    function generatePermutations(arr) {
        let results = [];

        function permute(temp, remaining) {
            if (remaining.length === 0) {
                results.push(temp);
            };
            for (let i = 0; i < remaining.length; i++) {
                permute(temp + remaining[i], remaining.slice(0, i).concat(remaining.slice(i + 1)));
            }
        }

        permute("", arr);
        return results;
    }

    // Helper function to check for repeated consecutive letters in a string
    function hasRepeatedConsecutiveLetters(s) {
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] === s[i + 1]) {
                return true;
            }
        }
        return false;
    }

    // Generate all permutations of the string
    let permutations = generatePermutations(str.split(""));

    // Filter out permutations with repeated consecutive letters
    let validPermutations = permutations.filter(perm => !hasRepeatedConsecutiveLetters(perm));

    // Return the count of valid permutations
    return validPermutations.length;
}

permAlone('aab');


// Pseudocode:
// 1. Generate All Permutations: Use a recursive approach to generate all permutations of the string.
// 2. Filter Valid Permutations: Check each permutation to ensure it does not have consecutive repeating characters.
// 3. Count Valid Permutations: Count how many permutations are valid based on the filter criteria.