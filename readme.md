# freeCodeCamp Coding Interview Prep

[Source Link](https://www.freecodecamp.org/learn/coding-interview-prep/)

## Algorithms

### 1. Find the Symmetric Difference

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

### 2. Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

### 3. No Repeats Please

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

### 4. Pairwise

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

### 5. Implement Bubble Sort

The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

### 6. Implement Selection Sort

Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

### 7. Implement Insertion Sort

Insertion sort works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

### 8. Implement Quick Sort

Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

### 9. Implement Merge Sort

Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. 

The steps of merge sort, then, are:
1) Recursively split the input array in half until a sub-array with only one element is produced.
2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge.

### 10. Implement Binary Search

Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element. It operates using the following steps:

Find the middle value of a sorted array. If value == target return true (The value has been found and the search is complete).
If middle value < target, search right half of array in next compare.
If middle value > target, search left half of array in next compare.
If after searching the whole array the value is not present, return false (The array has been searched and the value is not in the array).
As you can see, you are successively halving an array, which gives you the log(n) efficiency. 

Write a function binarySearch that implements the binary search algorithm on an array, returning the path you took (each middle value comparison) to find the target in an array.

The function takes a sorted array of integers and a target value as input. It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value. The target value should be the last element of the returned array. If the value is not found, return the string Value Not Found.

For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5].

For this challenge, when halving, you MUST use Math.floor() when doing division: Math.floor(x/2). This will give a consistent, testable path.

## Data Structures

### 1. Typed Arrays

### 2. Learn how a Stack Works

### 3. Create a Stack Class

### 4. Create a Queue Class

### 5. Create a Priority Queue Class

### 6. Create a Circular Queue

### 7. Create a Set Class

### 8. Perform a Union on Two Sets

### 9. Perform an Intersection on Two Sets of Data

### 10. Perform a Difference on Two Sets of Data

### 11. Perform a Subset Check on Two Sets of Data

### 12. Create and Add to Sets in ES6

### 13. Remove Items from a set in ES6

### 14. Use .has and .size on an ES6 Set

### 15. Use Spread and Notes for ES5 Set() Integration

### 16. Create a Map Data Structure

### 17. Create an ES6 JavaScript Map

### 18. Create a Hash Table

### 19. Work with Nodes in a Linked List

### 20. Create a Linked List Class

### 21. Remove Elements from a Linked List

### 22. Search Within a Linked List

### 23. Remove Elements from a Linked List by Index

### 24. Add Elements at a Specific Index in a Linked List

### 25. Create a Doubly Linked List

### 26. Reverse a Doubly Linked List

### 27. Add a New Element to a Binary Search Tree

### 28. Find the Minimum and Maximum Value in a Binary Search Tree

### 29. Check if an Element is Present in a Binary Search Tree

### 30. Check if Tree is Binary Search Tree

### 31. Find the Minimum and Maximum Height fo a Binary Search Tree

### 32. Use Depth First Search in a Binary Search Tree

### 33. Use Breadth First Search in a Binary Search Tree

### 34. Delete a Leaf Node in a Binary Search Tree

### 35. Delete a Node with One Child in a Binary Search Tree

### 36. Delete a Node with Two Children in a Binary Search Tree

### 37. Invert a Binary Search Tree

### 38. Create a Trie Search Tree

### 39. Insert an Element into a Max Heap

### 40. Remove an Element from a Max Heap

### 41. Implement Heap Sort with a Mini Heap

### 42. Adjacency List

### 43. Adjacency Matrix

### 44. Incidence Matrix

### 45. Breadth-First Search

### 46. Depth-First Search
