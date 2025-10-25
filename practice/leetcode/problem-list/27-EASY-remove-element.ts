function removeElement(nums: number[], val: number): number {
    let i = 0;
    
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    console.log(`nums: ${nums}, i: ${i}`);
    return i;
}

console.log(removeElement([3,2,2,3], 3))