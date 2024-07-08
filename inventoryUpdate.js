// Inventory Update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.


// Update quantities or add new items from new inventory to current inventory
function updateInventory(curInv, newInv) {
    for (let [itemQty, itemName] of newInv) {
        let index = curInv.findIndex(item => item[1] === itemName);
        if (index !== -1) {
            curInv[index][0] += itemQty;
        } else {
            curInv.push([itemQty, itemName]);
        }
    }
    // Sort and return the inventory alphabetically by item name
    return curInv.sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var currentInventory = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInventory = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(currentInventory, newInventory);



// Pseudocode

// 1. Merge inventories: Iterate through the `newInv` array and update the quantities in `currInv`.
//    If an item in `newInv` is not found in `curInv`, add it to `curInv`.
// 2. Sort the inventory: After merging the inventories, sort `curInv` alphabetically by the item name.

