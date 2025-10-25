function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b); // Ordenar el array
    console.log('nums sorted ', nums);
    for (let i = 0; i < nums.length - 2; i++) {
        // Evitar duplicados para el primer número
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        console.log('i ', i);
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Evitar duplicados para el segundo número
                while (left < right && nums[left] === nums[left - 1]) left++;
                // Evitar duplicados para el tercer número
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
