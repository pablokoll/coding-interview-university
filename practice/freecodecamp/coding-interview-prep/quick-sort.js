function quickSort(array) {
  let low = 0;
  let high = array.length - 1;
  return quicksort(array, low, high)
}

function quicksort(array, low, high) {
  if (low < high) {
    let initialpivot = partition(array, low, high);
    quicksort(array, low, initialpivot - 1);
    quicksort(array, initialpivot + 1, high);
  }

  return array;
}

function partition(array, low, high) {
  let i = low - 1;
  let pivot = array[high];

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++

      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  }

  let tmp2 = array[i + 1];
  array[i + 1] = array[high];
  array[high] = tmp2;

  return i + 1;
};

// console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(quickSort([8, 7, 6, 1, 0, 9, 2]));
