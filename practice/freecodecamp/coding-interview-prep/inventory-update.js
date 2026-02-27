function updateInventory(arr1, arr2) {
  let result = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    let inventoryTwo = arr2[i];

    for (let j = 0; j < arr1.length; j++) {
      let inventoryOne = arr1[j];
      if (inventoryOne[1] === inventoryTwo[1]) {
        inventoryOne[0] += inventoryTwo[0];
        found = true;
        break;
      }

    }

    if (!found) {
      result.push(inventoryTwo);
    }
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length - 1; j++) {
      if (result[i][1] > result[j][1]) {
        let swap = result[i];
        result[i] = result[j];
        result[j] = swap;
      }
    }
  }
  return result;
}


// console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])) // should return an array with a length of 6.
// should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
//  should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
