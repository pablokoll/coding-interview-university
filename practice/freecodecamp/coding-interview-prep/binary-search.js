// do until the pointers low and high meet each other.
//   mid = (low + high) / 2
// if (x == arr[mid])
//   return mid
// else if (x > arr[mid]) // x is on the right side
//   low = mid + 1
// else                       // x is on the left side
//   high = mid - 1


function binarySearch(searchList, value) {
  let arrayPath = [];

  let low = 0;
  let high = searchList.length - 1;
  let found = false;
  while (!found) {
    let middle = Math.floor((low + high) / 2);
    let element = searchList[middle];
    arrayPath.push(element);
    console.log("middle: ", middle);
    console.log("element ", element);
    console.log("low ", low);
    console.log("high ", high);
    if (element === value) {
      found = true;
      break;
    } else if (value > element) {
      // right
      console.log("right!")
      low = middle + 1;
    } else {
      // left
      console.log("left!")
      high = middle - 1;
    }

    if (high - low < 0) {
      return "Value Not Found";
    }
  }
  return arrayPath;
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

console.log(binarySearch(testArray, 6));



