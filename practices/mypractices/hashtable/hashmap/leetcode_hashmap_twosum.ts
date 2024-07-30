function twoSumHashMap(nums: number[], target: number): number[] {
    const numToIndex = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log(complement)

        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement)!, i];
        }

        numToIndex.set(nums[i], i);
    }

    throw new Error("No two sum solution");
}
console.log(twoSumHashMap([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSumHashMap([3, 2, 4], 6)); // [1,2]
console.log(twoSumHashMap([3, 3], 6)); // [0,1]
console.log(twoSumHashMap([3, 2, 3], 6)); // [0,2]



// no hashmap
function twoSum(nums: number[], target: number): number[] {
    const result = new Set<number>();
    nums.forEach((num, index, array) => {
        array.forEach((n, i) => {
            if (num + n === target && index !== i) {
                if (!result.has(index) && !result.has(i)) {
                    result.add(index);
                    result.add(i);
                }
            }
        });
    });
    return Array.from(result);
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
// console.log(twoSum([3, 2, 4], 6)); // [1,2]
// console.log(twoSum([3, 3], 6)); // [0,1]
// console.log(twoSum([3, 2, 3], 6)); // [0,2]
