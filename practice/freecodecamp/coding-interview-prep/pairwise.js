function pairwise(arr, arg) {
  let indicesUsed = []; // antes use este y despues vi que asi era O(n3) y usando un set baja a O(n2)
  let used = new Set(); // gracias a que la operacion de has es O(1) promedio y el inludes del array es O(n)
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let numI = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (used.has(i) || used.has(j)) {
        continue;
      }

      let numJ = arr[j];
      if (numI + numJ === arg) {
        result += i + j;
        console.log(`indicesUsed ${indicesUsed}`)
        console.log(`numI ${numI} - numJ ${numJ} sum: ${numI + numJ}`)
        console.log(`I ${i} - J ${j}`)
        used.add(i);
        used.add(j);
        break;
      }

    }
  }

  return result;
}

console.log(pairwise([1, 1, 1], 2));
// console.log(pairwise([7, 9, 11, 13, 15], 20));
