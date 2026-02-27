function mergeSort(array) {
  const arrayLength = array.length;
  if (arrayLength <= 1) {
    return array;
  }

  let middle = Math.floor(arrayLength / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle, arrayLength);

  console.log(`middle ${middle} - leftArray ${leftArray} - rightArray ${rightArray}`)

  let left = mergeSort(leftArray);
  let right = mergeSort(rightArray);

  return merge(left, right);
}

function merge(left, right) {
  console.log(`Merge left ${left} - right ${right}`);
  let result = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  while (l < left.length) {
    result.push(left[l])
    l++
  }

  while (r < right.length) {
    result.push(right[r])
    r++
  }

  console.log(`result ${result}`);
  return result;
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
