function bubbleSort(array) {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength - i; j++) {
      let left = array[j];
      let right = array[j + 1];

      if (left > right) {
        let tmp = left;
        array[j] = right;
        array[j + 1] = tmp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
