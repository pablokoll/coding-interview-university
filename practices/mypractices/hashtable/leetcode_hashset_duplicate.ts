function containsDuplicate(nums: number[]): boolean {
    const numSet = new Set<number>();
    for (const num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}

console.log('containsDuplicate([1, 2, 3, 4]);: ', containsDuplicate([1, 2, 3, 4]));
console.log('containsDuplicate([]): ', containsDuplicate([]));
console.log('containsDuplicate([1,2,3,1,4,2,5]): ', containsDuplicate([1, 2, 3, 1, 4, 2, 5]));
